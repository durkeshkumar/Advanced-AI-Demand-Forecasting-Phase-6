from fastapi import APIRouter
from fastapi.responses import FileResponse

import csv


router = APIRouter(
    prefix="/export",
    tags=["Export"]
)


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