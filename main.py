from fastapi import FastAPI
from database import engine, Base
from routes import tasks
from  routes import auth
app = FastAPI()


Base.metadata.create_all(bind=engine)

app.include_router(tasks.router, prefix="/api")
app.include_router(auth.router, prefix="/auth")


if __name__ == "__main__":
    import uvicorn
    uvicorn.run("main:app", host="0.0.0.0", port=8000)
