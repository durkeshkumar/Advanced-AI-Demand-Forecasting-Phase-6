import Sidebar from "../components/layout/Sidebar";

import {
FaUsers,
FaUserShield,
FaUserTie,
FaEye
}
from "react-icons/fa";

import { useState } from "react";

import GlobalSearch from "../components/GlobalSearch";


export default function UserManagement(){

const [search,setSearch] =
useState("");


const users=[

{
name:"Durkesh",
email:"durkeshphase3@gmail.com",
role:"Super Admin",
icon:<FaUserShield/>,
color:"bg-red-500"
},

{
name:"John",
email:"john@gmail.com",
role:"Analyst",
icon:<FaUserTie/>,
color:"bg-purple-500"
},

{
name:"David",
email:"david@gmail.com",
role:"Viewer",
icon:<FaEye/>,
color:"bg-green-500"
}

];

const filteredUsers =

users.filter((item)=>

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

<FaUsers/>

</div>


<div>

<h1 className="
text-5xl
font-bold
">

User Management

</h1>

<p className="
text-gray-500
mt-2
">

Manage system users and access permissions

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
">

<h2 className="
text-3xl
font-bold
mb-8
">

Registered Users

</h2>








<div className="
space-y-6
">

{

filteredUsers.map(

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

<div className={`
${item.color}
w-16
h-16
rounded-2xl
text-white
flex
items-center
justify-center
text-2xl
`}>

{item.icon}

</div>






<div>

<h2 className="
text-xl
font-bold
">

{item.name}

</h2>

<p className="
text-gray-500
">

{item.email}

</p>

</div>

</div>








<div>

<span className="
bg-purple-700
text-white
px-5
py-2
rounded-full
text-sm
font-bold
">

{item.role}

</span>

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