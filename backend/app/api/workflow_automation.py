from fastapi import APIRouter

from app.utils.audit_logger import add_audit_log


router = APIRouter(
    prefix="/workflow",
    tags=["Workflow Automation"]
)


workflows = []

workflow_logs = []


# -----------------------------------
# CREATE WORKFLOW
# -----------------------------------

@router.post("/create")
def create_workflow(

    workflow_name:str,

    workflow_type:str

):

    workflow = {

        "id":
        len(workflows)+1,

        "workflow_name":
        workflow_name,

        "workflow_type":
        workflow_type,

        "status":
        "Configured"

    }

    workflows.append(
        workflow
    )

    return {

        "message":
        "Workflow Created",

        "workflow":
        workflow

    }


# -----------------------------------
# VIEW WORKFLOWS
# -----------------------------------

@router.get("/list")
def get_workflows():

    return workflows


# -----------------------------------
# EXECUTE WORKFLOW
# -----------------------------------

@router.post("/execute/{workflow_id}")
def execute_workflow(
    workflow_id:int
):

    for workflow in workflows:

        if workflow["id"] == workflow_id:

            workflow["status"] = "Executed"

            workflow_logs.append({

                "workflow":
                workflow["workflow_name"],

                "status":
                "Executed"

            })

            add_audit_log(

                "Workflow",

                "Workflow Executed",

                "System"

            )

            return {

                "message":
                "Workflow Executed",

                "workflow":
                workflow

            }

    return {

        "message":
        "Workflow Not Found"

    }


# -----------------------------------
# AUTOMATED FORECAST
# -----------------------------------

@router.post("/forecast")
def automated_forecast():

    workflow_logs.append({

        "event":
        "Forecast Generated"

    })

    add_audit_log(

        "Workflow",

        "Forecast Generated",

        "System"

    )

    return {

        "message":
        "Forecast Generated Automatically"

    }


# -----------------------------------
# AUTOMATED REPORT
# -----------------------------------

@router.post("/report")
def automated_report():

    workflow_logs.append({

        "event":
        "Report Generated"

    })

    add_audit_log(

        "Workflow",

        "Report Generated",

        "System"

    )

    return {

        "message":
        "Report Generated Automatically"

    }


# -----------------------------------
# AUTOMATED NOTIFICATION
# -----------------------------------

@router.post("/notification")
def automated_notification():

    workflow_logs.append({

        "event":
        "Notification Sent"

    })

    add_audit_log(

        "Workflow",

        "Notification Sent",

        "System"

    )

    return {

        "message":
        "Notification Sent Automatically"

    }


# -----------------------------------
# WORKFLOW EXECUTION LOGS
# -----------------------------------

@router.get("/logs")
def get_logs():

    return workflow_logs