from sklearn.metrics import (
    r2_score,
    mean_absolute_error,
    mean_squared_error
)


def compare_models(actual, predictions_dict):

    results = []

    for model_name, prediction in predictions_dict.items():

        accuracy = r2_score(actual, prediction)

        mae = mean_absolute_error(actual, prediction)

        mse = mean_squared_error(actual, prediction)

        results.append({
            "model_name": model_name,
            "accuracy": round(accuracy * 100, 2),
            "mae": round(mae, 2),
            "mse": round(mse, 2)
        })

    return results