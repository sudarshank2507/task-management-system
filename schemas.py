from pydantic import BaseModel
from typing import Optional


class TaskBase(BaseModel):
    title: str
    description: Optional[str] = None
    priority: Optional[str] = "low"

class TaskCreate(TaskBase):
    pass

class Task(TaskBase):
    id: int
    status: str
    user_id: int

    class Config:
        orm_mode = True
        
class UserCreate(BaseModel):
    username: str
    password: str

class UserResponse(BaseModel):
    id: int
    username: str

    class Config:
        orm_mode = True

class Token(BaseModel):
    access_token: str
    token_type: str

class TaskUpdate(BaseModel):
    title: Optional[str]
    description: Optional[str]
    priority: Optional[str]
    status: Optional[str]

class TaskResponse(TaskBase):
    id: int
    status: str
    user_id: int

    class Config:
        orm_mode = True