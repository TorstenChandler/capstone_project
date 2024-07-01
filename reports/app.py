import numpy as np
import matplotlib.pyplot as plt
from sqlalchemy import create_engine
import pandas as pd
import seaborn as sns
from wordcloud import WordCloud
import matplotlib.dates as mdates
import streamlit as st
import time
from utils import data_prep, filtered_df_by_date, month_plot, boxplot_monthly, pie_chart, word_cloud, pie_chart2, bar_chart, bar_seven_entries, bar_chart2
import plotly.graph_objects as go
import plotly.express as px
# We call the data.

engine = create_engine("postgresql://user:password@localhost:5432/db")
query = f"select emo.*, entry.text, entry.date from emotion as emo join entry as entry on emo.id = entry.id where entry.user_id = {1}"
df = pd.read_sql(query, engine)

data_prep(df)

emotions = ["anger","fear",	"joy",	"love",	"sadness","surprise"]

st.image('capstone_project/reports/Picture2.png', use_column_width=True)
#st.set_option('deprecation.showPyplotGlobalUse', False)
# Title of the dashboard
st.title("Mood Tracking Dashboard")

# Create a form for date inputs
with st.form(key='Dates'):
    # User input fields for start and end dates
    start_date = st.text_input("Start date", value="2023-06-24")
    end_date = st.text_input("End date", value="2024-12-24")

    # Submit button
    submit_button = st.form_submit_button(label='Submit')

# Check if the form is submitted
if submit_button:
    # Convert input strings to datetime objects
    try:
        start_date = pd.to_datetime(start_date)
        end_date = pd.to_datetime(end_date)
        
        # Display the input dates
        st.write(f"Start Date: {start_date.strftime('%Y-%m-%d')}")
        st.write(f"End Date: {end_date.strftime('%Y-%m-%d')}")
        
        # Assuming you have a DataFrame `df`
        # Example: df = pd.read_csv("your_data.csv")

        # Ensure 'date' column is in datetime format
        df['date'] = pd.to_datetime(df['date'])

        # Check if 'date' column is timezone aware and convert to UTC if needed
        if df['date'].dt.tz is None:
            df['date'] = df['date'].dt.tz_localize('UTC')
        else:
            df['date'] = df['date'].dt.tz_convert('UTC')

        # Convert start_date and end_date to UTC timezone
        start_date = start_date.tz_localize('UTC')
        end_date = end_date.tz_localize('UTC')

        # Filter the DataFrame by the input dates
        dff = filtered_df_by_date(df,start_date,end_date)

        st.title("How have I been feeling?.....")

        # Generate bar chart
        fig = bar_chart(dff)

        # Display the bar chart in Streamlit
        st.plotly_chart(fig)
        
        #Wordcloud
        st.header("Wordcloud of emotions")
        wordcloud = word_cloud(column= dff['emotion'],title= None)
        fig, ax = plt.subplots(figsize=(10, 6))
        fig.patch.set_facecolor('#0E1117')  # Set the background color of the figure
        ax.imshow(wordcloud, interpolation='bilinear')
        ax.axis('off')
        ax.set_facecolor('#0E1117')  # Set the background color of the axis
        st.pyplot(fig)
        st.header("Wordcloud of journal text")
        wordcloud2 = word_cloud(column= dff['text'],title= None)
        fig, ax = plt.subplots(figsize=(10, 6))
        fig.patch.set_facecolor('#0E1117')  # Set the background color of the figure
        ax.imshow(wordcloud2, interpolation='bilinear')
        ax.axis('off')
        ax.set_facecolor('#0E1117')  # Set the background color of the axis
        st.pyplot(fig)
        # Display subheader

        st.subheader("Emotions experienced over last 5 entries")
       
        bar_seven_entries(dff)

        st.subheader("Emotion Intensity Over Time, Scores: 0-1)")
       
        # Display line charts for each emotion
        for emotion in emotions:
           with st.container():
              st.write(f"### {emotion.capitalize()}")
              st.line_chart(data=dff, x='date', y=emotion)


        bar_chart2(dff)


    except ValueError as e:
        st.error(f"Error: {e}")
        
    
