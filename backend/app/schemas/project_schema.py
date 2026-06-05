from pydantic import BaseModel


class ProjectCreate(BaseModel):

    name: str

    description: str

    owner: str

    permission: str


class ProjectResponse(BaseModel):

    id: int

    name: str

    description: str

    owner: str

    permission: str

    status: str

    class Config:

        from_attributes = True