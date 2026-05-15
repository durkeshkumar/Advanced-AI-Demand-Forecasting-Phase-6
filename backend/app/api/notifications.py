from fastapi import APIRouter
from fastapi import Depends

from sqlalchemy.orm import Session

from app.database.connection import SessionLocal

from app.models.notification import Notification


router = APIRouter(
    prefix="/notifications",
    tags=["Notifications"]
)


# -----------------------------------
# DATABASE CONNECTION
# -----------------------------------

def get_db():

    db = SessionLocal()

    try:
        yield db

    finally:
        db.close()


# -----------------------------------
# GET ALL NOTIFICATIONS
# -----------------------------------

@router.get("/")
def get_notifications(db: Session = Depends(get_db)):

    notifications = db.query(Notification).order_by(
        Notification.created_at.desc()
    ).all()

    return notifications


# -----------------------------------
# MARK NOTIFICATION AS READ
# -----------------------------------

@router.put("/read/{notification_id}")
def mark_notification_as_read(
    notification_id: int,
    db: Session = Depends(get_db)
):

    notification = db.query(Notification).filter(
        Notification.id == notification_id
    ).first()

    if not notification:

        return {
            "message": "Notification not found"
        }

    notification.is_read = True

    db.commit()

    return {
        "message": "Notification marked as read"
    }


# -----------------------------------
# DELETE NOTIFICATION
# -----------------------------------

@router.delete("/{notification_id}")
def delete_notification(
    notification_id: int,
    db: Session = Depends(get_db)
):

    notification = db.query(Notification).filter(
        Notification.id == notification_id
    ).first()

    if not notification:

        return {
            "message": "Notification not found"
        }

    db.delete(notification)

    db.commit()

    return {
        "message": "Notification deleted successfully"
    }