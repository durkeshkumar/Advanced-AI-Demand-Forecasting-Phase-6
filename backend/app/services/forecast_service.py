import pandas as pd

from sklearn.linear_model import LinearRegression
from sklearn.ensemble import RandomForestRegressor
from sklearn.metrics import r2_score

from prophet import Prophet


# -----------------------------
# Linear Regression Forecast
# -----------------------------
def linear_regression_forecast(X_train, y_train):

    model = LinearRegression()

    model.fit(X_train, y_train)

    return model


# -----------------------------
# Random Forest Forecast
# -----------------------------
def random_forest_forecast(X_train, y_train):

    model = RandomForestRegressor()

    model.fit(X_train, y_train)

    return model


# -----------------------------
# Prophet Forecast
# -----------------------------
def prophet_forecast(dataframe):

    model = Prophet()

    model.fit(dataframe)

    return model


# -----------------------------
# Accuracy Calculation
# -----------------------------
def calculate_accuracy(actual, predicted):

    accuracy = r2_score(actual, predicted)

    return round(accuracy * 100, 2)

# -----------------------------
# Forecast Summary Service
# -----------------------------
def get_forecast_summary():

    return {

        "available_models": [

            "Linear Regression",
            "Random Forest",
            "Prophet"

        ],

        "total_models": 3,

        "supported_forecasts": [

            "Demand Forecasting",
            "Sales Forecasting",
            "Inventory Forecasting"

        ]

    }