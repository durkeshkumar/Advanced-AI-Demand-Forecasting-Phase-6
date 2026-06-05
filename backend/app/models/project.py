from sqlalchemy import Column
from sqlalchemy import Integer
from sqlalchemy import String

from app.database.connection import Base


class Project(Base):

    __tablename__ = "projects"

    id = Column(
        Integer,
        primary_key=True,
        index=True
    )

    name = Column(
        String(255),
        nullable=False
    )

    description = Column(
        String(500),
        nullable=True
    )

    owner = Column(
        String(100),
        nullable=False
    )

    status = Column(
        String(50),
        default="Active"
    )