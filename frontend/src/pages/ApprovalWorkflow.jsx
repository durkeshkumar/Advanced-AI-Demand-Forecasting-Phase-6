import { useEffect, useState } from "react";

export default function ApprovalWorkflow(){

const [forecasts,setForecasts] =
useState([]);

useEffect(()=>{

loadForecasts();

},[]);

async function loadForecasts(){

try{

const response =
await fetch(
"http://127.0.0.1:8000/forecast-approval/list"
);

const data =
await response.json();

setForecasts(data);

}
catch(error){

console.log(error);

}

}

return(

<div className="
p-8
bg-gray-50
min-h-screen
">

<div className="
bg-gradient-to-r
from-green-600
to-blue-600
text-white
rounded-3xl
p-8
mb-8
shadow-xl
">

<h1 className="
text-4xl
font-bold
">

Forecast Approval Workflow

</h1>

<p className="
mt-2
text-lg
">

Review and Track Forecast Approvals

</p>

</div>

<div className="
grid
md:grid-cols-3
gap-6
">

{

forecasts.map(
(item)=>(
<div

key={item.id}

className="
bg-white
rounded-3xl
shadow-lg
p-6
hover:scale-105
transition
"

>

<h2 className="
text-2xl
font-bold
mb-2
">

{item.forecast_name}

</h2>

<p>

Submitted By :
{item.submitted_by}

</p>

<p className="
mt-2
font-bold
">

Status :
<span className="ml-2">

{item.status}

</span>

</p>

</div>
))
}

</div>

</div>

);

}