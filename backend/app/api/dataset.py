from fastapi import APIRouter
from fastapi import UploadFile
from fastapi import File
import os


router = APIRouter(

    prefix="/dataset",
    tags=["Dataset"]

)


UPLOAD_FOLDER="uploads"

os.makedirs(

    UPLOAD_FOLDER,

    exist_ok=True

)


@router.post("/upload")
async def upload_dataset(

file: UploadFile = File(...)

):

    file_path = os.path.join(

        UPLOAD_FOLDER,

        file.filename

    )


    with open(

        file_path,

        "wb"

    ) as buffer:

        content = await file.read()

        buffer.write(content)


    return {

        "message":
        "Dataset uploaded successfully",

        "filename":
        file.filename

    }