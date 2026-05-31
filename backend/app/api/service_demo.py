from fastapi import APIRouter

from app.services.forecast_service import (
    get_forecast_summary
)

router = APIRouter(
    prefix="/service",
    tags=["Service Architecture"]
)


# -----------------------------------
# FORECAST SERVICE DEMO
# -----------------------------------

@router.get("/forecast-summary")
def forecast_summary():

    return get_forecast_summary()