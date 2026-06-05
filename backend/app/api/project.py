from fastapi import APIRouter

from app.schemas.project_schema import ProjectCreate


router = APIRouter(
    prefix="/projects",
    tags=["Forecast Workspace"]
)

projects = []

activities = []


# -----------------------------------
# CREATE PROJECT
# -----------------------------------

@router.post("/create")
def create_project(project: ProjectCreate):

    project_data = project.dict()

    project_data["id"] = len(projects) + 1

    project_data["status"] = "Active"

    project_data["datasets"] = []

    project_data["forecasts"] = []

    project_data["reports"] = []

    projects.append(project_data)

    activities.append({

        "project_id": project_data["id"],

        "activity": "Project Created"

    })

    return {

        "message": "Project Created Successfully",

        "project": project_data

    }


# -----------------------------------
# LIST PROJECTS
# -----------------------------------

@router.get("/list")
def list_projects():

    return projects


# -----------------------------------
# GET PROJECT
# -----------------------------------

@router.get("/{project_id}")
def get_project(project_id: int):

    for project in projects:

        if project["id"] == project_id:

            return project

    return {

        "message": "Project Not Found"

    }


# -----------------------------------
# UPDATE PROJECT
# -----------------------------------

@router.put("/update/{project_id}")
def update_project(
    project_id: int,
    updated_project: ProjectCreate
):

    for project in projects:

        if project["id"] == project_id:

            project["name"] = updated_project.name

            project["description"] = updated_project.description

            project["owner"] = updated_project.owner

            project["permission"] = updated_project.permission

            activities.append({

                "project_id": project_id,

                "activity": "Project Updated"

            })

            return {

                "message": "Project Updated Successfully",

                "project": project

            }

    return {

        "message": "Project Not Found"

    }
    
    # -----------------------------------
# DELETE PROJECT
# -----------------------------------

@router.delete("/delete/{project_id}")
def delete_project(project_id: int):

    for project in projects:

        if project["id"] == project_id:

            projects.remove(project)

            activities.append({

                "project_id": project_id,

                "activity": "Project Deleted"

            })

            return {

                "message": "Project Deleted Successfully"

            }

    return {

        "message": "Project Not Found"

    }
    
    # -----------------------------------
# ADD DATASET TO PROJECT
# -----------------------------------

@router.post("/add-dataset/{project_id}")
def add_dataset(
    project_id: int,
    dataset_name: str
):

    for project in projects:

        if project["id"] == project_id:

            project["datasets"].append(
                dataset_name
            )

            activities.append({

                "project_id": project_id,

                "activity": f"Dataset Added : {dataset_name}"

            })

            return {

                "message": "Dataset Added",

                "project": project

            }

    return {

        "message": "Project Not Found"

    }


# -----------------------------------
# ADD FORECAST TO PROJECT
# -----------------------------------

@router.post("/add-forecast/{project_id}")
def add_forecast(
    project_id: int,
    forecast_name: str
):

    for project in projects:

        if project["id"] == project_id:

            project["forecasts"].append(
                forecast_name
            )

            activities.append({

                "project_id": project_id,

                "activity": f"Forecast Added : {forecast_name}"

            })

            return {

                "message": "Forecast Added",

                "project": project

            }

    return {

        "message": "Project Not Found"

    }


# -----------------------------------
# ADD REPORT TO PROJECT
# -----------------------------------

@router.post("/add-report/{project_id}")
def add_report(
    project_id: int,
    report_name: str
):

    for project in projects:

        if project["id"] == project_id:

            project["reports"].append(
                report_name
            )

            activities.append({

                "project_id": project_id,

                "activity": f"Report Added : {report_name}"

            })

            return {

                "message": "Report Added",

                "project": project

            }

    return {

        "message": "Project Not Found"

    }
    


# -----------------------------------
# PROJECT ACTIVITIES
# -----------------------------------

@router.get("/activities/list")
def get_project_activities():

    return activities

