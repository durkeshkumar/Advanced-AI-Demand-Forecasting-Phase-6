from fastapi import APIRouter
from fastapi.responses import FileResponse

from reportlab.platypus import (
    SimpleDocTemplate,
    Paragraph,
    Spacer
)

from reportlab.lib import styles
from openpyxl import Workbook


router = APIRouter(

    prefix="/reports",
    tags=["Reports"]

)


@router.get("/download")
def download_report():

    file = "forecast_report.pdf"

    doc = SimpleDocTemplate(file)

    style = styles.getSampleStyleSheet()

    data=[

        Paragraph(
            "AI Demand Forecast Report",
            style["Title"]
        ),

        Spacer(1,20),

        Paragraph(
            "Forecast Accuracy: 94.2%",
            style["BodyText"]
        ),

        Spacer(1,10),

        Paragraph(
            "Trend: Increasing",
            style["BodyText"]
        ),

        Spacer(1,10),

        Paragraph(
            "Confidence: High",
            style["BodyText"]
        )

    ]

    doc.build(data)

    return FileResponse(

        file,
        media_type="application/pdf",
        filename="forecast_report.pdf"

    )



@router.get("/download-excel")
def download_excel():

    wb = Workbook()

    ws = wb.active

    ws.title = "Forecast Data"


    ws.append([

        "Day",
        "Prediction"

    ])


    rows=[

        ["Day 1",120],
        ["Day 2",140],
        ["Day 3",170],
        ["Day 4",210],
        ["Day 5",260]

    ]


    for row in rows:

        ws.append(row)


    file="forecast_report.xlsx"

    wb.save(file)


    return FileResponse(

        file,

        media_type=
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",

        filename="forecast_report.xlsx"

    )