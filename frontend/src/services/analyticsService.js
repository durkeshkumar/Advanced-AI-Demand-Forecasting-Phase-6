import axios from "axios";

const API_URL="http://127.0.0.1:8000";

export async function getDashboardData(){

try{

const response=await axios.get(
`${API_URL}/analytics/dashboard`
);

return response.data;

}

catch(error){

console.log(
"Dashboard API Error:",
error
);

return{

total_sales:0,
total_products:0,
highest_sales:0

};

}

}