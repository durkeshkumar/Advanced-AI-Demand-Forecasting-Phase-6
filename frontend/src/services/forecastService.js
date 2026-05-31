import API from "./api";


export async function generateForecast(data){

  try{

    const response =
    await API.post(

      "/forecast/predict",

      data

    );

    return response.data;

  }

  catch(error){

    console.log(

      "Forecast Error",

      error

    );

    return null;

  }

}