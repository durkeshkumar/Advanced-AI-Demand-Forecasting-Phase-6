import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Sidebar from "../components/layout/Sidebar";
import WelcomeBanner from "../components/WelcomeBanner";

import RevenueChart from "../components/charts/RevenueChart";
import PerformanceChart from "../components/PerformanceChart";

import {
getDashboardData
}
from "../services/analyticsService";

import {
getNotifications
}
from "../services/notificationService";

import {
FaBell,
FaUpload,
FaChartLine,
FaFileAlt
}
from "react-icons/fa";

import {
useTheme
}
from "../context/ThemeContext";


export default function Dashboard(){


const {

theme

}

=

useTheme();



const role =
localStorage.getItem(
"userRole"
) || "Viewer";


const navigate=
useNavigate();


const[
showNotifications,
setShowNotifications
]=
useState(false);


const notifications=
getNotifications();


const[
dashboardData,
setDashboardData
]=
useState({

total_sales:0,
total_products:0,
highest_sales:0,
monthly_sales:[],
top_products:[]

});





useEffect(()=>{

loadDashboard();


const interval=

setInterval(()=>{

loadDashboard();

},5000);


return()=>clearInterval(
interval
);

},[]);






async function loadDashboard(){

const data=
await getDashboardData();

if(data){

setDashboardData(
data
);

}

}






const cards=[

{
title:"Total Sales",
value:`₹${dashboardData.total_sales}`
},

{
title:"Products",
value:dashboardData.total_products
},

{
title:"Highest Sales",
value:dashboardData.highest_sales
},

{
title:"Reports",
value:"18"
}

];






const actions=[

{
title:"Upload Dataset",
icon:<FaUpload/>,
path:"/upload"
},

{
title:"Generate Forecast",
icon:<FaChartLine/>,
path:"/forecast"
},

{
title:"Export Report",
icon:<FaFileAlt/>,
path:"/reports"
}

];






return(

<div

className={

theme==="dark"

?

`
flex
min-h-screen
bg-gray-900
text-white
`

:

`
flex
min-h-screen
bg-gradient-to-br
from-purple-100
via-white
to-purple-200
`

}

>

<Sidebar/>





<div className="
flex-1
p-8
overflow-auto
relative
">






<div className="
flex
justify-between
items-center
">

<div>

<h1 className="
text-5xl
font-bold
">

Dashboard

</h1>



<p className={

theme==="dark"

?

`
text-gray-300
mt-2
flex
items-center
`

:

`
text-gray-500
mt-2
flex
items-center
`

}

>

Live Analytics Dashboard | Role: {role}

<span className="
ml-4
bg-green-500
text-white
text-sm
px-3
py-1
rounded-full
animate-pulse
">

LIVE

</span>

</p>

</div>







<div

onClick={()=>

setShowNotifications(
!showNotifications
)

}

className={

theme==="dark"

?

`
bg-gray-800
shadow-lg
rounded-full
p-4
cursor-pointer
relative
hover:scale-105
transition
`

:

`
bg-white
shadow-lg
rounded-full
p-4
cursor-pointer
relative
hover:scale-105
transition
`

}

>

<FaBell
className="
text-purple-700
text-xl
"
/>

<div className="
absolute
top-2
right-2
w-3
h-3
bg-red-500
rounded-full
">

</div>

</div>

</div>








{

showNotifications &&

<div

className={

theme==="dark"

?

`
absolute
top-24
right-10
bg-gray-800
shadow-2xl
rounded-3xl
p-5
w-80
z-50
`

:

`
absolute
top-24
right-10
bg-white
shadow-2xl
rounded-3xl
p-5
w-80
z-50
`

}

>

<h2 className="
font-bold
text-xl
mb-4
">

Notifications

</h2>


{

notifications.map(

(item,index)=>(

<div

key={index}

className={

theme==="dark"

?

`
bg-gray-700
rounded-xl
p-4
mb-3
`

:

`
bg-purple-50
rounded-xl
p-4
mb-3
`

}

>

{item.message}

</div>

))

}

</div>

}








<WelcomeBanner/>







<div className="
grid
md:grid-cols-2
gap-6
mt-10
">






<div

className={

theme==="dark"

?

`
bg-gray-800
rounded-3xl
shadow-xl
p-6
`

:

`
bg-white
rounded-3xl
shadow-xl
p-6
`

}

>

<h2 className="
font-bold
text-xl
mb-4
">

Revenue Momentum

</h2>

<RevenueChart
data={
dashboardData.monthly_sales
}
/>

</div>








<div

className={

theme==="dark"

?

`
bg-gray-800
rounded-3xl
shadow-xl
p-6
`

:

`
bg-white
rounded-3xl
shadow-xl
p-6
`

}

>

<h2 className="
font-bold
text-xl
mb-4
">

Signature Performance

</h2>

<PerformanceChart
products={
dashboardData.top_products
}
/>

</div>

</div>








<div className="
grid
md:grid-cols-4
gap-6
mt-10
">

{

cards.map(

(item,index)=>(

<div

key={index}

className={

theme==="dark"

?

`
bg-gray-800
rounded-3xl
shadow-xl
p-6
hover:scale-105
transition
`

:

`
bg-white
rounded-3xl
shadow-xl
p-6
hover:scale-105
transition
`

}

>

<p className={

theme==="dark"

?

"text-gray-300"

:

"text-gray-500"

}

>

{item.title}

</p>

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
grid
md:grid-cols-3
gap-6
mt-10
">

{

actions.map(

(item,index)=>(

<div

key={index}

onClick={()=>
navigate(
item.path
)
}

className="
bg-purple-700
text-white
rounded-3xl
shadow-xl
p-6
cursor-pointer
hover:scale-105
transition
"

>

<div className="
text-3xl
mb-4
">

{item.icon}

</div>

<h2 className="
font-bold
">

{item.title}

</h2>

</div>

))

}

</div>

</div>

</div>

)

}