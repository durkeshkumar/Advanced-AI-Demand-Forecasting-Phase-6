import { useState } from "react";

import {
FaHome,
FaUpload,
FaChartLine,
FaBell,
FaFileAlt,
FaUserShield,
FaBars,
FaSignOutAlt
}
from "react-icons/fa";

import {
Link,
useLocation,
useNavigate
}
from "react-router-dom";

export default function Sidebar(){

const location=useLocation();

const navigate=useNavigate();

const [open,setOpen]=useState(true);

const menus=[

{
name:"Dashboard",
path:"/dashboard",
icon:<FaHome/>
},

{
name:"Upload",
path:"/upload",
icon:<FaUpload/>
},

{
name:"Forecast",
path:"/forecast",
icon:<FaChartLine/>
},

{
name:"Notifications",
path:"/notifications",
icon:<FaBell/>
},

{
name:"Reports",
path:"/reports",
icon:<FaFileAlt/>
},

{
name:"Admin",
path:"/admin",
icon:<FaUserShield/>
}

]


function logout(){

localStorage.removeItem("token");

navigate("/");

}


return(

<div className={`

${
open
?
"w-64"
:
"w-20"
}

h-screen
bg-purple-900
text-white
p-6
transition-all
duration-500
relative

`}>

<div

onClick={()=>setOpen(!open)}

className="
absolute
right-4
top-5
bg-purple-700
p-3
rounded-xl
cursor-pointer
"

>

<FaBars/>

</div>



<h1 className="
text-3xl
font-bold
mb-10
mt-10
">

{open?"Forecastly AI":"AI"}

</h1>



<div className="
space-y-4
">

{menus.map((item,index)=>(

<Link

to={item.path}

key={index}

className={`

flex
items-center
gap-4
p-4
rounded-xl
transition

${
location.pathname===item.path

?

"bg-white text-purple-900"

:

"hover:bg-purple-700"

}

`}

>

{item.icon}

{

open &&

<span>

{item.name}

</span>

}

</Link>

))}

</div>



<button

onClick={logout}

className="
absolute
bottom-24
left-6
bg-red-500
hover:bg-red-600
rounded-xl
p-4
w-44
flex
items-center
gap-3
"

>

<FaSignOutAlt/>

{open && "Logout"}

</button>



<div className="
absolute
bottom-1
left-6
bg-purple-700
rounded-2xl
p-4
w-42
">

<p className="
font-bold
">

Durkesh

</p>

{open&&(

<p className="
text-sm
">

AI Developer

</p>

)}

</div>

</div>

)

}