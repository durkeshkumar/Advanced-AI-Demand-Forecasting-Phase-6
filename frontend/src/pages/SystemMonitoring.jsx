import Sidebar from "../components/layout/Sidebar";

import {
FaServer,
FaDatabase,
FaUserShield,
FaCheckCircle
}
from "react-icons/fa";


export default function SystemMonitoring(){

const logs=[

{
user:"Durkesh",
action:"Uploaded Dataset",
status:"Success",
time:"2 mins ago"
},

{
user:"Analyst User",
action:"Generated Forecast",
status:"Success",
time:"5 mins ago"
},

{
user:"Viewer User",
action:"Viewed Dashboard",
status:"Active",
time:"10 mins ago"
},

{
user:"Admin",
action:"Downloaded Report",
status:"Success",
time:"20 mins ago"
}

];


const metrics=[

{
title:"API Requests",
value:"1,240",
icon:<FaServer/>
},

{
title:"Database Health",
value:"99%",
icon:<FaDatabase/>
},

{
title:"Active Users",
value:"18",
icon:<FaUserShield/>
},

{
title:"System Status",
value:"Stable",
icon:<FaCheckCircle/>
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

System Monitoring

</h1>


<p className="
text-gray-500
mt-2
">

Enterprise activity monitoring dashboard

</p>




<div className="
grid
md:grid-cols-4
gap-6
mt-10
">

{

metrics.map(

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

Recent Activity Logs

</h2>



<div className="
space-y-5
">

{

logs.map(

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
"

>

<div>

<h2 className="
font-bold
">

{item.user}

</h2>

<p className="
text-gray-500
">

{item.action}

</p>

</div>



<div className="
flex
items-center
gap-6
">

<span className="
bg-green-500
text-white
px-4
py-1
rounded-full
text-sm
">

{item.status}

</span>

<p className="
text-gray-500
text-sm
">

{item.time}

</p>

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