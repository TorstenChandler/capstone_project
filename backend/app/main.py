from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.encoders import jsonable_encoder
from fastapi.responses import JSONResponse

app = FastAPI()

class Entry(BaseModel):
    id: int
    text: str
    #extend according to datamodel



@app.get("/greeting/{name}")
def greet(name):
    return JSONResponse(jsonable_encoder({"message": f"Hello {name}, nice to see you"}))


@app.post("/save")
async def save(entry:Entry):
    #add user_id from header
    #calculate emotions, topics 
    #save to database 
    return entry


