import os
from dotenv import load_dotenv

load_dotenv()  # Load environment variables from .env file

class Settings:
    DATABASE_URL: str = os.getenv("DATABASE_URL", "sqlite:///./tasks.db")
    SECRET_KEY: str = os.getenv("SECRET_KEY", "mysecretkey")
    ALGORITHM: str = "HS256"
    ACCESS_TOKEN_EXPIRE_MINUTES: int = 30

settings = Settings()
