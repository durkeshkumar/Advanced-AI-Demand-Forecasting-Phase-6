from fastapi import HTTPException


def role_required(

allowed_roles:list,

user_role:str

):

    if user_role not in allowed_roles:

        raise HTTPException(

            status_code=403,

            detail="Access denied"

        )