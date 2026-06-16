audit_logs = []


def add_audit_log(

    module,

    action,

    user

):

    log = {

        "module":
        module,

        "action":
        action,

        "user":
        user

    }

    audit_logs.append(
        log
    )

    return log


def get_audit_logs():

    return audit_logs