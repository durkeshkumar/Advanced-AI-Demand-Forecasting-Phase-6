import { useState } from "react";

import Sidebar from "../components/layout/Sidebar";

import GlobalSearch from "../components/GlobalSearch";

import {
FaHistory,
FaChartLine
}
from "react-icons/fa";


export default function ForecastHistory(){

const [search,setSearch] =
useState("");

const history=[

{
product:"Laptop",
prediction:"530 Units",
accuracy:"94%",
date:"21 May 2026",
status:"Completed"
},

{
product:"Mobile",
prediction:"410 Units",
accuracy:"91%",
date:"20 May 2026",
status:"Completed"
},

{
product:"Tablet",
prediction:"350 Units",
accuracy:"89%",
date:"19 May 2026",
status:"Completed"
},

{
product:"Accessories",
prediction:"180 Units",
accuracy:"87%",
date:"18 May 2026",
status:"Processing"
}

];

const filteredHistory =

history.filter((item)=>

item.product
.toLowerCase()

.includes(

search.toLowerCase()

)

);



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
">

<div className="
bg-purple-700
text-white
p-4
rounded-2xl
text-3xl
">

<FaHistory/>

</div>


<div>

<h1 className="
text-5xl
font-bold
">

Forecast History

</h1>

<p className="
text-gray-500
mt-2
">

Historical forecasting activity and tracking

</p>

</div>

</div>


<div className="mb-8">

<GlobalSearch

search={search}

setSearch={setSearch}

/>

</div>


<div className="
bg-white
rounded-3xl
shadow-xl
p-6
mt-10
">

<h2 className="
text-2xl
font-bold
mb-6
">

Recent Forecast Records

</h2>




<div className="
space-y-5
">

{

filteredHistory.map(

(item,index)=>(

<div

key={index}

className="
flex
justify-between
items-center
bg-purple-50
rounded-2xl
p-5
hover:scale-[1.01]
transition
"

>





<div className="
flex
items-center
gap-5
">

<div className="
bg-purple-700
text-white
p-4
rounded-2xl
text-xl
">

<FaChartLine/>

</div>


<div>

<h2 className="
font-bold
text-lg
">

{item.product}

</h2>

<p className="
text-gray-500
">

Prediction:
{item.prediction}

</p>

</div>

</div>






<div className="
flex
items-center
gap-8
">

<div>

<p className="
text-gray-500
text-sm
">

Accuracy

</p>

<h2 className="
font-bold
text-green-600
">

{item.accuracy}

</h2>

</div>




<div>

<p className="
text-gray-500
text-sm
">

Date

</p>

<h2 className="
font-bold
">

{item.date}

</h2>

</div>




<div>

<span className={

item.status==="Completed"

?

"bg-green-500 text-white px-4 py-2 rounded-full text-sm"

:

"bg-yellow-500 text-white px-4 py-2 rounded-full text-sm"

}

>

{item.status}

</span>

</div>

</div>

</div>

))

}

</div>

</div>

</div>

</div>

)

}