import { useState } from "react";

import Sidebar from "../components/layout/Sidebar";
import ForecastChart from "../components/charts/ForecastChart";
import ModelComparison from "../components/ModelComparison";
import ForecastHistory from "../components/ForecastHistory";

import {
addNotification
}
from "../services/notificationService";

import {
generateForecast
}
from "../services/forecastService";


export default function Forecast(){

const[loading,setLoading]=
useState(false);

const[model,setModel]=
useState("Linear Regression");

const[days,setDays]=
useState("");

const[result,setResult]=
useState({

accuracy:"94.2%",
trend:"Increasing",
confidence:"High"

});



async function handleForecast(){

setLoading(true);


const response=

await generateForecast({

model:model,

days:Number(days)

});


setTimeout(()=>{

if(response){

addNotification(

"Forecast generated successfully"

);

setResult({

accuracy:
response.accuracy,

trend:
response.trend,

confidence:
response.confidence

})

}

setLoading(false)

},1500)

}



return(

<div className="
flex
min-h-screen
bg-gradient-to-br
from-purple-100
via-white
to-purple-200
">

<Sidebar/>

<div className="
flex-1
p-8
overflow-auto
">

<h1 className="
text-4xl
font-bold
">

Forecast Center

</h1>

<p className="
text-gray-500
mt-2
">

Generate AI demand predictions

</p>



<div className="
grid
md:grid-cols-2
gap-6
mt-10
">

<div className="
bg-white
rounded-3xl
shadow-xl
p-8
">

<h2 className="
font-bold
text-2xl
mb-6
">

Forecast Settings

</h2>


<label className="
font-semibold
">

Select Model

</label>


<select

value={model}

onChange={(e)=>
setModel(e.target.value)
}

className="
w-full
border
rounded-xl
p-4
mt-3
mb-6
"

>

<option>

Linear Regression

</option>

<option>

Random Forest

</option>

<option>

Prophet

</option>

</select>



<label className="
font-semibold
">

Forecast Days

</label>


<input

type="number"

value={days}

onChange={(e)=>
setDays(e.target.value)
}

placeholder="Enter days"

className="
w-full
border
rounded-xl
p-4
mt-3
mb-6
"
/>


<button

onClick={handleForecast}

disabled={loading}

className="
w-full
bg-purple-700
text-white
p-4
rounded-xl
hover:bg-purple-800
transition
"

>

{

loading

?

"Generating Forecast..."

:

"Generate Forecast"

}

</button>

</div>




<div className="
bg-white
rounded-3xl
shadow-xl
p-8
">

<h2 className="
font-bold
text-2xl
mb-6
">

Forecast Summary

</h2>


<div className="
space-y-5
">

<div className="
bg-purple-50
rounded-xl
p-4
">

Model Used:
{model}

</div>


<div className="
bg-purple-50
rounded-xl
p-4
">

Accuracy:
{result.accuracy}

</div>


<div className="
bg-purple-50
rounded-xl
p-4
">

Trend:
{result.trend}

</div>


<div className="
bg-purple-50
rounded-xl
p-4
">

Confidence:
{result.confidence}

</div>

</div>

</div>

</div>




<div className="
bg-white
rounded-3xl
shadow-xl
p-8
mt-10
">

<h2 className="
font-bold
text-2xl
mb-6
">

Prediction Graph

</h2>

<ForecastChart

days={days || 7}

/>

</div>




<div className="
bg-white
rounded-3xl
shadow-xl
p-8
mt-10
">

<ModelComparison/>

</div>



<div className="
bg-white
rounded-3xl
shadow-xl
p-8
mt-10
">

<ForecastHistory/>

</div>


</div>

</div>

)

}