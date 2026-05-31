from fastapi import APIRouter

router = APIRouter(
    prefix="/ai",
    tags=["AI Features"]
)


# -----------------------------------
# PRODUCT DEMAND RECOMMENDATION
# -----------------------------------

@router.get("/recommendations")
def get_recommendations():

    forecast_data = [

        {"product": "Laptop", "forecast_demand": 1200},
        {"product": "Mobile", "forecast_demand": 850},
        {"product": "Tablet", "forecast_demand": 150}

    ]

    recommendations = []

    for item in forecast_data:

        if item["forecast_demand"] > 1000:
            recommendation = "Increase Inventory"

        elif item["forecast_demand"] > 500:
            recommendation = "Maintain Stock"

        else:
            recommendation = "Reduce Inventory"

        recommendations.append({

            "product": item["product"],
            "forecast_demand": item["forecast_demand"],
            "recommendation": recommendation

        })

    return recommendations


# -----------------------------------
# CUSTOMER BUYING BEHAVIOR ANALYSIS
# -----------------------------------

@router.get("/customer-behavior")
def customer_behavior_analysis():

    customers = [

        {"customer": "Customer A", "purchases": 25},
        {"customer": "Customer B", "purchases": 12},
        {"customer": "Customer C", "purchases": 4}

    ]

    analysis = []

    for customer in customers:

        if customer["purchases"] >= 20:
            category = "Frequent Buyer"

        elif customer["purchases"] >= 10:
            category = "Medium Buyer"

        else:
            category = "Occasional Buyer"

        analysis.append({

            "customer": customer["customer"],
            "purchases": customer["purchases"],
            "category": category

        })

    return analysis


# -----------------------------------
# DEMAND SPIKE PREDICTION
# -----------------------------------

@router.get("/demand-spike")
def demand_spike_prediction():

    products = [

        {"product": "Laptop", "forecast_demand": 1500},
        {"product": "Mobile", "forecast_demand": 700},
        {"product": "Tablet", "forecast_demand": 250}

    ]

    results = []

    for item in products:

        if item["forecast_demand"] > 1000:
            status = "Demand Spike Detected"
        else:
            status = "Normal Demand"

        results.append({

            "product": item["product"],
            "forecast_demand": item["forecast_demand"],
            "status": status

        })

    return results


# -----------------------------------
# LOW STOCK PREDICTION
# -----------------------------------

@router.get("/low-stock")
def low_stock_prediction():

    inventory = [

        {
            "product": "Laptop",
            "stock": 100,
            "forecast_demand": 1200
        },

        {
            "product": "Mobile",
            "stock": 900,
            "forecast_demand": 850
        },

        {
            "product": "Tablet",
            "stock": 300,
            "forecast_demand": 250
        }

    ]

    results = []

    for item in inventory:

        if item["stock"] < item["forecast_demand"]:
            risk = "Low Stock Risk"
        else:
            risk = "Stock Sufficient"

        results.append({

            "product": item["product"],
            "stock": item["stock"],
            "forecast_demand": item["forecast_demand"],
            "status": risk

        })

    return results


# -----------------------------------
# INVENTORY OPTIMIZATION SUGGESTIONS
# -----------------------------------

@router.get("/inventory-optimization")
def inventory_optimization():

    inventory = [

        {
            "product": "Laptop",
            "stock": 100,
            "forecast_demand": 1200
        },

        {
            "product": "Mobile",
            "stock": 900,
            "forecast_demand": 850
        },

        {
            "product": "Tablet",
            "stock": 300,
            "forecast_demand": 250
        }

    ]

    suggestions = []

    for item in inventory:

        reorder_quantity = max(
            item["forecast_demand"] - item["stock"],
            0
        )

        suggestions.append({

            "product": item["product"],

            "stock": item["stock"],

            "forecast_demand": item["forecast_demand"],

            "recommended_reorder_quantity": reorder_quantity

        })

    return suggestions