import Sidebar from "../components/layout/Sidebar";

import {
FaBell,
FaCheckCircle,
FaExclamationTriangle,
FaFileAlt
} from "react-icons/fa";

export default function Notifications(){

const notifications=[

{
icon:<FaCheckCircle/>,
title:"Forecast Completed",
message:"Linear Regression prediction generated successfully",
time:"2 mins ago"
},

{
icon:<FaExclamationTriangle/>,
title:"Dataset Upload Failed",
message:"Missing values detected in uploaded dataset",
time:"10 mins ago"
},

{
icon:<FaFileAlt/>,
title:"Report Generated",
message:"Forecast report exported successfully",
time:"30 mins ago"
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

Notifications

</h1>

<p className="
text-gray-500
mt-2
">

Recent system updates

</p>


<div className="
space-y-6
mt-10
">

{notifications.map((item,index)=>(

<div
key={index}

className="
bg-white
rounded-3xl
shadow-xl
p-6
flex
gap-6
items-start
hover:-translate-y-1
transition
"

>

<div className="
text-purple-700
text-3xl
">

{item.icon}

</div>


<div>

<h2 className="
font-bold
text-lg
">

{item.title}

</h2>

<p className="
text-gray-500
mt-2
">

{item.message}

</p>

<p className="
text-sm
text-gray-400
mt-3
">

{item.time}

</p>

</div>

</div>

))}

</div>

</div>

</div>

)

}