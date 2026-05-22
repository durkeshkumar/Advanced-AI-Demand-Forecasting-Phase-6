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
# DASHBOARD ANALYTICS API
# -----------------------------------

@router.get("/dashboard")

def get_dashboard_data():

    # --------------------------------
    # RETURN CACHED RESPONSE
    # --------------------------------

    if "dashboard" in dashboard_cache:

        print("CACHE RESPONSE")

        return dashboard_cache["dashboard"]

    # --------------------------------
    # MOCK ANALYTICS DATA
    # --------------------------------

    print("FRESH RESPONSE")

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
                "name": "Laptop",
                "sales": 540
            },

            {
                "name": "Mobile",
                "sales": 420
            },

            {
                "name": "Tablet",
                "sales": 300
            }

        ]

    }

    # --------------------------------
    # STORE RESPONSE IN CACHE
    # --------------------------------

    dashboard_cache["dashboard"] = data

    return data