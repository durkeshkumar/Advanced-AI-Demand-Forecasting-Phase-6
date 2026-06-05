from fastapi import APIRouter


router = APIRouter(
    prefix="/dataset-management",
    tags=["Dataset Management"]
)


dataset_versions = []

upload_history = []

archived_datasets = []


# -----------------------------------
# DATASET VERSIONING
# -----------------------------------

@router.post("/add-version")
def add_dataset_version(

    dataset_name: str,

    version: str

):

    data = {

        "dataset_name":
        dataset_name,

        "version":
        version

    }

    dataset_versions.append(
        data
    )

    upload_history.append({

        "action":
        "Dataset Uploaded",

        "dataset":
        dataset_name,

        "version":
        version

    })

    return {

        "message":
        "Dataset Version Added",

        "data":
        data

    }


# -----------------------------------
# VIEW VERSIONS
# -----------------------------------

@router.get("/versions")
def get_versions():

    return dataset_versions


# -----------------------------------
# UPLOAD HISTORY
# -----------------------------------

@router.get("/upload-history")
def get_upload_history():

    return upload_history


# -----------------------------------
# ARCHIVE DATASET
# -----------------------------------

@router.post("/archive")
def archive_dataset(

    dataset_name: str

):

    archived_datasets.append(
        dataset_name
    )

    upload_history.append({

        "action":
        "Dataset Archived",

        "dataset":
        dataset_name

    })

    return {

        "message":
        "Dataset Archived"

    }


# -----------------------------------
# VIEW ARCHIVED DATASETS
# -----------------------------------

@router.get("/archived")
def get_archived_datasets():

    return archived_datasets


# -----------------------------------
# DATASET COMPARISON
# -----------------------------------

@router.get("/compare")
def compare_datasets(

    dataset1: str,

    dataset2: str

):

    return {

        "dataset_1":
        dataset1,

        "dataset_2":
        dataset2,

        "comparison":
        "Comparison Completed"

    }