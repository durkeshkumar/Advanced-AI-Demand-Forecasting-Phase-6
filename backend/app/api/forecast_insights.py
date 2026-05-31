from fastapi import APIRouter

router = APIRouter(
    prefix="/insights",
    tags=["Forecast Insights"]
)


# -----------------------------------
# MODEL COMPARISON
# -----------------------------------

@router.get("/model-comparison")
def model_comparison():

    models = [

        {"model": "Linear Regression", "accuracy": 89},
        {"model": "Random Forest", "accuracy": 94},
        {"model": "XGBoost", "accuracy": 96}

    ]

    best_model = max(
        models,
        key=lambda x: x["accuracy"]
    )

    return {

        "models": models,

        "best_model": best_model

    }


# -----------------------------------
# MODEL ACCURACY TRENDS
# -----------------------------------

@router.get("/accuracy-trends")
def accuracy_trends():

    trend_data = [

        {"month": "Jan", "accuracy": 89},
        {"month": "Feb", "accuracy": 91},
        {"month": "Mar", "accuracy": 93},
        {"month": "Apr", "accuracy": 95},
        {"month": "May", "accuracy": 96}

    ]

    return {

        "model": "XGBoost",

        "accuracy_trend": trend_data

    }


# -----------------------------------
# HISTORICAL FORECAST COMPARISON
# -----------------------------------

@router.get("/historical-comparison")
def historical_comparison():

    comparison_data = [

        {
            "product": "Laptop",
            "previous_forecast": 1000,
            "actual_sales": 950
        },

        {
            "product": "Mobile",
            "previous_forecast": 800,
            "actual_sales": 780
        },

        {
            "product": "Tablet",
            "previous_forecast": 300,
            "actual_sales": 320
        }

    ]

    return {

        "historical_forecasts": comparison_data

    }


# -----------------------------------
# CONFIDENCE SCORE VISUALIZATION
# -----------------------------------

@router.get("/confidence-scores")
def confidence_scores():

    confidence_data = [

        {
            "product": "Laptop",
            "forecast": 1200,
            "confidence_score": 96
        },

        {
            "product": "Mobile",
            "forecast": 850,
            "confidence_score": 92
        },

        {
            "product": "Tablet",
            "forecast": 250,
            "confidence_score": 88
        }

    ]

    return {

        "confidence_scores": confidence_data

    }


# -----------------------------------
# TREND BASED BUSINESS RECOMMENDATIONS
# -----------------------------------

@router.get("/business-recommendations")
def business_recommendations():

    recommendations = [

        {
            "product": "Laptop",
            "trend": "Increasing Demand",
            "recommendation": "Increase Inventory"
        },

        {
            "product": "Mobile",
            "trend": "Stable Demand",
            "recommendation": "Maintain Current Stock"
        },

        {
            "product": "Tablet",
            "trend": "Decreasing Demand",
            "recommendation": "Reduce Procurement"
        }

    ]

    return {

        "business_recommendations": recommendations

    }