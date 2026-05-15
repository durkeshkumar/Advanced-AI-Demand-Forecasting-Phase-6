from sqlalchemy import (
    Column,
    Integer,
    Float,
    String,
    DateTime,
    ForeignKey
)

from app.database.connection import Base

import datetime


class ForecastHistory(Base):

    __tablename__ = "forecast_history"

    id = Column(Integer, primary_key=True, index=True)

    user_id = Column(Integer, ForeignKey("users.id"))

    model_name = Column(String(100))

    dataset_name = Column(String(255))

    accuracy = Column(Float)

    forecast_result = Column(String(500))

    created_at = Column(
        DateTime,
        default=datetime.datetime.utcnow
    )