from fastapi import APIRouter
from fastapi import Depends

from sqlalchemy.orm import Session

from app.database.connection import SessionLocal

from app.models.user import User
from app.models.dataset_model import Dataset
from app.models.forecast_history import ForecastHistory
from app.models.notification import Notification


router = APIRouter(
    prefix="/admin",
    tags=["Admin"]
)


# -----------------------------------
# DATABASE CONNECTION
# -----------------------------------

def get_db():

    db = SessionLocal()

    try:
        yield db

    finally:
        db.close()


# -----------------------------------
# ADMIN DASHBOARD
# -----------------------------------

@router.get("/dashboard")
def admin_dashboard(db: Session = Depends(get_db)):

    total_users = db.query(User).count()

    total_datasets = db.query(Dataset).count()

    total_forecasts = db.query(ForecastHistory).count()

    total_notifications = db.query(Notification).count()

    return {
        "total_users": total_users,
        "total_datasets": total_datasets,
        "total_forecasts": total_forecasts,
        "total_notifications": total_notifications
    }


# -----------------------------------
# GET ALL USERS
# -----------------------------------

@router.get("/users")
def get_users(db: Session = Depends(get_db)):

    users = db.query(User).all()

    return users


# -----------------------------------
# GET ALL DATASETS
# -----------------------------------

@router.get("/datasets")
def get_datasets(db: Session = Depends(get_db)):

    datasets = db.query(Dataset).all()

    return datasets


# -----------------------------------
# DELETE DATASET
# -----------------------------------

@router.delete("/dataset/{dataset_id}")
def delete_dataset(
    dataset_id: int,
    db: Session = Depends(get_db)
):

    dataset = db.query(Dataset).filter(
        Dataset.id == dataset_id
    ).first()

    if not dataset:

        return {
            "message": "Dataset not found"
        }

    db.delete(dataset)

    db.commit()

    return {
        "message": "Dataset deleted successfully"
    }


# -----------------------------------
# GET FORECAST HISTORY
# -----------------------------------

@router.get("/forecast-history")
def get_forecast_history(
    db: Session = Depends(get_db)
):

    history = db.query(
        ForecastHistory
    ).order_by(
        ForecastHistory.created_at.desc()
    ).all()

    return history


# -----------------------------------
# SYSTEM ANALYTICS
# -----------------------------------

@router.get("/analytics")
def system_analytics(
    db: Session = Depends(get_db)
):

    total_users = db.query(User).count()

    total_datasets = db.query(Dataset).count()

    total_forecasts = db.query(ForecastHistory).count()

    return {
        "users": total_users,
        "datasets": total_datasets,
        "forecasts": total_forecasts,
        "system_status": "Running"
    }