from fastapi import APIRouter

from app.utils.audit_logger import (
    get_audit_logs
)

router = APIRouter(
    prefix="/audit",
    tags=["Audit Logs"]
)


@router.get("/logs")
def logs():

    return get_audit_logs()