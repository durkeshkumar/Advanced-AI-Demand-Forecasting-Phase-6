from fastapi import APIRouter


router = APIRouter(
    prefix="/organizations",
    tags=["Organization Management"]
)


organizations = []


# -----------------------------------
# CREATE ORGANIZATION
# -----------------------------------

@router.post("/create")
def create_organization(

    name: str,

    industry: str,

    admin: str

):

    organization = {

        "id":
        len(organizations)+1,

        "name":
        name,

        "industry":
        industry,

        "admin":
        admin,

        "status":
        "Active"

    }

    organizations.append(
        organization
    )

    return {

        "message":
        "Organization Created",

        "organization":
        organization

    }


# -----------------------------------
# LIST ORGANIZATIONS
# -----------------------------------

@router.get("/list")
def list_organizations():

    return organizations


# -----------------------------------
# ORGANIZATION DASHBOARD
# -----------------------------------

@router.get("/dashboard/{organization_id}")
def organization_dashboard(
    organization_id:int
):

    return {

        "organization_id":
        organization_id,

        "total_users":
        25,

        "total_datasets":
        15,

        "total_forecasts":
        32,

        "total_reports":
        12

    }


# -----------------------------------
# ORGANIZATION SETTINGS
# -----------------------------------

@router.get("/settings/{organization_id}")
def organization_settings(
    organization_id:int
):

    return {

        "organization_id":
        organization_id,

        "theme":
        "Enterprise",

        "forecast_frequency":
        "Monthly",

        "notification":
        True

    }