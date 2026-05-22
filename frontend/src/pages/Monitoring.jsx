import Sidebar from "../components/layout/Sidebar";

import {
FaServer,
FaDatabase,
FaUsers,
FaMicrochip
}
from "react-icons/fa";


export default function Monitoring(){


const metrics=[

{
title:"API Requests",
value:"12,540",
icon:<FaServer/>,
color:"bg-blue-500"
},

{
title:"Database Queries",
value:"8,210",
icon:<FaDatabase/>,
color:"bg-green-500"
},

{
title:"Active Users",
value:"184",
icon:<FaUsers/>,
color:"bg-purple-500"
},

{
title:"CPU Usage",
value:"63%",
icon:<FaMicrochip/>,
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




<h1 className="
text-5xl
font-bold
mb-3
">

System Monitoring

</h1>

<p className="
text-gray-500
mb-10
">

Enterprise infrastructure monitoring dashboard

</p>








<div className="
grid
md:grid-cols-4
gap-6
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

<div className={`
${item.color}
w-16
h-16
rounded-2xl
text-white
flex
items-center
justify-center
text-3xl
mb-5
`}>

{item.icon}

</div>

<h2 className="
text-gray-500
mb-2
">

{item.title}

</h2>

<h1 className="
text-4xl
font-bold
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
p-8
mt-10
">

<h2 className="
text-3xl
font-bold
mb-6
">

System Status

</h2>






<div className="
space-y-6
">

<div>

<div className="
flex
justify-between
mb-2
">

<span>

API Health

</span>

<span className="
font-bold
text-green-600
">

98%

</span>

</div>

<div className="
w-full
bg-gray-200
rounded-full
h-4
">

<div className="
bg-green-500
h-4
rounded-full
w-[98%]
">

</div>

</div>

</div>







<div>

<div className="
flex
justify-between
mb-2
">

<span>

Database Performance

</span>

<span className="
font-bold
text-blue-600
">

91%

</span>

</div>

<div className="
w-full
bg-gray-200
rounded-full
h-4
">

<div className="
bg-blue-500
h-4
rounded-full
w-[91%]
">

</div>

</div>

</div>








<div>

<div className="
flex
justify-between
mb-2
">

<span>

Forecast Accuracy

</span>

<span className="
font-bold
text-purple-600
">

94%

</span>

</div>

<div className="
w-full
bg-gray-200
rounded-full
h-4
">

<div className="
bg-purple-500
h-4
rounded-full
w-[94%]
">

</div>

</div>

</div>

</div>

</div>

</div>

</div>

)

}