import axios from "axios";

const API_URL="http://127.0.0.1:8000";

export async function generateForecast(data){

try{

const response=await axios.post(

`${API_URL}/forecast/predict`,
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