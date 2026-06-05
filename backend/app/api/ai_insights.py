from fastapi import APIRouter


router = APIRouter(
    prefix="/ai-insights",
    tags=["AI Insights Engine"]
)


# -----------------------------------
# BUSINESS RECOMMENDATIONS
# -----------------------------------

@router.get("/recommendations")
def business_recommendations():

    return {

        "recommendations": [

            "Increase inventory for high-demand products",

            "Focus marketing on fast-growing categories",

            "Monitor low-performing products"

        ]

    }


# -----------------------------------
# DEMAND OPPORTUNITIES
# -----------------------------------

@router.get("/demand-opportunities")
def demand_opportunities():

    return {

        "opportunities": [

            "Electronics demand expected to grow by 18%",

            "Mobile accessories showing strong growth",

            "Seasonal products likely to perform well"

        ]

    }


# -----------------------------------
# DECLINING PRODUCTS
# -----------------------------------

@router.get("/declining-products")
def declining_products():

    return {

        "products": [

            "Old Tablet Model",

            "Legacy Headphones"

        ]

    }


# -----------------------------------
# HIGH GROWTH PRODUCTS
# -----------------------------------

@router.get("/high-growth-products")
def high_growth_products():

    return {

        "products": [

            "Smart Watch",

            "Wireless Earbuds",

            "Gaming Laptop"

        ]

    }


# -----------------------------------
# AI FORECAST SUMMARY
# -----------------------------------

@router.get("/forecast-summary")
def forecast_summary():

    return {

        "summary":

        "Demand is expected to increase during the next forecasting period. High-growth products should receive additional inventory allocation while declining products should be monitored closely."

    }