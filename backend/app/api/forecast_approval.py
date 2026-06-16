from fastapi import APIRouter


router = APIRouter(
    prefix="/forecast-approval",
    tags=["Forecast Approval Workflow"]
)


forecasts = []

approval_history = []


# -----------------------------------
# SUBMIT FORECAST
# -----------------------------------

@router.post("/submit")
def submit_forecast(

    forecast_name:str,

    submitted_by:str

):

    forecast = {

        "id":
        len(forecasts)+1,

        "forecast_name":
        forecast_name,

        "submitted_by":
        submitted_by,

        "status":
        "Pending Approval"

    }

    forecasts.append(
        forecast
    )

    approval_history.append({

        "action":
        "Forecast Submitted",

        "forecast":
        forecast_name,

        "user":
        submitted_by

    })

    return {

        "message":
        "Forecast Submitted Successfully",

        "forecast":
        forecast

    }


# -----------------------------------
# VIEW FORECASTS
# -----------------------------------

@router.get("/list")
def get_forecasts():

    return forecasts


# -----------------------------------
# APPROVE FORECAST
# -----------------------------------

@router.put("/approve/{forecast_id}")
def approve_forecast(
    forecast_id:int,
    approved_by:str
):

    for forecast in forecasts:

        if forecast["id"] == forecast_id:

            forecast["status"] = "Approved"

            approval_history.append({

                "action":
                "Forecast Approved",

                "forecast":
                forecast["forecast_name"],

                "approved_by":
                approved_by

            })

            return {

                "message":
                "Forecast Approved",

                "forecast":
                forecast

            }

    return {
        "message":
        "Forecast Not Found"
    }


# -----------------------------------
# REJECT FORECAST
# -----------------------------------

@router.put("/reject/{forecast_id}")
def reject_forecast(
    forecast_id:int,
    rejected_by:str
):

    for forecast in forecasts:

        if forecast["id"] == forecast_id:

            forecast["status"] = "Rejected"

            approval_history.append({

                "action":
                "Forecast Rejected",

                "forecast":
                forecast["forecast_name"],

                "rejected_by":
                rejected_by

            })

            return {

                "message":
                "Forecast Rejected",

                "forecast":
                forecast

            }

    return {
        "message":
        "Forecast Not Found"
    }


# -----------------------------------
# APPROVAL HISTORY
# -----------------------------------

@router.get("/history")
def get_history():

    return approval_history

# -----------------------------------
# APPROVAL STATUS TRACKING
# -----------------------------------

@router.get("/status/{forecast_id}")
def get_forecast_status(
    forecast_id:int
):

    for forecast in forecasts:

        if forecast["id"] == forecast_id:

            return {

                "forecast_id":
                forecast["id"],

                "forecast_name":
                forecast["forecast_name"],

                "status":
                forecast["status"]

            }

    return {

        "message":
        "Forecast Not Found"

    }