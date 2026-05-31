from fastapi import APIRouter

import asyncio


router = APIRouter(
    prefix="/async",
    tags=["Async Processing"]
)


# -----------------------------------
# ASYNC FORECAST TASK
# -----------------------------------

@router.get("/forecast")

async def async_forecast():

    await asyncio.sleep(2)

    return {

        "status": "Completed",

        "message": "Async forecast generated successfully"

    }