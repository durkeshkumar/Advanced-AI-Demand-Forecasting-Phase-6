# Advanced AI Demand Forecasting

## Project Overview

Advanced AI Demand Forecasting is a full-stack application that predicts product demand using historical sales data and displays analytics through an interactive dashboard.

## Features

- User Registration & Login
- Dataset Upload (CSV/Excel)
- Dashboard Analytics
- Revenue Charts
- Product Performance Charts
- AI Forecast Generation
- Dynamic Prediction Graph
- Notifications
- PDF Report Export
- Excel Report Export
- Forecast History
- Model Comparison

## Tech Stack

### Frontend
- React
- Vite
- Tailwind CSS
- Recharts
- Axios
- React Router

### Backend
- FastAPI
- SQLAlchemy
- MySQL
- Pandas
- Scikit-learn

## Folder Structure

backend/
frontend/

## Run Backend

cd backend

venv\Scripts\activate

py -m uvicorn app.main:app --reload

## Run Frontend

cd frontend

npm install

npm run dev

## API Documentation

http://127.0.0.1:8000/docs