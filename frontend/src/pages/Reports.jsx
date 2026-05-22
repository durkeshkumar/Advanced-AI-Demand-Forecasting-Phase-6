import { useState } from "react";

import Sidebar from "../components/layout/Sidebar";

import GlobalSearch from "../components/GlobalSearch";

import {
FaFileAlt,
FaDownload,
FaFilePdf,
FaFileExcel
}
from "react-icons/fa";

import {
downloadReport,
downloadExcel
}
from "../services/reportService";


export default function Reports(){


const [search,setSearch] =
useState("");



const reports=[

{
name:"Forecast Summary Report",
date:"15 May 2026",
type:"PDF"
},

{
name:"Sales Analytics Report",
date:"15 May 2026",
type:"Excel"
},

{
name:"Monthly Forecast Report",
date:"15 May 2026",
type:"PDF"
}

];





const filteredReports =

reports.filter((item)=>

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
">

<h1 className="
text-4xl
font-bold
">

Reports Center

</h1>


<p className="
text-gray-500
mt-2
">

Analytics reports and downloads

</p>







<div className="
grid
md:grid-cols-3
gap-6
mt-10
">




<div

onClick={downloadReport}

className="
bg-white
rounded-3xl
shadow-xl
p-6
cursor-pointer
hover:scale-105
transition
"

>

<FaFilePdf
className="
text-red-500
text-5xl
mb-4
"
/>

<h2 className="
font-bold
">

PDF Reports

</h2>

<p className="
text-gray-500
mt-2
">

Forecast PDF exports

</p>

</div>








<div

onClick={downloadExcel}

className="
bg-white
rounded-3xl
shadow-xl
p-6
cursor-pointer
hover:scale-105
transition
"

>

<FaFileExcel
className="
text-green-600
text-5xl
mb-4
"
/>

<h2 className="
font-bold
">

Excel Reports

</h2>

<p className="
text-gray-500
mt-2
">

Spreadsheet analytics

</p>

</div>








<div

onClick={downloadReport}

className="
bg-white
rounded-3xl
shadow-xl
p-6
cursor-pointer
hover:scale-105
transition
"

>

<FaDownload
className="
text-purple-700
text-5xl
mb-4
"
/>

<h2 className="
font-bold
">

Downloads

</h2>

<p className="
text-gray-500
mt-2
">

Export summaries

</p>

</div>

</div>








<div className="mb-8 mt-10">

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
">

<h2 className="
font-bold
text-2xl
mb-6
">

Recent Reports

</h2>






<div className="
space-y-5
">

{

filteredReports.map((item,index)=>(

<div

key={index}

className="
flex
justify-between
items-center
bg-purple-50
rounded-xl
p-5
"

>

<div>

<h3 className="
font-bold
">

{item.name}

</h3>

<p className="
text-gray-500
">

{item.date}

</p>

</div>






<button

onClick={downloadReport}

className="
bg-purple-700
text-white
px-5
py-2
rounded-xl
hover:bg-purple-800
transition
"

>

Download

</button>

</div>

))

}

</div>

</div>

</div>

</div>

)

}