from fastapi import APIRouter


router = APIRouter(
    prefix="/dashboard-enhancements",
    tags=["Dashboard Enhancements"]
)


# -----------------------------------
# CUSTOMIZABLE WIDGETS
# -----------------------------------

@router.get("/widgets")
def get_widgets():

    return {

        "widgets": [

            "Revenue Widget",

            "Profit Widget",

            "Forecast Widget",

            "Demand Widget"

        ]

    }


# -----------------------------------
# SAVE DASHBOARD LAYOUT
# -----------------------------------

saved_layouts = []


@router.post("/save-layout")
def save_layout(

    layout_name: str

):

    saved_layouts.append(
        layout_name
    )

    return {

        "message":
        "Layout Saved",

        "layout":
        layout_name

    }


# -----------------------------------
# VIEW SAVED LAYOUTS
# -----------------------------------

@router.get("/layouts")
def get_layouts():

    return saved_layouts


# -----------------------------------
# DRILL DOWN ANALYTICS
# -----------------------------------

@router.get("/drilldown")
def drilldown():

    return {

        "revenue": {

            "electronics":
            500000,

            "mobiles":
            300000,

            "accessories":
            200000

        }

    }


# -----------------------------------
# CROSS FILTERING
# -----------------------------------

@router.get("/cross-filter")
def cross_filter():

    return {

        "filter":
        "Electronics",

        "forecast_sales":
        15000,

        "forecast_revenue":
        1200000

    }


# -----------------------------------
# DASHBOARD NAVIGATION
# -----------------------------------

@router.get("/navigation")
def dashboard_navigation():

    return {

        "modules": [

            "Dashboard",

            "Forecasting",

            "Analytics",

            "Reports",

            "Executive Reporting"

        ]

    }