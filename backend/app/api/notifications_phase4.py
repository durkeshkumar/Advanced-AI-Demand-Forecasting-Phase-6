from fastapi import APIRouter

router = APIRouter(
    prefix="/alerts",
    tags=["Notification Improvements"]
)


# -----------------------------------
# EMAIL NOTIFICATION SUPPORT
# -----------------------------------

@router.post("/send-email")
def send_email_notification():

    return {

        "status": "Success",

        "message": "Email notification sent successfully",

        "recipient": "user@example.com"

    }


# -----------------------------------
# CONFIGURABLE ALERT SETTINGS
# -----------------------------------

@router.get("/settings")
def alert_settings():

    settings = {

        "email_alerts": True,

        "forecast_alerts": True,

        "low_stock_alerts": True,

        "report_alerts": False

    }

    return {

        "alert_settings": settings

    }


# -----------------------------------
# THRESHOLD BASED ALERTS
# -----------------------------------

@router.get("/threshold-alerts")
def threshold_alerts():

    alerts = [

        {
            "product": "Laptop",
            "stock": 50,
            "threshold": 100,
            "alert": "Low Stock Alert"
        },

        {
            "product": "Mobile",
            "forecast_demand": 1500,
            "threshold": 1000,
            "alert": "High Demand Alert"
        }

    ]

    return {

        "threshold_alerts": alerts

    }


# -----------------------------------
# FORECAST FAILURE NOTIFICATIONS
# -----------------------------------

@router.get("/forecast-failures")
def forecast_failures():

    failures = [

        {
            "forecast_id": 101,
            "reason": "Dataset Missing",
            "status": "Failed"
        },

        {
            "forecast_id": 102,
            "reason": "Model Training Error",
            "status": "Failed"
        }

    ]

    return {

        "forecast_failures": failures

    }


# -----------------------------------
# REPORT COMPLETION ALERTS
# -----------------------------------

@router.get("/report-completion")
def report_completion_alerts():

    reports = [

        {
            "report_name": "Monthly Forecast Report",
            "status": "Completed"
        },

        {
            "report_name": "Sales Analytics Report",
            "status": "Completed"
        }

    ]

    return {

        "report_completion_alerts": reports

    }