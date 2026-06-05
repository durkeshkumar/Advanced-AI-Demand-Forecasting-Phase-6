from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from slowapi.middleware import SlowAPIMiddleware

from app.database.connection import engine
from app.database.connection import Base

from app.core.rate_limiter import limiter

# -----------------------------------
# IMPORT MODELS
# -----------------------------------

from app.models.user import User
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
from app.api.export import router as export_router
from app.api.automation import router as automation_router
from app.api.integration import router as integration_router
from app.api.ai_features import router as ai_router
from app.api.forecast_insights import router as insights_router
from app.api.user_management import router as user_management_router
from app.api.notifications_phase4 import router as notifications_phase4_router
from app.api.security import router as security_router
from app.api.jwt_security import router as jwt_security_router

from app.api.service_demo import router as service_router

from app.api.background_tasks import router as background_router

from app.api.async_tasks import router as async_router

from app.api.database_optimization import router as database_router

from app.api.project import router as project_router

from app.models.project import Project

from app.api.project_activity import router as project_activity_router

from app.api.scenario import router as scenario_router

from app.api.business_intelligence import router as business_intelligence_router

from app.api.ai_insights import router as ai_insights_router

from app.api.collaboration import router as collaboration_router

from app.api.dataset_management import router as dataset_management_router

from app.api.forecast_accuracy import router as forecast_accuracy_router

from app.api.executive_reporting import router as executive_reporting_router

from app.api.dashboard_enhancements import router as dashboard_enhancements_router
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
# RATE LIMITER
# -----------------------------------

app.state.limiter = limiter

app.add_middleware(
    SlowAPIMiddleware
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
app.include_router(export_router)
app.include_router(automation_router)
app.include_router(integration_router)
app.include_router(ai_router)
app.include_router(insights_router)
app.include_router(user_management_router)
app.include_router(notifications_phase4_router)
app.include_router(security_router)
app.include_router(jwt_security_router)

app.include_router(service_router)
app.include_router(background_router)
app.include_router(async_router)
app.include_router(database_router)

app.include_router(project_router)
app.include_router(project_activity_router)
app.include_router(scenario_router)

app.include_router(business_intelligence_router)

app.include_router(ai_insights_router)

app.include_router(collaboration_router)

app.include_router(dataset_management_router)

app.include_router(forecast_accuracy_router)
app.include_router(executive_reporting_router)
app.include_router(dashboard_enhancements_router)
# -----------------------------------
# HOME ROUTE
# -----------------------------------

@app.get("/")
def home():

    return {
        "message": "Advanced AI Forecasting Backend Running"
    }