from fastapi import APIRouter
from pydantic import BaseModel
import random

router = APIRouter(
    prefix="/forecast",
    tags=["Forecast"]
)


class ForecastRequest(BaseModel):
    model: str
    days: int


@router.post("/predict")
def generate_prediction(request: ForecastRequest):

    trends = [
        "Increasing",
        "Stable",
        "Decreasing"
    ]

    confidence = [
        "High",
        "Medium",
        "Low"
    ]

    return {

        "model": request.model,

        "days": request.days,

        "accuracy":
        f"{random.randint(90,98)}%",

        "trend":
        random.choice(trends),

        "confidence":
        random.choice(confidence)

    }