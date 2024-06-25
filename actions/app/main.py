from fastapi import  FastAPI
from .routers import entry
from .routers import ask
app = FastAPI()
app.include_router(ask.router)
app.include_router(entry.router)