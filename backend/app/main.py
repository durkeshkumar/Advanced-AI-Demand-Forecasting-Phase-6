from fastapi import FastAPI

from fastapi.middleware.cors import CORSMiddleware

from app.database.connection import engine
from app.database.connection import Base


# -----------------------------------
# IMPORT MODELS
# -----------------------------------

from app.models.user_model import User
from app.models.dataset_model import Dataset

from app.models.forecast_history import ForecastHistory
from app.models.notification import Notification


# -----------------------------------
# IMPORT API ROUTES
# -----------------------------------

from app.api.auth import router as auth_router

from app.api.dataset import router as dataset_router

from app.api.forecast import router as forecast_router

from app.api.analytics import router as analytics_router

from app.api.reports import router as reports_router

from app.api.notifications import router as notification_router

from app.api.admin import router as admin_router


# -----------------------------------
# CREATE DATABASE TABLES
# -----------------------------------

Base.metadata.create_all(bind=engine)


# -----------------------------------
# FASTAPI APP
# -----------------------------------

app = FastAPI(
    title="Advanced AI Demand Forecasting API",
    version="2.0.0"
)


# -----------------------------------
# CORS SETTINGS
# -----------------------------------

origins = [
    "http://localhost:5173",
]


app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# -----------------------------------
# INCLUDE ROUTERS
# -----------------------------------

app.include_router(auth_router)

app.include_router(dataset_router)

app.include_router(forecast_router)

app.include_router(analytics_router)

app.include_router(reports_router)

app.include_router(notification_router)

app.include_router(admin_router)


# -----------------------------------
# HOME ROUTE
# -----------------------------------

@app.get("/")
def home():

    return {
        "message": "Advanced AI Forecasting Backend Running"
    }