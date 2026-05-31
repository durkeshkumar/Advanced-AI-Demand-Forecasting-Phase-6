from fastapi import APIRouter

router = APIRouter(
    prefix="/users",
    tags=["User Management"]
)


# -----------------------------------
# USER PROFILE MANAGEMENT
# -----------------------------------

@router.get("/profile")
def get_user_profile():

    return {

        "user_id": 1,

        "name": "Durkesh Kumar",

        "email": "durkesh@example.com",

        "role": "Analyst",

        "department": "Demand Forecasting",

        "status": "Active"

    }


# -----------------------------------
# USER ACTIVITY TRACKING
# -----------------------------------

@router.get("/activity")
def get_user_activity():

    activities = [

        {
            "user": "Durkesh Kumar",
            "action": "Login",
            "module": "Authentication"
        },

        {
            "user": "Durkesh Kumar",
            "action": "Upload Dataset",
            "module": "Dataset Management"
        },

        {
            "user": "Durkesh Kumar",
            "action": "Generate Forecast",
            "module": "Forecast Engine"
        },

        {
            "user": "Durkesh Kumar",
            "action": "Download Report",
            "module": "Reports"
        }

    ]

    return {

        "activity_logs": activities

    }


# -----------------------------------
# ACCOUNT STATUS MANAGEMENT
# -----------------------------------

@router.get("/account-status")
def get_account_status():

    users = [

        {
            "user": "Durkesh Kumar",
            "role": "Analyst",
            "status": "Active"
        },

        {
            "user": "Admin User",
            "role": "Super Admin",
            "status": "Active"
        },

        {
            "user": "Viewer User",
            "role": "Viewer",
            "status": "Suspended"
        }

    ]

    return {

        "user_accounts": users

    }


# -----------------------------------
# PASSWORD RESET
# -----------------------------------

@router.post("/reset-password")
def reset_password():

    return {

        "message": "Password reset request submitted successfully",

        "status": "Pending Verification"

    }


# -----------------------------------
# PROFILE UPDATE
# -----------------------------------

@router.put("/update-profile")
def update_profile():

    return {

        "message": "Profile updated successfully",

        "status": "Success"

    }