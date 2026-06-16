from fastapi import APIRouter


router = APIRouter(
    prefix="/kpi-management",
    tags=["Advanced KPI Management"]
)


kpis = []


# -----------------------------------
# CREATE KPI
# -----------------------------------

@router.post("/create")
def create_kpi(

    kpi_name:str,

    target_value:float

):

    kpi = {

        "id":
        len(kpis)+1,

        "kpi_name":
        kpi_name,

        "target_value":
        target_value

    }

    kpis.append(
        kpi
    )

    return {

        "message":
        "KPI Created",

        "kpi":
        kpi

    }


# -----------------------------------
# VIEW KPIs
# -----------------------------------

@router.get("/list")
def get_kpis():

    return kpis


# -----------------------------------
# KPI PERFORMANCE
# -----------------------------------

@router.get("/performance")
def kpi_performance():

    return {

        "kpis":[

            {
                "name":"Revenue Growth",
                "target":20,
                "actual":18
            },

            {
                "name":"Forecast Accuracy",
                "target":95,
                "actual":94
            }

        ]

    }


# -----------------------------------
# KPI TRENDS
# -----------------------------------

@router.get("/trends")
def kpi_trends():

    return {

        "trend":[

            {
                "month":"Jan",
                "value":85
            },

            {
                "month":"Feb",
                "value":88
            },

            {
                "month":"Mar",
                "value":92
            },

            {
                "month":"Apr",
                "value":94
            }

        ]

    }


# -----------------------------------
# KPI REPORT
# -----------------------------------

@router.get("/report")
def kpi_report():

    return {

        "report":

        "Revenue Growth KPI is performing close to target. Forecast Accuracy KPI is within acceptable range."

    }


# -----------------------------------
# KPI ALERT THRESHOLDS
# -----------------------------------

@router.get("/alerts")
def kpi_alerts():

    return {

        "alerts":[

            {
                "kpi":
                "Revenue Growth",

                "status":
                "Below Target"
            }

        ]

    }