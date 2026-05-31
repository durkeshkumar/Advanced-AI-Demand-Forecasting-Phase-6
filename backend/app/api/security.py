from fastapi import APIRouter, Request

from app.core.rate_limiter import limiter

router = APIRouter(
    prefix="/security",
    tags=["Security"]
)


# -----------------------------------
# AUDIT LOGGING
# -----------------------------------

@router.get("/audit-logs")
def get_audit_logs():

    return {
        "audit_logs": [
            {
                "admin": "Super Admin",
                "action": "User Status Updated",
                "module": "User Management"
            },
            {
                "admin": "Super Admin",
                "action": "Role Permission Updated",
                "module": "Access Control"
            },
            {
                "admin": "Super Admin",
                "action": "Dataset Deleted",
                "module": "Dataset Management"
            }
        ]
    }


# -----------------------------------
# SECURE FILE VALIDATION
# -----------------------------------

@router.get("/file-validation")
def validate_files():

    return {
        "file_validation_results": [
            {
                "file_name": "sales_data.csv",
                "status": "Valid"
            },
            {
                "file_name": "inventory.xlsx",
                "status": "Valid"
            },
            {
                "file_name": "malware.exe",
                "status": "Blocked"
            }
        ]
    }


# -----------------------------------
# ACCESS CONTROL VALIDATION
# -----------------------------------

@router.get("/access-control")
def access_control_validation():

    return {
        "access_control_validation": [
            {
                "role": "Super Admin",
                "module": "All Modules",
                "access": "Granted"
            },
            {
                "role": "Analyst",
                "module": "Forecasting",
                "access": "Granted"
            },
            {
                "role": "Viewer",
                "module": "Admin Panel",
                "access": "Denied"
            }
        ]
    }


# -----------------------------------
# API RATE LIMIT TEST
# -----------------------------------

@router.get("/rate-limit-test")
@limiter.limit("5/minute")
def rate_limit_test(request: Request):

    return {
        "message": "Rate limit test successful"
    }