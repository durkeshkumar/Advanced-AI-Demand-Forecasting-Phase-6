import { FaComments, FaHistory, FaShare } from "react-icons/fa";

export default function Collaboration(){

const comments = [

{
user:"Analyst",
comment:"Demand expected to increase next quarter"
},

{
user:"Manager",
comment:"Review inventory allocation"
}

];

const timeline = [

"Forecast Created",

"Comment Added",

"Report Shared",

"Forecast Updated"

];

const revisions = [

"v1.0",

"v2.0",

"v3.0"

];

return(

<div className="
p-8
bg-gray-50
min-h-screen
">

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
">

Forecast Collaboration

</h1>

<p className="
text-lg
mt-2
">

Team collaboration and forecast management

</p>

</div>

<div className="
grid
lg:grid-cols-3
gap-8
">

{/* Comments */}

<div className="
bg-white
rounded-3xl
shadow-lg
p-6
">

<div className="
flex
items-center
gap-3
mb-5
">

<FaComments className="
text-purple-600
text-2xl
"/>

<h2 className="
text-2xl
font-bold
">

Comments

</h2>

</div>

{

comments.map(
(item,index)=>(

<div
key={index}
className="
border-b
py-3
"
>

<p className="
font-bold
">

{item.user}

</p>

<p>

{item.comment}

</p>

</div>

))

}

</div>

{/* Timeline */}

<div className="
bg-white
rounded-3xl
shadow-lg
p-6
">

<div className="
flex
items-center
gap-3
mb-5
">

<FaHistory className="
text-blue-600
text-2xl
"/>

<h2 className="
text-2xl
font-bold
">

Activity Timeline

</h2>

</div>

{

timeline.map(
(item,index)=>(

<div
key={index}
className="
mb-4
bg-blue-50
p-3
rounded-xl
"
>

{item}

</div>

))

}

</div>

{/* Revisions */}

<div className="
bg-white
rounded-3xl
shadow-lg
p-6
">

<div className="
flex
items-center
gap-3
mb-5
">

<FaShare className="
text-green-600
text-2xl
"/>

<h2 className="
text-2xl
font-bold
">

Revision History

</h2>

</div>

{

revisions.map(
(item,index)=>(

<div
key={index}
className="
mb-3
bg-green-50
p-3
rounded-xl
"
>

{item}

</div>

))

}

</div>

</div>

</div>

);

}