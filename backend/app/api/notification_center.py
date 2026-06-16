from fastapi import APIRouter


router = APIRouter(
    prefix="/notification-center",
    tags=["Notification Center"]
)


notifications = []

notification_preferences = []


# -----------------------------------
# CREATE NOTIFICATION
# -----------------------------------

@router.post("/create")
def create_notification(

    title:str,

    message:str,

    role:str

):

    notification = {

        "id":
        len(notifications)+1,

        "title":
        title,

        "message":
        message,

        "role":
        role

    }

    notifications.append(
        notification
    )

    return {

        "message":
        "Notification Created",

        "notification":
        notification

    }


# -----------------------------------
# VIEW NOTIFICATIONS
# -----------------------------------

@router.get("/list")
def get_notifications():

    return notifications


# -----------------------------------
# USER PREFERENCES
# -----------------------------------

@router.post("/preferences")
def notification_preferences_config(

    user:str,

    email_alerts:bool,

    system_alerts:bool

):

    preference = {

        "user":
        user,

        "email_alerts":
        email_alerts,

        "system_alerts":
        system_alerts

    }

    notification_preferences.append(
        preference
    )

    return {

        "message":
        "Preferences Saved",

        "data":
        preference

    }


# -----------------------------------
# ROLE BASED NOTIFICATIONS
# -----------------------------------

@router.get("/role/{role}")
def role_notifications(
    role:str
):

    data = [

        notification

        for notification in notifications

        if notification["role"] == role

    ]

    return data


# -----------------------------------
# ORGANIZATION ANNOUNCEMENTS
# -----------------------------------

@router.get("/announcements")
def announcements():

    return {

        "announcements":[

            "Quarterly review meeting scheduled",

            "New forecasting policy released",

            "System maintenance on Sunday"

        ]

    }


# -----------------------------------
# NOTIFICATION HISTORY
# -----------------------------------

@router.get("/history")
def notification_history():

    return notifications