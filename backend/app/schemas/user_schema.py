from pydantic import BaseModel
from typing import Optional


class RegisterSchema(BaseModel):

    name:str

    email:str

    password:str

    role:Optional[str]="Viewer"



class LoginSchema(BaseModel):

    email:str

    password:str