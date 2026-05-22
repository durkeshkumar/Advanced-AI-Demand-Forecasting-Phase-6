import Sidebar from "../components/layout/Sidebar";

import {
FaBrain,
FaArrowTrendUp,
FaTriangleExclamation,
FaChartPie
}
from "react-icons/fa6";



export default function AIInsights(){



const insights=[

{
title:"Demand Growth",
description:"Laptop sales expected to increase by 24% next month.",
icon:<FaArrowTrendUp/>,
color:"bg-green-500"
},

{
title:"Anomaly Detection",
description:"Unexpected spike detected in Accessories category.",
icon:<FaTriangleExclamation/>,
color:"bg-red-500"
},

{
title:"Seasonal Trend",
description:"Mobile sales forecast shows festive season growth.",
icon:<FaChartPie/>,
color:"bg-purple-500"
}

];






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




<div className="
flex
items-center
gap-4
mb-10
">

<div className="
bg-purple-700
text-white
p-5
rounded-3xl
text-4xl
shadow-xl
">

<FaBrain/>

</div>


<div>

<h1 className="
text-5xl
font-bold
">

AI Insights

</h1>

<p className="
text-gray-500
mt-2
">

AI-powered business intelligence and forecasting insights

</p>

</div>

</div>








<div className="
grid
md:grid-cols-3
gap-6
">

{

insights.map(

(item,index)=>(

<div

key={index}

className="
bg-white
rounded-3xl
shadow-xl
p-6
hover:scale-105
transition
duration-300
"

>

<div className={`
${item.color}
w-16
h-16
rounded-2xl
text-white
flex
items-center
justify-center
text-3xl
mb-5
`}>

{item.icon}

</div>

<h2 className="
text-2xl
font-bold
mb-3
">

{item.title}

</h2>

<p className="
text-gray-500
leading-7
">

{item.description}

</p>

</div>

))

}

</div>









<div className="
bg-white
rounded-3xl
shadow-xl
p-8
mt-10
">

<h2 className="
text-3xl
font-bold
mb-6
">

AI Recommendation Engine

</h2>






<div className="
space-y-5
">

<div className="
bg-purple-50
rounded-2xl
p-5
border-l-8
border-purple-600
">

Increase inventory allocation for Laptop category.

</div>






<div className="
bg-green-50
rounded-2xl
p-5
border-l-8
border-green-600
">

Reduce stock risk for low-performing accessories.

</div>






<div className="
bg-red-50
rounded-2xl
p-5
border-l-8
border-red-600
">

Investigate unusual revenue fluctuations detected this week.

</div>

</div>

</div>

</div>

</div>

)

}