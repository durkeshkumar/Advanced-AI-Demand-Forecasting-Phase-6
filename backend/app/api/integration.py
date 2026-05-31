from fastapi import APIRouter

from datetime import datetime


router = APIRouter(
    prefix="/integration",
    tags=["Integration"]
)


# -----------------------------------
# INVENTORY DATA
# -----------------------------------

inventory_data = [

    {
        "product": "Laptop",
        "stock": 120,
        "warehouse": "Chennai"
    },

    {
        "product": "Mobile",
        "stock": 85,
        "warehouse": "Bangalore"
    },

    {
        "product": "Tablet",
        "stock": 45,
        "warehouse": "Hyderabad"
    }

]


# -----------------------------------
# ERP SETTINGS
# -----------------------------------

erp_settings = {

    "erp_name": "SAP ERP",

    "status": "Connected",

    "environment": "Demo"

}


# -----------------------------------
# EXTERNAL API
# -----------------------------------

external_api = {

    "provider": "Supplier API",

    "status": "Connected",

    "response_time": "120 ms"

}


# -----------------------------------
# INTEGRATION MANAGEMENT SETTINGS
# -----------------------------------

integration_settings = {

    "inventory_integration": True,

    "erp_integration": True,

    "external_api_integration": True,

    "webhook_support": True

}


# -----------------------------------
# WEBHOOK LOGS
# -----------------------------------

webhook_logs = []


# -----------------------------------
# INVENTORY API
# -----------------------------------

@router.get("/inventory")

def get_inventory_data():

    return {

        "integration": "Third Party Inventory System",

        "data": inventory_data

    }


# -----------------------------------
# ERP API
# -----------------------------------

@router.get("/erp-status")

def get_erp_status():

    return {

        "integration": "ERP System",

        "settings": erp_settings

    }


# -----------------------------------
# EXTERNAL API STATUS
# -----------------------------------

@router.get("/external-api-status")

def external_api_status():

    return {

        "integration": "External API",

        "details": external_api

    }


# -----------------------------------
# WEBHOOK RECEIVER
# -----------------------------------

@router.post("/webhook")

def receive_webhook():

    event = {

        "event": "Inventory Updated",

        "received_at": str(datetime.now())

    }

    webhook_logs.append(event)

    return {

        "message": "Webhook received",

        "event": event

    }


# -----------------------------------
# WEBHOOK LOGS
# -----------------------------------

@router.get("/webhook-logs")

def get_webhook_logs():

    return webhook_logs


# -----------------------------------
# INTEGRATION SETTINGS
# -----------------------------------

@router.get("/settings")

def get_integration_settings():

    return {

        "integration_management": integration_settings

    }