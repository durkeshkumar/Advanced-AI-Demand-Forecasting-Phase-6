import Sidebar from "../components/layout/Sidebar";

import {
FaBalanceScale,
FaArrowUp,
FaArrowDown
}
from "react-icons/fa";


export default function ForecastComparison(){


const comparisons=[

{
product:"Laptop",
previous:"420 Units",
current:"530 Units",
change:"+26%",
trend:"up"
},

{
product:"Mobile",
previous:"390 Units",
current:"410 Units",
change:"+5%",
trend:"up"
},

{
product:"Tablet",
previous:"370 Units",
current:"350 Units",
change:"-5%",
trend:"down"
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

<FaBalanceScale/>

</div>


<div>

<h1 className="
text-5xl
font-bold
">

Forecast Comparison

</h1>

<p className="
text-gray-500
mt-2
">

Compare forecasting performance across periods

</p>

</div>

</div>










<div className="
bg-white
rounded-3xl
shadow-xl
p-8
overflow-x-auto
">

<table className="
w-full
">

<thead>

<tr className="
border-b
">

<th className="
text-left
p-4
text-lg
">

Product

</th>

<th className="
text-left
p-4
text-lg
">

Previous Forecast

</th>

<th className="
text-left
p-4
text-lg
">

Current Forecast

</th>

<th className="
text-left
p-4
text-lg
">

Change

</th>

<th className="
text-left
p-4
text-lg
">

Trend

</th>

</tr>

</thead>

<tbody>

{

comparisons.map(

(item,index)=>(

<tr

key={index}

className="
border-b
hover:bg-purple-50
transition
"

>

<td className="
p-4
font-bold
">

{item.product}

</td>

<td className="
p-4
">

{item.previous}

</td>

<td className="
p-4
">

{item.current}

</td>

<td className={

item.trend==="up"

?

"p-4 font-bold text-green-600"

:

"p-4 font-bold text-red-600"

}

>

{item.change}

</td>

<td className="
p-4
">

{

item.trend==="up"

?

<FaArrowUp className="text-green-600 text-2xl"/>

:

<FaArrowDown className="text-red-600 text-2xl"/>

}

</td>

</tr>

))

}

</tbody>

</table>

</div>

</div>

</div>

)

}