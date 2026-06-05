import { useState } from "react";

export default function ScenarioAnalysis(){

const [scenarios] = useState([

{
name:"Base Scenario",
forecast:10000
},

{
name:"Growth Scenario",
forecast:13860
},

{
name:"Decline Scenario",
forecast:9000
}

]);

return(

<div className="
p-8
bg-gray-50
min-h-screen
">

<div className="
bg-gradient-to-r
from-blue-600
to-purple-600
text-white
rounded-3xl
p-8
shadow-xl
mb-8
">

<h1 className="
text-4xl
font-bold
">

Scenario Analysis

</h1>

<p className="
mt-2
text-lg
">

Compare forecasting scenarios and evaluate outcomes

</p>

</div>

<div className="
grid
md:grid-cols-3
gap-6
">

{

scenarios.map(
(item,index)=>(

<div

key={index}

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
text-xl
font-bold
mb-3
">

{item.name}

</h2>

<p className="
text-gray-500
">

Forecast Value

</p>

<h1 className="
text-4xl
font-bold
text-purple-700
mt-2
">

{item.forecast}

</h1>

</div>

))

}

</div>

</div>

)

}