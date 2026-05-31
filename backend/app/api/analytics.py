from fastapi import APIRouter

from cachetools import TTLCache


router = APIRouter(
    prefix="/analytics",
    tags=["Analytics"]
)


# -----------------------------------
# CACHE CONFIGURATION
# -----------------------------------

dashboard_cache = TTLCache(
    maxsize=10,
    ttl=60
)


# -----------------------------------
# DASHBOARD ANALYTICS
# -----------------------------------

@router.get("/dashboard")
def get_dashboard_data():

    # -----------------------------
    # RETURN CACHE IF AVAILABLE
    # -----------------------------

    if "dashboard" in dashboard_cache:

        return {

            "source": "cache",

            "data": dashboard_cache["dashboard"]

        }

    # -----------------------------
    # MOCK ANALYTICS DATA
    # -----------------------------

    data = {

        "total_sales": 125000,

        "total_products": 320,

        "highest_sales": 24000,

        "monthly_sales": [

            {
                "month": "Jan",
                "sales": 1200
            },

            {
                "month": "Feb",
                "sales": 1800
            },

            {
                "month": "Mar",
                "sales": 2200
            },

            {
                "month": "Apr",
                "sales": 2600
            },

            {
                "month": "May",
                "sales": 3100
            }

        ],

        "top_products": [

            {
                "product": "Laptop",
                "sales": 1200
            },

            {
                "product": "Mobile",
                "sales": 950
            },

            {
                "product": "Tablet",
                "sales": 700
            },

            {
                "product": "Smart Watch",
                "sales": 500
            },

            {
                "product": "Headphones",
                "sales": 350
            }

        ]

    }

    # -----------------------------
    # STORE IN CACHE
    # -----------------------------

    dashboard_cache["dashboard"] = data

    return {

        "source": "database",

        "data": data

    }