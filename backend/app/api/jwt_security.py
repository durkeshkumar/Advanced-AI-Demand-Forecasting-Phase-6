from fastapi import APIRouter

router = APIRouter(
    prefix="/jwt",
    tags=["JWT Security"]
)


# -----------------------------------
# TOKEN VALIDATION
# -----------------------------------

@router.get("/validate-token")
def validate_token():

    return {

        "token_status": "Valid",

        "user": "Analyst",

        "expires_in": "30 Minutes"

    }


# -----------------------------------
# ROLE VALIDATION
# -----------------------------------

@router.get("/validate-role")
def validate_role():

    return {

        "user": "Analyst",

        "role": "Analyst",

        "access": "Granted"

    }