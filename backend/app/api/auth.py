from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.database.connection import get_db
from app.models.user import User

from app.schemas.auth_schema import (
    RegisterSchema,
    LoginSchema
)

from app.core.security import (
    hash_password,
    verify_password,
    create_access_token
)

router = APIRouter(
    prefix="/auth",
    tags=["Authentication"]
)


@router.post("/register")
def register(
    user: RegisterSchema,
    db: Session = Depends(get_db)
):

    existing_user = db.query(User).filter(
        User.email == user.email
    ).first()

    if existing_user:

        raise HTTPException(
            status_code=400,
            detail="Email already exists"
        )

    hashed_password = hash_password(
        user.password
    )

    new_user = User(

        name=user.name,

        email=user.email,

        password=hashed_password,

        role=user.role

    )

    db.add(new_user)

    db.commit()

    db.refresh(new_user)

    return {

        "message":
        "User registered successfully"

    }


@router.post("/login")
def login(
    user: LoginSchema,
    db: Session = Depends(get_db)
):

    existing_user = db.query(User).filter(
        User.email == user.email
    ).first()

    if not existing_user:

        raise HTTPException(
            status_code=400,
            detail="Invalid Email"
        )

    valid_password = verify_password(
        user.password,
        existing_user.password
    )

    if not valid_password:

        raise HTTPException(
            status_code=400,
            detail="Invalid Password"
        )

    token = create_access_token({

        "sub":
        existing_user.email

    })

    return {

        "access_token":
        token,

        "token_type":
        "bearer",

        "role":
        existing_user.role,

        "name":
        existing_user.name

    }