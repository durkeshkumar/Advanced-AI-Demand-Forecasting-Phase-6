def filter_by_organization(

    records,

    organization_name

):

    return [

        record

        for record in records

        if record.get(
            "organization"
        ) == organization_name

    ]