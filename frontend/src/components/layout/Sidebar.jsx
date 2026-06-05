import { Link } from "react-router-dom";

import {

FaHome,
FaUpload,
FaChartLine,
FaBell,
FaFileAlt,
FaUserShield,
FaServer,
FaHistory,
FaChartPie,
FaBrain,
FaSignOutAlt,
FaClipboardList,
FaUsers,
FaBalanceScale,
FaDatabase,
FaComments
}
from "react-icons/fa";

import {
useTheme
}
from "../../context/ThemeContext";



export default function Sidebar(){


const {

theme,
toggleTheme

}

=

useTheme();




const role =

localStorage.getItem(
"userRole"
)

||

"Viewer";






function handleLogout(){

localStorage.clear();

window.location.href="/";

}








const menuItems=[

{
title:"Dashboard",
path:"/dashboard",
icon:<FaHome/>,
roles:[
"Viewer",
"Analyst",
"Super Admin"
]
},
{
title:"Workspace",
path:"/workspace",
icon:<FaDatabase/>,
roles:[
"Viewer",
"Analyst",
"Super Admin"
]
},

{
title:"Executive Dashboard",
path:"/executive-dashboard",
icon:<FaChartPie/>,
roles:[
"Viewer",
"Analyst",
"Super Admin"
]
},

{
title:"Scenario Analysis",
path:"/scenario-analysis",
icon:<FaChartLine/>,
roles:[
"Viewer",
"Analyst",
"Super Admin"
]
},

{
title:"Collaboration",
path:"/collaboration",
icon:<FaComments/>,
roles:[
"Viewer",
"Analyst",
"Super Admin"
]
},

{
title:"Upload",
path:"/upload",
icon:<FaUpload/>,
roles:[
"Super Admin"
]
},

{
title:"Forecast",
path:"/forecast",
icon:<FaChartLine/>,
roles:[
"Analyst",
"Super Admin"
]
},

{
title:"Analytics",
path:"/analytics",
icon:<FaChartPie/>,
roles:[
"Analyst",
"Super Admin"
]
},

{
title:"AI Insights",
path:"/insights",
icon:<FaBrain/>,
roles:[
"Analyst",
"Super Admin"
]
},

{
title:"History",
path:"/history",
icon:<FaHistory/>,
roles:[
"Analyst",
"Super Admin"
]
},

{
title:"Comparison",
path:"/comparison",
icon:<FaBalanceScale/>,
roles:[
"Analyst",
"Super Admin"
]
},

{
title:"Reports",
path:"/reports",
icon:<FaFileAlt/>,
roles:[
"Analyst",
"Super Admin"
]
},

{
title:"Notifications",
path:"/notifications",
icon:<FaBell/>,
roles:[
"Super Admin"
]
},

{
title:"Datasets",
path:"/datasets",
icon:<FaDatabase/>,
roles:[
"Super Admin"
]
},

{
title:"Monitoring",
path:"/monitoring",
icon:<FaServer/>,
roles:[
"Super Admin"
]
},

{
title:"Activity Logs",
path:"/logs",
icon:<FaClipboardList/>,
roles:[
"Super Admin"
]
},

{
title:"Users",
path:"/users",
icon:<FaUsers/>,
roles:[
"Super Admin"
]
},

{
title:"Admin",
path:"/admin",
icon:<FaUserShield/>,
roles:[
"Super Admin"
]
}

];










return(

<div className={

theme==="dark"

?

`
w-72
min-h-screen
bg-gray-950
text-white
p-6
flex
flex-col
justify-between
shadow-2xl
`

:

`
w-72
min-h-screen
bg-purple-900
text-white
p-6
flex
flex-col
justify-between
shadow-2xl
`

}

>






<div>

<h1 className="
text-3xl
font-bold
mb-10
tracking-wide
">

AI Forecast

</h1>









<div className={

theme==="dark"

?

`
bg-gray-800
rounded-2xl
p-4
mb-8
shadow-lg
`

:

`
bg-purple-800
rounded-2xl
p-4
mb-8
shadow-lg
`

}

>

<p className="
text-gray-300
text-sm
">

Logged in as

</p>

<h2 className="
font-bold
text-lg
mt-1
">

{role}

</h2>

</div>












<div className="
space-y-3
">

{

menuItems

.filter(

(item)=>

item.roles.includes(
role
)

)

.map(

(item,index)=>(

<Link

key={index}

to={item.path}

className={

theme==="dark"

?

`
flex
items-center
gap-4
p-4
rounded-2xl
hover:bg-gray-800
transition
duration-300
hover:translate-x-1
`

:

`
flex
items-center
gap-4
p-4
rounded-2xl
hover:bg-purple-700
transition
duration-300
hover:translate-x-1
`

}

>

<div className="
text-xl
">

{item.icon}

</div>


<span className="
font-medium
">

{item.title}

</span>

</Link>

))

}

</div>

</div>













<div>

<button

onClick={toggleTheme}

className={

theme==="light"

?

`
w-full
bg-white
text-purple-900
hover:bg-gray-200
transition
duration-300
p-4
rounded-2xl
font-bold
mb-4
shadow-lg
`

:

`
w-full
bg-gray-800
text-white
hover:bg-gray-700
transition
duration-300
p-4
rounded-2xl
font-bold
mb-4
shadow-lg
`

}

>

{

theme==="light"

?

"Dark Mode"

:

"Light Mode"

}

</button>








<button

onClick={handleLogout}

className="
w-full
bg-red-500
hover:bg-red-600
transition
duration-300
p-4
rounded-2xl
font-bold
flex
items-center
justify-center
gap-3
shadow-lg
"

>

<FaSignOutAlt/>

Logout

</button>

</div>

</div>

)

}