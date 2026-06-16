from cachetools import TTLCache


report_cache = TTLCache(

    maxsize=50,

    ttl=300

)