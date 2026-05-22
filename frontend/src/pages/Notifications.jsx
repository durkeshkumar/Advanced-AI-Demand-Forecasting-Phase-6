import { useEffect, useState } from "react";

import Sidebar from "../components/layout/Sidebar";

import {
FaBell
}
from "react-icons/fa";

import {
getLiveNotifications
}
from "../services/liveNotificationService";



export default function Notifications(){



const [

notifications,
setNotifications

]

=

useState([]);





useEffect(()=>{

loadNotifications();


const interval=

setInterval(()=>{

loadNotifications();

},4000);



return()=>clearInterval(
interval
);

},[]);







function loadNotifications(){

const data=

getLiveNotifications();

setNotifications(
data
);

}








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
animate-pulse
">

<FaBell/>

</div>


<div>

<h1 className="
text-5xl
font-bold
">

Notification Center

</h1>

<p className="
text-gray-500
mt-2
">

Real-time system alerts and business notifications

</p>

</div>

</div>









<div className="
space-y-5
">

{

notifications.map(

(item,index)=>(

<div

key={index}

className="
bg-white
rounded-3xl
shadow-xl
p-6
border-l-8
border-purple-700
hover:scale-[1.01]
transition
duration-300
"

>

<div className="
flex
items-center
gap-4
">

<div className="
bg-purple-700
text-white
p-4
rounded-2xl
text-2xl
">

<FaBell/>

</div>





<div>

<h2 className="
text-xl
font-bold
">

Live Notification

</h2>

<p className="
text-gray-500
mt-1
">

{item.message}

</p>

</div>

</div>

</div>

))

}

</div>

</div>

</div>

)

}