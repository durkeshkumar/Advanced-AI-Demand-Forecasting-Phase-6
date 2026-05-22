import Sidebar from "../components/layout/Sidebar";

import {
FaChartPie,
FaGlobeAsia,
FaBoxes,
FaDollarSign
}
from "react-icons/fa";

import {
BarChart,
Bar,
XAxis,
YAxis,
Tooltip,
ResponsiveContainer,
PieChart,
Pie,
Cell
}
from "recharts";


export default function AdvancedAnalytics(){


const regionData=[

{
region:"South",
sales:420
},

{
region:"North",
sales:310
},

{
region:"East",
sales:280
},

{
region:"West",
sales:390
}

];



const categoryData=[

{
name:"Laptop",
value:45
},

{
name:"Mobile",
value:30
},

{
name:"Tablet",
value:15
},

{
name:"Accessories",
value:10
}

];



const COLORS=[

"#7c3aed",
"#9333ea",
"#a855f7",
"#c084fc"

];




const cards=[

{
title:"Revenue Prediction",
value:"₹4.8M",
icon:<FaDollarSign/>
},

{
title:"Regional Growth",
value:"+18%",
icon:<FaGlobeAsia/>
},

{
title:"Inventory Risk",
value:"Low",
icon:<FaBoxes/>
},

{
title:"Category Insights",
value:"Stable",
icon:<FaChartPie/>
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




<h1 className="
text-5xl
font-bold
">

Advanced Analytics

</h1>


<p className="
text-gray-500
mt-2
">

Enterprise forecasting and business intelligence analytics

</p>






<div className="
grid
md:grid-cols-4
gap-6
mt-10
">

{

cards.map(

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
"

>

<div className="
text-4xl
text-purple-700
mb-4
">

{item.icon}

</div>

<h2 className="
text-gray-500
">

{item.title}

</h2>

<h1 className="
text-3xl
font-bold
text-purple-700
mt-3
">

{item.value}

</h1>

</div>

))

}

</div>







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
p-6
">

<h2 className="
text-2xl
font-bold
mb-6
">

Region-wise Forecast

</h2>



<div className="
h-80
">

<ResponsiveContainer
width="100%"
height="100%"
>

<BarChart
data={regionData}
>

<XAxis dataKey="region"/>

<YAxis/>

<Tooltip/>

<Bar
dataKey="sales"
fill="#7c3aed"
/>

</BarChart>

</ResponsiveContainer>

</div>

</div>







<div className="
bg-white
rounded-3xl
shadow-xl
p-6
">

<h2 className="
text-2xl
font-bold
mb-6
">

Category-wise Insights

</h2>



<div className="
h-80
">

<ResponsiveContainer
width="100%"
height="100%"
>

<PieChart>

<Pie

data={categoryData}

dataKey="value"

nameKey="name"

outerRadius={110}

label

>

{

categoryData.map(

(entry,index)=>(

<Cell

key={index}

fill={COLORS[index]}

/>

))

}

</Pie>

<Tooltip/>

</PieChart>

</ResponsiveContainer>

</div>

</div>

</div>

</div>

</div>

)

}