import asyncpg
from ..dependencies import get_conn_str
from fastapi import APIRouter,Request
from fastapi.encoders import jsonable_encoder
from fastapi.responses import JSONResponse

router = APIRouter()


@router.post("/timeline/emotions")
async def emotions(request:Request):
    db = await asyncpg.connect(get_conn_str())
    body = await request.json()
    entries = []
    series = []
        
    labels = ["joy", "love", "optimism", "trust","surprise","anticipation","sadness","anger","disgust", "fear","pessimism"]
    load_query = f'''
     SELECT emotion.id, 
            emotion.joy, 
            emotion.love, 
            emotion.optimism, 
            emotion.trust, 
            emotion.surprise, 
            emotion.anticipation,
            emotion.sadness,
            emotion.anger,
            emotion.disgust,
            emotion.fear,
            emotion.pessimism
        FROM emotion
        JOIN entry ON emotion.id = entry.id
        WHERE entry.user_id = $1
        ORDER BY entry.date;
    '''
    
    emotions = await db.fetch(load_query, int(body["session_variables"]["x-hasura-user-id"]))
    entries = [emotion[0] for emotion in emotions]
    for i in range(len(labels)):
        series.append({"name":labels[i], "data": [emotion[i+1] for emotion in emotions]})
    await db.close()
    return JSONResponse(jsonable_encoder({"entries":entries, "series":series}))
        

@router.post("/timeline/topics")
async def emotions(request:Request):
    #@TODO: Implement according to emotions
    return JSONResponse(jsonable_encoder({"entries":[], "series":[]}))