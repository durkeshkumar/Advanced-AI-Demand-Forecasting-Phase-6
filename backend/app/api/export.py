from fastapi import APIRouter
from fastapi.responses import FileResponse

import pandas as pd
import csv


router = APIRouter(
    prefix="/export",
    tags=["Export"]
)


# -----------------------------------
# ANALYTICS CSV EXPORT
# -----------------------------------

@router.get("/analytics-csv")
def export_analytics_csv():

    filename = "analytics_report.csv"

    data = [

        ["Month", "Sales"],

        ["January", 1200],

        ["February", 1800],

        ["March", 2200],

        ["April", 2600],

        ["May", 3100]

    ]

    with open(filename, "w", newline="") as file:

        writer = csv.writer(file)

        writer.writerows(data)

    return FileResponse(

        path=filename,

        filename=filename,

        media_type="text/csv"

    )


# -----------------------------------
# DASHBOARD EXCEL EXPORT
# -----------------------------------

@router.get("/dashboard-excel")
def download_dashboard_excel():

    data = {

        "Metric": [

            "Total Sales",
            "Forecast Accuracy",
            "Revenue Prediction",
            "Active Datasets"

        ],

        "Value": [

            "125000",
            "96%",
            "240000",
            "12"

        ]

    }

    df = pd.DataFrame(data)

    file_name = "dashboard_summary.xlsx"

    df.to_excel(
        file_name,
        index=False
    )

    return FileResponse(

        path=file_name,

        filename=file_name,

        media_type="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"

    )


# -----------------------------------
# DASHBOARD PDF EXPORT
# -----------------------------------

@router.get("/dashboard-pdf")
def download_dashboard_pdf():

    file_name = "dashboard_summary.pdf"

    with open(file_name, "w") as file:

        file.write(
            "Advanced AI Demand Forecasting\n\n"
        )

        file.write(
            "Total Sales : 125000\n"
        )

        file.write(
            "Forecast Accuracy : 96%\n"
        )

        file.write(
            "Revenue Prediction : 240000\n"
        )

        file.write(
            "Active Datasets : 12\n"
        )

    return FileResponse(

        path=file_name,

        filename=file_name,

        media_type="application/pdf"

    )