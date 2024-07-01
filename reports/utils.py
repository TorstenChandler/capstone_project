import numpy as np
import matplotlib.pyplot as plt
from sqlalchemy import create_engine
import pandas as pd
import seaborn as sns
from wordcloud import WordCloud
import matplotlib.dates as mdates
import streamlit as st
import plotly.graph_objects as go
from datetime import datetime, timedelta
import plotly.express as px

engine = create_engine("postgresql://user:password@localhost:5432/db")
query = f"select emo.*, entry.text, entry.date from emotion as emo join entry as entry on emo.id = entry.id where entry.user_id = {1}"
df = pd.read_sql(query, engine)
 # Define emotion columns
    
emotion_columns = ["anger",	"fear",	"joy",	"love",	"sadness","surprise"]

def data_prep(df):
    
    if not all(col in df.columns for col in emotion_columns):
        raise ValueError("Not all emotion columns are present in the DataFrame")

    # Create new variable for most likely predicted emotion
    df['emotion'] = df[emotion_columns].idxmax(axis=1)

    # Convert 'date' column to datetime and set as index
    df['date'] = pd.to_datetime(df['date'].dt.strftime('%Y-%m-%d'))
  #  df.set_index('date', inplace=True)

    df = df.drop_duplicates(subset=['date'])

    return df

def filtered_df_by_date(df, start_date=None, end_date=None):
    """
    Filters the DataFrame based on a date range.

    Parameters:
    df (pd.DataFrame): The input DataFrame with a 'date' column.
    start_date (str): The start date in 'YYYY-MM-DD' format. Default is '2024-02-01'.
    end_date (str): The end date in 'YYYY-MM-DD' format. Default is '2024-03-31'.

    Returns:
    pd.DataFrame: The filtered DataFrame.
    """
    df = df.drop_duplicates(subset=['date'])
    # Set default values for start_date and end_date if they are None
    if start_date is None:
        start_date = '2023-06-24'
    if end_date is None:
        end_date = '2023-12-24'

    # Filter the DataFrame based on the date range
    df_filtered = df[(df['date'] >= start_date) & (df['date'] <= end_date)]

    return df_filtered

def month_plot(dff):
    # Ensure emotion columns exist
    emotion_columns = ["anger",	"fear",	"joy",	"love",	"sadness","surprise"]
    if not all(col in dff.columns for col in emotion_columns):
        raise ValueError("Not all emotion columns are present in the DataFrame")
    
    # Ensure 'date' column is in datetime format and set it as index
    if 'date' not in dff.columns:
        raise ValueError("The DataFrame does not contain a 'date' column")
    
    dff['date2'] = pd.to_datetime(dff['date'])
    dff.set_index('date2', inplace=True)
    
    # Calculate monthly mean scores
    monthly_mean_scores = dff[emotion_columns].resample('M').mean()

    # Plot the monthly mean scores
    plt.figure(figsize=(10, 6))
    for column in monthly_mean_scores.columns:
        plt.plot(monthly_mean_scores.index, monthly_mean_scores[column], label=column)

    plt.xlabel('Date')
    plt.ylabel('Mean Emotion Score')
    plt.title('Monthly Mean Emotion Scores Over Time')
    plt.legend()
    plt.grid(True)

    # Rotate x-axis labels for better readability
    plt.xticks(rotation=45)

    # Set major locator to format dates
    plt.gca().xaxis.set_major_locator(mdates.MonthLocator(interval=1))
    plt.gca().xaxis.set_major_formatter(mdates.DateFormatter('%Y-%m'))

    plt.tight_layout()  # Adjust layout to prevent clipping of tick-labels
    plt.show()

    return plt

def boxplot_monthly(dff):
    # Define emotion columns
    emotion_columns = ["anger",	"fear",	"joy",	"love",	"sadness","surprise"]

    # Ensure emotion columns exist
    if not all(col in dff.columns for col in emotion_columns):
        raise ValueError("Not all emotion columns are present in the DataFrame")

    # Ensure 'date' column is in datetime format and set it as index
    if 'date' not in dff.columns:
        raise ValueError("The DataFrame does not contain a 'date' column")
    
    dff['date'] = pd.to_datetime(dff['date'])
    dff.set_index('date', inplace=True)

    # Calculate monthly mean scores
    monthly_mean_scores = dff[emotion_columns].resample('M').mean()

    # Reset index to move 'date' back to a column
    monthly_mean_scores.reset_index(inplace=True)

    # Convert the data from wide to long format
    long_format_df = pd.melt(monthly_mean_scores, id_vars='date', value_vars=emotion_columns, 
                             var_name='Emotion', value_name='Score')

    # Custom palette
    custom_palette = sns.color_palette("husl", len(emotion_columns))

    # Plotting the box plots using seaborn
    plt.figure(figsize=(14, 10))
    sns.boxplot(x='Emotion', y='Score', data=long_format_df, palette=custom_palette)
    plt.title('Distribution of Monthly Mean Emotion Scores')
    plt.xlabel('Emotion')
    plt.ylabel('Score')
    plt.xticks(rotation=45)
    plt.show()

    return plt


