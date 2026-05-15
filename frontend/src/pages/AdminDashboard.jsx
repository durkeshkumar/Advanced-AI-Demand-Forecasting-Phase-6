import Sidebar from "../components/layout/Sidebar";

export default function AdminDashboard(){

const stats=[

{
title:"Total Users",
value:"120"
},

{
title:"Datasets",
value:"421"
},

{
title:"Forecast Runs",
value:"950"
},

{
title:"Reports",
value:"180"
}

]

const users=[

{
name:"Durkesh",
role:"Developer"
},

{
name:"Priya",
role:"Admin"
},

{
name:"Kumar",
role:"User"
}

]

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

Admin Dashboard

</h1>

<p className="
text-gray-500
mt-2
">

System analytics and monitoring

</p>



<div className="
grid
md:grid-cols-4
gap-6
mt-10
">

{stats.map((item,index)=>(

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

<p className="
text-gray-500
">

{item.title}

</p>

<h1 className="
text-3xl
font-bold
text-purple-700
mt-4
">

{item.value}

</h1>

</div>

))}

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
font-bold
text-xl
mb-6
">

Recent Forecast Activity

</h2>

<div className="
space-y-4
">

<div className="
bg-purple-50
rounded-xl
p-4
">

Forecast generated successfully

</div>

<div className="
bg-purple-50
rounded-xl
p-4
">

Dataset uploaded

</div>

<div className="
bg-purple-50
rounded-xl
p-4
">

Report exported

</div>

</div>

</div>



<div className="
bg-white
rounded-3xl
shadow-xl
p-6
">

<h2 className="
font-bold
text-xl
mb-6
">

Users

</h2>

<div className="
space-y-4
">

{users.map((user,index)=>(

<div
key={index}

className="
flex
justify-between
bg-purple-50
rounded-xl
p-4
"

>

<div>

<h2 className="font-bold">

{user.name}

</h2>

</div>

<div>

{user.role}

</div>

</div>

))}

</div>

</div>


</div>

</div>

</div>

)

}