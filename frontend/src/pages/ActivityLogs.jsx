import Sidebar from "../components/layout/Sidebar";

import {
FaUserClock,
FaUserShield,
FaUpload,
FaChartLine
}
from "react-icons/fa";


export default function ActivityLogs(){



const logs=[

{
user:"Durkesh",
action:"Uploaded Dataset",
time:"10:45 AM",
icon:<FaUpload/>,
color:"bg-blue-500"
},

{
user:"Admin",
action:"Generated Forecast",
time:"11:10 AM",
icon:<FaChartLine/>,
color:"bg-green-500"
},

{
user:"Analyst",
action:"Accessed Analytics",
time:"11:30 AM",
icon:<FaUserShield/>,
color:"bg-purple-500"
},

{
user:"Viewer",
action:"Viewed Dashboard",
time:"12:05 PM",
icon:<FaUserClock/>,
color:"bg-red-500"
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

<FaUserClock/>

</div>


<div>

<h1 className="
text-5xl
font-bold
">

Activity Logs

</h1>

<p className="
text-gray-500
mt-2
">

Track user activities and system events

</p>

</div>

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

Recent User Activities

</h2>







<div className="
space-y-6
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

{item.user}

</h2>

<p className="
text-gray-500
">

{item.action}

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

{item.time}

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