def pie_chart(dff):

    monthly_mean_scores = dff[emotion_columns].resample('ME').mean()

    monthly_mean_scores.reset_index(inplace=True)

    # Convert the data from wide to long format
    long_format_df = pd.melt(monthly_mean_scores, id_vars='date', value_vars=emotion_columns, var_name='Emotion', value_name='Score')

    # Calculate the total score for each emotion
    total_scores = long_format_df.groupby('Emotion')['Score'].sum()

    # Plotting the pie chart
    plt.figure(figsize=(8, 8))
    plt.pie(total_scores, labels=total_scores.index, autopct='%1.1f%%', startangle=140)
    plt.title('Distribution of Total Emotion Scores')
    plt.show()
    return plt

def word_cloud(column, title):
    """
    Generate and return a word cloud based on the input column.
    
    Parameters:
    - column: DataFrame column containing text data.
    - title: Title of the word cloud.
    
    Returns:
    - WordCloud object.
    """
    
    # Concatenate all text data in the column into a single string
    text = ' '.join(column.astype(str))
    
    # Generate the word cloud
    wordcloud = WordCloud(width=800, height=400, background_color='#0E1117', margin=0).generate(text)
    return wordcloud


def pie_chart2(dff):
    # Calculate total frequency counts for each emotion
    total_counts = dff[emotion_columns].sum()

    # Round values to 1 significant figure
    total_counts_rounded = total_counts.round(1)

    # Create a Plotly pie chart
    fig = go.Figure(data=[go.Pie(labels=total_counts_rounded.index, values=total_counts_rounded, hole=.3)])

    # Customize layout
    fig.update_layout(
        title_text='Percentage Distribution of Emotions'
    )

    return fig

def bar_chart(dff):
    # Calculate total frequency counts for each emotion
    total_counts = dff['emotion'].value_counts()

    # Round values to 1 significant figure
    total_counts_rounded = total_counts.round(1)

    # Create a horizontal bar chart
    fig = go.Figure(data=[go.Bar(x=total_counts_rounded.values, y=total_counts_rounded.index, orientation='h', marker=dict(color='#CBE1CB'))])

    # Customize layout
    fig.update_layout(
        title_text='Emotions experienced',
        xaxis_title='Number of journal entries classified by emotion',
        yaxis_title='Emotions',
        yaxis=dict(categoryorder='total ascending')
    )

    
    return fig


def bar_seven_entries(dff):
    # Sort the DataFrame by date
    dff = dff.sort_values(by='date')
    
    # Select the last 7 entries
    last_7_entries = dff.tail(5)
    
    # Melt the DataFrame to long format
    melted_dff = last_7_entries.melt(id_vars=['date'], value_vars=emotion_columns, var_name='emotion', value_name='emotion intensity')
    
    # Plot bar chart
    fig = px.bar(melted_dff, x='date', y='emotion intensity', color='emotion', barmode='group',
                 title='Emotions detected in last 5 entries, Scores: 0-1')
    
    # Ensure only the labels for the entries that are displayed are shown
    fig.update_layout(xaxis=dict(tickvals=last_7_entries['date'].tolist()))
    
    # Display the chart in Streamlit
    st.plotly_chart(fig)


def bar_chart2(dff):
    # Calculate mean scores for each emotion
    mean_scores = dff[emotion_columns].mean()

    # Round values to 1 significant figure
    mean_scores_rounded = mean_scores.round(3)

    # Sort the mean scores in ascending order
    mean_scores_sorted = mean_scores_rounded.sort_values()

    # Create a Plotly horizontal bar chart
    fig = go.Figure(data=[go.Bar(
        x=mean_scores_sorted.values,
        y=mean_scores_sorted.index,
        orientation='h', marker=dict(color='#CBE1CB')
    )])

    # Customize layout
    fig.update_layout(
        title_text='Mean Scores of Emotions, Scores: 0-1',
        xaxis_title='Mean Score',
        yaxis_title='Emotions'
    )

    st.plotly_chart(fig)

    return fig