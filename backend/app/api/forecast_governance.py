from fastapi import APIRouter


router = APIRouter(
    prefix="/forecast-governance",
    tags=["Forecast Governance Center"]
)


forecast_versions = []

forecast_modifications = []

approval_records = []


# -----------------------------------
# VERSION CONTROL
# -----------------------------------

@router.post("/version")
def add_version(

    forecast_name:str,

    version:str

):

    data = {

        "forecast_name":
        forecast_name,

        "version":
        version

    }

    forecast_versions.append(
        data
    )

    return {

        "message":
        "Version Added",

        "data":
        data

    }


# -----------------------------------
# VIEW VERSIONS
# -----------------------------------

@router.get("/versions")
def get_versions():

    return forecast_versions


# -----------------------------------
# TRACK MODIFICATIONS
# -----------------------------------

@router.post("/modification")
def track_modification(

    forecast_name:str,

    modified_by:str

):

    modification = {

        "forecast_name":
        forecast_name,

        "modified_by":
        modified_by

    }

    forecast_modifications.append(
        modification
    )

    return {

        "message":
        "Modification Tracked",

        "data":
        modification

    }


# -----------------------------------
# VIEW MODIFICATIONS
# -----------------------------------

@router.get("/modifications")
def get_modifications():

    return forecast_modifications


# -----------------------------------
# APPROVAL RECORDS
# -----------------------------------

@router.post("/approval-record")
def add_approval_record(

    forecast_name:str,

    approved_by:str

):

    record = {

        "forecast_name":
        forecast_name,

        "approved_by":
        approved_by

    }

    approval_records.append(
        record
    )

    return {

        "message":
        "Approval Record Added",

        "data":
        record

    }


# -----------------------------------
# VIEW APPROVAL RECORDS
# -----------------------------------

@router.get("/approval-records")
def get_approval_records():

    return approval_records


# -----------------------------------
# FORECAST LIFECYCLE
# -----------------------------------

@router.get("/lifecycle")
def lifecycle():

    return {

        "stages":[

            "Created",

            "Modified",

            "Submitted",

            "Approved",

            "Archived"

        ]

    }


# -----------------------------------
# GOVERNANCE DASHBOARD
# -----------------------------------

@router.get("/dashboard")
def governance_dashboard():

    return {

        "total_versions":
        len(forecast_versions),

        "total_modifications":
        len(forecast_modifications),

        "approval_records":
        len(approval_records)

    }