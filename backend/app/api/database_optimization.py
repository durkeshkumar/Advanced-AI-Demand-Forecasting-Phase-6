from fastapi import APIRouter

router = APIRouter(
    prefix="/database",
    tags=["Database Optimization"]
)


# -----------------------------------
# DATABASE INDEXING DEMO
# -----------------------------------

@router.get("/indexing-status")
def indexing_status():

    indexes = [

        {
            "table": "users",
            "indexed_column": "email",
            "status": "Indexed"
        },

        {
            "table": "datasets",
            "indexed_column": "dataset_name",
            "status": "Indexed"
        },

        {
            "table": "forecast_history",
            "indexed_column": "created_at",
            "status": "Indexed"
        }

    ]

    return {

        "database_indexes": indexes

    }