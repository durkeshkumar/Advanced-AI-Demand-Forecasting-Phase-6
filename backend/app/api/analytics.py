import os

import pandas as pd

from fastapi import (
    APIRouter,
    HTTPException
)

from fastapi import Depends

from sqlalchemy.orm import Session
from sqlalchemy import func

from app.database.connection import SessionLocal

from app.models.forecast_history import ForecastHistory


router = APIRouter(
    prefix='/analytics',
    tags=['Analytics']
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
# DASHBOARD ANALYTICS
# -----------------------------------

@router.get('/dashboard')
def dashboard_analytics():

    upload_folder = 'uploads'

    files = os.listdir(upload_folder)

    if not files:

        raise HTTPException(
            status_code=404,
            detail='No dataset uploaded'
        )

    latest_file = files[-1]

    file_path = os.path.join(
        upload_folder,
        latest_file
    )

    try:

        if latest_file.endswith('.csv'):

            df = pd.read_csv(file_path)

        else:

            df = pd.read_excel(file_path)

    except Exception:

        raise HTTPException(
            status_code=400,
            detail='Unable to read dataset'
        )

    df.columns = df.columns.str.strip().str.lower()

    if 'sales' not in df.columns:

        raise HTTPException(
            status_code=400,
            detail='Sales column missing'
        )

    total_sales = float(df['sales'].sum())

    average_sales = float(df['sales'].mean())

    total_products = 0

    if 'product' in df.columns:

        total_products = df['product'].nunique()

    highest_sales = float(df['sales'].max())

    top_products = []

    if 'product' in df.columns:

        product_data = df.groupby(
            'product'
        )['sales'].sum().reset_index()

        top_products = product_data.sort_values(
            by='sales',
            ascending=False
        ).head(5)

        top_products = top_products.to_dict(
            orient='records'
        )

    monthly_sales = []

    if 'date' in df.columns:

        df['date'] = pd.to_datetime(df['date'])

        df['month'] = df['date'].dt.strftime('%b')

        monthly_data = df.groupby(
            'month'
        )['sales'].sum().reset_index()

        monthly_sales = monthly_data.to_dict(
            orient='records'
        )

    return {
        'total_sales': round(total_sales, 2),
        'average_sales': round(average_sales, 2),
        'total_products': total_products,
        'highest_sales': round(highest_sales, 2),
        'monthly_sales': monthly_sales,
        'top_products': top_products
    }


# -----------------------------------
# FORECAST HISTORY
# -----------------------------------

@router.get('/forecast-history')
def forecast_history(
    db: Session = Depends(get_db)
):

    history = db.query(
        ForecastHistory
    ).order_by(
        ForecastHistory.created_at.desc()
    ).all()

    response = []

    for item in history:

        response.append({
            'id': item.id,
            'model_name': item.model_name,
            'dataset_name': item.dataset_name,
            'accuracy': item.accuracy,
            'forecast_result': item.forecast_result,
            'created_at': item.created_at
        })

    return response


# -----------------------------------
# RECENT ACTIVITY
# -----------------------------------

@router.get('/recent-activity')
def recent_activity(
    db: Session = Depends(get_db)
):

    history = db.query(
        ForecastHistory
    ).order_by(
        ForecastHistory.created_at.desc()
    ).limit(5).all()

    response = []

    for item in history:

        response.append({
            'model_name': item.model_name,
            'dataset_name': item.dataset_name,
            'accuracy': item.accuracy,
            'created_at': item.created_at
        })

    return response


# -----------------------------------
# TOP MODELS ANALYTICS
# -----------------------------------

@router.get('/top-models')
def top_models(
    db: Session = Depends(get_db)
):

    history = db.query(
        ForecastHistory
    ).all()

    models = {}

    for item in history:

        if item.model_name not in models:

            models[item.model_name] = []

        models[item.model_name].append(
            item.accuracy
        )

    result = []

    for model, values in models.items():

        avg_accuracy = sum(values) / len(values)

        result.append({
            'model': model,
            'average_accuracy': round(
                avg_accuracy,
                2
            )
        })

    return result


# -----------------------------------
# FORECAST ACCURACY
# -----------------------------------

@router.get('/forecast-accuracy')
def forecast_accuracy(
    db: Session = Depends(get_db)
):

    average_accuracy = db.query(
        func.avg(ForecastHistory.accuracy)
    ).scalar()

    return {
        'average_accuracy': round(
            average_accuracy if average_accuracy else 0,
            2
        )
    }