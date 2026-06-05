from fastapi import APIRouter


router = APIRouter(
    prefix="/project-activity",
    tags=["Project Activity"]
)


activities = []


@router.post("/log")
def log_activity(

    project_id: int,

    activity: str

):

    entry = {

        "project_id": project_id,

        "activity": activity

    }

    activities.append(entry)

    return {

        "message": "Activity Logged",

        "data": entry

    }


@router.get("/list")
def list_activities():

    return activities