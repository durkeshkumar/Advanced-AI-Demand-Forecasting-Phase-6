from fastapi import APIRouter


router = APIRouter(
    prefix="/forecast-accuracy",
    tags=["Forecast Accuracy Center"]
)


# -----------------------------------
# MODEL PERFORMANCE DASHBOARD
# -----------------------------------

@router.get("/performance-dashboard")
def performance_dashboard():

    return {

        "models": [

            {
                "model": "Linear Regression",
                "accuracy": "89%"
            },

            {
                "model": "Random Forest",
                "accuracy": "94%"
            },

            {
                "model": "Prophet",
                "accuracy": "91%"
            }

        ]

    }


# -----------------------------------
# ACCURACY TRENDS
# -----------------------------------

@router.get("/accuracy-trends")
def accuracy_trends():

    return {

        "trend": [

            {
                "month": "Jan",
                "accuracy": 88
            },

            {
                "month": "Feb",
                "accuracy": 90
            },

            {
                "month": "Mar",
                "accuracy": 92
            },

            {
                "month": "Apr",
                "accuracy": 94
            }

        ]

    }


# -----------------------------------
# HISTORICAL PERFORMANCE
# -----------------------------------

@router.get("/historical-performance")
def historical_performance():

    return {

        "history": [

            {
                "year": "2023",
                "accuracy": 85
            },

            {
                "year": "2024",
                "accuracy": 90
            },

            {
                "year": "2025",
                "accuracy": 94
            }

        ]

    }


# -----------------------------------
# MODEL IMPROVEMENT
# -----------------------------------

@router.get("/model-improvement")
def model_improvement():

    return {

        "improvement": [

            {
                "model": "Linear Regression",
                "improvement": "4%"
            },

            {
                "model": "Random Forest",
                "improvement": "6%"
            },

            {
                "model": "Prophet",
                "improvement": "5%"
            }

        ]

    }


# -----------------------------------
# MODEL EVALUATION REPORT
# -----------------------------------

@router.get("/evaluation-report")
def evaluation_report():

    return {

        "best_model": "Random Forest",

        "accuracy": "94%",

        "recommendation":

        "Random Forest currently provides the highest forecasting accuracy and is recommended for production forecasting."

    }