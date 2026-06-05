from fastapi import APIRouter


router = APIRouter(
    prefix="/collaboration",
    tags=["Forecast Collaboration"]
)


comments = []

activity_timeline = []

revision_history = []


# -----------------------------------
# ADD COMMENT
# -----------------------------------

@router.post("/comment")
def add_comment(

    forecast_id: int,

    user: str,

    comment: str

):

    comment_data = {

        "forecast_id": forecast_id,

        "user": user,

        "comment": comment

    }

    comments.append(
        comment_data
    )

    activity_timeline.append({

        "action":
        "Comment Added",

        "user":
        user

    })

    return {

        "message":
        "Comment Added",

        "data":
        comment_data

    }


# -----------------------------------
# VIEW COMMENTS
# -----------------------------------

@router.get("/comments")
def get_comments():

    return comments


# -----------------------------------
# SHARE REPORT
# -----------------------------------

@router.post("/share-report")
def share_report(

    report_name: str,

    shared_with: str

):

    activity_timeline.append({

        "action":
        "Report Shared",

        "report":
        report_name,

        "shared_with":
        shared_with

    })

    return {

        "message":
        "Report Shared Successfully"

    }


# -----------------------------------
# ACTIVITY TIMELINE
# -----------------------------------

@router.get("/timeline")
def get_timeline():

    return activity_timeline


# -----------------------------------
# FORECAST REVISION
# -----------------------------------

@router.post("/revision")
def add_revision(

    forecast_id: int,

    version: str

):

    revision = {

        "forecast_id":
        forecast_id,

        "version":
        version

    }

    revision_history.append(
        revision
    )

    activity_timeline.append({

        "action":
        "Forecast Updated",

        "version":
        version

    })

    return {

        "message":
        "Revision Saved",

        "data":
        revision

    }


# -----------------------------------
# VIEW REVISIONS
# -----------------------------------

@router.get("/revisions")
def get_revisions():

    return revision_history