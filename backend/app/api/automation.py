from fastapi import APIRouter

from apscheduler.schedulers.background import BackgroundScheduler

from datetime import datetime


router = APIRouter(
    prefix="/automation",
    tags=["Automation"]
)


# -----------------------------------
# GLOBAL VARIABLES
# -----------------------------------

scheduler = None

automation_alerts = []

forecast_interval = 1


# -----------------------------------
# CREATE SCHEDULER
# -----------------------------------

def create_scheduler():

    global scheduler

    scheduler = BackgroundScheduler()


create_scheduler()


# -----------------------------------
# AUTOMATED FORECAST FUNCTION
# -----------------------------------

def automated_forecast_job():

    current_time = str(datetime.now())

    print(

        f"AUTOMATED FORECAST GENERATED : {current_time}"

    )

    automation_alerts.append({

        "type": "Forecast",

        "message":
        f"Forecast generated automatically at {current_time}"

    })


# -----------------------------------
# AUTOMATED DATASET PROCESSING
# -----------------------------------

def automated_dataset_processing():

    current_time = str(datetime.now())

    print(

        f"DATASET AUTO PROCESSING COMPLETED : {current_time}"

    )

    automation_alerts.append({

        "type": "Dataset",

        "message":
        f"Dataset processed automatically at {current_time}"

    })


# -----------------------------------
# START FORECAST AUTOMATION
# -----------------------------------

@router.get("/start-forecast-schedule")

def start_forecast_schedule():

    global scheduler

    if not scheduler.running:

        scheduler.add_job(

            automated_forecast_job,

            "interval",

            minutes=forecast_interval,

            id="forecast_job"

        )

        scheduler.start()

        return {

            "message":
            f"Automated forecasting started every {forecast_interval} minute(s)"

        }

    return {

        "message":
        "Scheduler already running"

    }


# -----------------------------------
# START DATASET PROCESSING
# -----------------------------------

@router.get("/start-dataset-processing")

def start_dataset_processing():

    global scheduler

    scheduler.add_job(

        automated_dataset_processing,

        "interval",

        minutes=2,

        id="dataset_job"

    )

    return {

        "message":
        "Automated dataset processing started"

    }


# -----------------------------------
# STOP AUTOMATION
# -----------------------------------

@router.get("/stop-forecast-schedule")

def stop_forecast_schedule():

    global scheduler

    if scheduler.running:

        scheduler.shutdown()

        create_scheduler()

        return {

            "message":
            "Automated forecasting stopped"

        }

    return {

        "message":
        "Scheduler already stopped"

    }


# -----------------------------------
# SET INTERVAL
# -----------------------------------

@router.get("/set-interval/{minutes}")

def set_forecast_interval(minutes: int):

    global forecast_interval

    forecast_interval = minutes

    return {

        "message":
        f"Forecast interval updated to {minutes} minute(s)"

    }


# -----------------------------------
# GET ALERTS
# -----------------------------------

@router.get("/alerts")

def get_automation_alerts():

    return automation_alerts