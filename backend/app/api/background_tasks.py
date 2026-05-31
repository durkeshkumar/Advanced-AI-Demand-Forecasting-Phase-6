from fastapi import APIRouter
from fastapi import BackgroundTasks

router = APIRouter(
    prefix="/background",
    tags=["Background Processing"]
)


# -----------------------------------
# BACKGROUND JOB
# -----------------------------------

def process_forecast():

    print(
        "Forecast Processing Completed"
    )


# -----------------------------------
# START BACKGROUND TASK
# -----------------------------------

@router.post("/start-forecast")

def start_forecast_task(
    background_tasks: BackgroundTasks
):

    background_tasks.add_task(
        process_forecast
    )

    return {

        "message":
        "Forecast started in background"

    }