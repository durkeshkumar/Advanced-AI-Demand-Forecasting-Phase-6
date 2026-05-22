import { useState } from "react";

import Sidebar from "../components/layout/Sidebar";

import GlobalSearch from "../components/GlobalSearch";

import {
FaDatabase,
FaFileCsv,
FaTrash,
FaEye
}
from "react-icons/fa";


export default function DatasetManagement(){

const [search,setSearch] =
useState("");

const datasets=[

{
name:"sales_january.csv",
size:"2.4 MB",
status:"Processed"
},

{
name:"sales_february.csv",
size:"3.1 MB",
status:"Processing"
},

{
name:"inventory_dataset.csv",
size:"1.8 MB",
status:"Processed"
}

];


const filteredDatasets =

datasets.filter((item)=>

item.name
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

<FaDatabase/>

</div>


<div>

<h1 className="
text-5xl
font-bold
">

Dataset Management

</h1>

<p className="
text-gray-500
mt-2
">

Manage uploaded datasets and processing workflows

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

Dataset

</th>

<th className="
text-left
p-4
text-lg
">

Size

</th>

<th className="
text-left
p-4
text-lg
">

Status

</th>

<th className="
text-left
p-4
text-lg
">

Actions

</th>

</tr>

</thead>

<tbody>

{

filteredDatasets.map(

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
flex
items-center
gap-3
">

<FaFileCsv className="text-purple-700"/>

{item.name}

</td>

<td className="
p-4
">

{item.size}

</td>

<td className="
p-4
">

<span className={

item.status==="Processed"

?

"bg-green-500 text-white px-4 py-2 rounded-full text-sm"

:

"bg-yellow-500 text-white px-4 py-2 rounded-full text-sm"

}>

{item.status}

</span>

</td>

<td className="
p-4
flex
gap-4
">

<button className="
bg-blue-500
text-white
p-3
rounded-xl
hover:bg-blue-600
transition
">

<FaEye/>

</button>

<button className="
bg-red-500
text-white
p-3
rounded-xl
hover:bg-red-600
transition
">

<FaTrash/>

</button>

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