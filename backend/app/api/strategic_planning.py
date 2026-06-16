from fastapi import APIRouter


router = APIRouter(
    prefix="/strategic-planning",
    tags=["Strategic Planning"]
)


# -----------------------------------
# ANNUAL PLANNING DASHBOARD
# -----------------------------------

@router.get("/annual-dashboard")
def annual_dashboard():

    return {

        "year": 2027,

        "annual_target": 100000,

        "forecasted_demand": 92000,

        "achievement_percentage": 92

    }


# -----------------------------------
# QUARTERLY PLANNING DASHBOARD
# -----------------------------------

@router.get("/quarterly-dashboard")
def quarterly_dashboard():

    return {

        "quarters": [

            {
                "quarter": "Q1",
                "target": 25000,
                "forecast": 24000
            },

            {
                "quarter": "Q2",
                "target": 25000,
                "forecast": 23000
            },

            {
                "quarter": "Q3",
                "target": 25000,
                "forecast": 22000
            },

            {
                "quarter": "Q4",
                "target": 25000,
                "forecast": 23000
            }

        ]

    }


# -----------------------------------
# BUSINESS TARGET TRACKING
# -----------------------------------

@router.get("/targets")
def business_targets():

    return {

        "sales_target": 100000,

        "revenue_target": 12000000,

        "profit_target": 3000000

    }


# -----------------------------------
# FORECAST VS TARGET
# -----------------------------------

@router.get("/forecast-vs-target")
def forecast_vs_target():

    return {

        "target": 100000,

        "forecast": 92000,

        "gap": -8000

    }


# -----------------------------------
# PLANNING RECOMMENDATIONS
# -----------------------------------

@router.get("/recommendations")
def planning_recommendations():

    return {

        "recommendations": [

            "Increase marketing activities",

            "Improve inventory availability",

            "Focus on high-growth products",

            "Review seasonal demand trends"

        ]

    }