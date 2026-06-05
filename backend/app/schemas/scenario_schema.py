from pydantic import BaseModel


class ScenarioCreate(BaseModel):

    scenario_name: str

    base_sales: float

    sales_growth_percent: float

    seasonality_factor: float

    demand_factor: float