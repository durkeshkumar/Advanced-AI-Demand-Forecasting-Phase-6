import { useEffect, useState } from "react";

export default function StrategicPlanning(){

const [annualData,setAnnualData] =
useState({});

const [comparison,setComparison] =
useState({});

const [recommendations,setRecommendations] =
useState([]);

useEffect(()=>{

loadData();

},[]);

async function loadData(){

try{

const annualResponse =
await fetch(
"http://127.0.0.1:8000/strategic-planning/annual-dashboard"
);

const annual =
await annualResponse.json();

setAnnualData(
annual
);

const compareResponse =
await fetch(
"http://127.0.0.1:8000/strategic-planning/forecast-vs-target"
);

const compare =
await compareResponse.json();

setComparison(
compare
);

const recommendationResponse =
await fetch(
"http://127.0.0.1:8000/strategic-planning/recommendations"
);

const recommendationData =
await recommendationResponse.json();

setRecommendations(
recommendationData.recommendations
);

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
from-indigo-700
to-purple-700
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

Strategic Planning Dashboard

</h1>

<p className="
mt-2
text-lg
">

Business Target Tracking and Planning

</p>

</div>

<div className="
grid
md:grid-cols-3
gap-6
mb-8
">

<div className="
bg-white
rounded-3xl
shadow-lg
p-6
">

<h2 className="
font-bold
text-xl
mb-3
">

Annual Target

</h2>

<p>
{annualData.annual_target}
</p>

</div>

<div className="
bg-white
rounded-3xl
shadow-lg
p-6
">

<h2 className="
font-bold
text-xl
mb-3
">

Forecast Demand

</h2>

<p>
{annualData.forecasted_demand}
</p>

</div>

<div className="
bg-white
rounded-3xl
shadow-lg
p-6
">

<h2 className="
font-bold
text-xl
mb-3
">

Achievement %

</h2>

<p>
{annualData.achievement_percentage}%
</p>

</div>

</div>

<div className="
bg-white
rounded-3xl
shadow-lg
p-6
mb-8
">

<h2 className="
text-2xl
font-bold
mb-4
">

Forecast vs Target

</h2>

<p>

Target :
{comparison.target}

</p>

<p>

Forecast :
{comparison.forecast}

</p>

<p>

Gap :
{comparison.gap}

</p>

</div>

<div className="
bg-white
rounded-3xl
shadow-lg
p-6
">

<h2 className="
text-2xl
font-bold
mb-4
">

Planning Recommendations

</h2>

{

recommendations.map(
(item,index)=>(

<div

key={index}

className="
bg-purple-50
p-4
rounded-xl
mb-3
"

>

{item}

</div>

))

}

</div>

</div>

);

}