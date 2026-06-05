import { useEffect, useState } from "react";
import { FaFolderOpen, FaUserTie, FaShieldAlt } from "react-icons/fa";

export default function ForecastWorkspace() {

const [projects,setProjects] =
useState([]);

useEffect(() => {

loadProjects();

}, []);

async function loadProjects() {

try{

const response =
await fetch(
"http://127.0.0.1:8000/projects/list"
);

const data =
await response.json();

setProjects(data);

}
catch(error){

console.log(error);

}

}

return(

<div className="
p-8
bg-gray-50
min-h-screen
">

{/* Header */}

<div className="
bg-gradient-to-r
from-purple-700
to-pink-500
text-white
rounded-3xl
p-8
shadow-xl
mb-8
">

<h1 className="
text-4xl
font-bold
mb-2
">

Forecast Workspace

</h1>

<p className="
text-lg
opacity-90
">

Manage Forecast Projects, Datasets and Reports

</p>

</div>

{/* Stats */}

<div className="
grid
md:grid-cols-3
gap-6
mb-10
">

<div className="
bg-white
rounded-3xl
shadow-lg
p-6
">

<h3 className="
text-gray-500
">

Total Projects

</h3>

<h1 className="
text-4xl
font-bold
text-purple-700
mt-2
">

{projects.length}

</h1>

</div>

<div className="
bg-white
rounded-3xl
shadow-lg
p-6
">

<h3 className="
text-gray-500
">

Active Projects

</h3>

<h1 className="
text-4xl
font-bold
text-green-600
mt-2
">

{projects.length}

</h1>

</div>

<div className="
bg-white
rounded-3xl
shadow-lg
p-6
">

<h3 className="
text-gray-500
">

Forecast Workspaces

</h3>

<h1 className="
text-4xl
font-bold
text-blue-600
mt-2
">

{projects.length}

</h1>

</div>

</div>

{/* Project Cards */}

<div className="
grid
md:grid-cols-2
xl:grid-cols-3
gap-8
">

{

projects.map(
(project)=>(

<div

key={project.id}

className="
bg-white
rounded-3xl
shadow-xl
p-6
hover:scale-105
transition
duration-300
border
"

>

<div className="
flex
justify-between
items-center
mb-4
">

<div className="
bg-purple-100
p-4
rounded-2xl
">

<FaFolderOpen
className="
text-purple-700
text-2xl
"
/>

</div>

<span className="
bg-green-100
text-green-700
px-3
py-1
rounded-full
text-sm
font-semibold
">

{project.status}

</span>

</div>

<h2 className="
text-2xl
font-bold
mb-2
">

{project.name}

</h2>

<p className="
text-gray-600
mb-5
">

{project.description}

</p>

<div className="
space-y-3
">

<div className="
flex
items-center
gap-3
">

<FaUserTie
className="
text-purple-600
"
/>

<span>

Owner :
<b>
 {project.owner}
</b>

</span>

</div>

<div className="
flex
items-center
gap-3
">

<FaShieldAlt
className="
text-blue-600
"
/>

<span>

Permission :
<b>
 {project.permission}
</b>

</span>

</div>

</div>

<button
className="
mt-6
w-full
bg-purple-600
text-white
py-3
rounded-xl
font-semibold
hover:bg-purple-700
transition
"
>

Open Workspace

</button>

</div>

))

}

</div>

</div>

);

}