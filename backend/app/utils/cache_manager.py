from cachetools import TTLCache


forecast_cache = TTLCache(

    maxsize=100,

    ttl=300

)