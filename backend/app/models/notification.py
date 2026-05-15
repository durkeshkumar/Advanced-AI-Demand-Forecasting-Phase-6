from sqlalchemy import (
    Column,
    Integer,
    String,
    Boolean,
    DateTime,
    ForeignKey
)

from app.database.connection import Base

import datetime


class Notification(Base):

    __tablename__ = "notifications"

    id = Column(Integer, primary_key=True, index=True)

    user_id = Column(Integer, ForeignKey("users.id"))

    title = Column(String(255))

    message = Column(String(500))

    type = Column(String(100))

    is_read = Column(Boolean, default=False)

    created_at = Column(
        DateTime,
        default=datetime.datetime.utcnow
    )