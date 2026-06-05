from fastapi import APIRouter

from app.schemas.scenario_schema import ScenarioCreate


router = APIRouter(
    prefix="/scenario",
    tags=["Scenario Planning"]
)

scenarios = []


@router.post("/create")
def create_scenario(
    scenario: ScenarioCreate
):

    forecast_value = (

        scenario.base_sales

        *

        (1 + scenario.sales_growth_percent / 100)

        *

        scenario.seasonality_factor

        *

        scenario.demand_factor

    )

    scenario_data = {

        "id": len(scenarios) + 1,

        "scenario_name": scenario.scenario_name,

        "base_sales": scenario.base_sales,

        "sales_growth_percent":
        scenario.sales_growth_percent,

        "seasonality_factor":
        scenario.seasonality_factor,

        "demand_factor":
        scenario.demand_factor,

        "forecast_value":
        round(forecast_value, 2)

    }

    scenarios.append(
        scenario_data
    )

    return {

        "message":
        "Scenario Created",

        "scenario":
        scenario_data

    }


@router.get("/list")
def list_scenarios():

    return scenarios


@router.get("/{scenario_id}")
def get_scenario(
    scenario_id: int
):

    for scenario in scenarios:

        if scenario["id"] == scenario_id:

            return scenario

    return {

        "message":
        "Scenario Not Found"

    }
    
    # -----------------------------------
# COMPARE SCENARIOS
# -----------------------------------

@router.get("/compare/all")
def compare_scenarios():

    comparison = []

    for scenario in scenarios:

        comparison.append({

            "scenario_name":
            scenario["scenario_name"],

            "forecast_value":
            scenario["forecast_value"]

        })

    return {

        "total_scenarios":
        len(comparison),

        "comparison":
        comparison

    }
    
    # -----------------------------------
# SAVE SCENARIO
# -----------------------------------

@router.post("/save/{scenario_id}")
def save_scenario(
    scenario_id: int
):

    for scenario in scenarios:

        if scenario["id"] == scenario_id:

            scenario["saved"] = True

            return {

                "message":
                "Scenario Saved",

                "scenario":
                scenario

            }

    return {

        "message":
        "Scenario Not Found"

    }


# -----------------------------------
# LIST SAVED SCENARIOS
# -----------------------------------

@router.get("/saved/list")
def list_saved_scenarios():

    saved = []

    for scenario in scenarios:

        if scenario.get("saved"):

            saved.append(
                scenario
            )

    return saved