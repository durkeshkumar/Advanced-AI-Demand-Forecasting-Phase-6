import API from "./api";


export async function getDashboardData(){

  try{

    const response =
    await API.get(
      "/analytics/dashboard"
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
      highest_sales:0,
      monthly_sales:[],
      top_products:[]

    };

  }

}