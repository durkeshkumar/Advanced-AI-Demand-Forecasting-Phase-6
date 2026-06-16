import { useEffect, useState } from "react";

export default function OrganizationManagement(){

const [organizations,setOrganizations] =
useState([]);

useEffect(()=>{

loadOrganizations();

},[]);

async function loadOrganizations(){

try{

const response =
await fetch(
"http://127.0.0.1:8000/organizations/list"
);

const data =
await response.json();

console.log("Organizations:",data);

setOrganizations(data);

}
catch(error){

console.log(
"Organization Error:",
error
);

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
from-purple-700
to-blue-600
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

Organization Management

</h1>

<p className="
mt-2
text-lg
">

Manage Enterprise Organizations

</p>

</div>

<div className="
grid
md:grid-cols-3
gap-6
">

{

organizations.map(
(org)=>(
<div

key={org.id}

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
text-2xl
font-bold
mb-2
">

{org.name}

</h2>

<p>

Industry :
{org.industry}

</p>

<p>

Admin :
{org.admin}

</p>

<p>

Status :
{org.status}

</p>

</div>
))
}

</div>

</div>

);

}