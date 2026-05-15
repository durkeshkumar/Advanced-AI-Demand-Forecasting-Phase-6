export default function RecentActivity(){

const activities=[

{
title:"Forecast Generated",
time:"2 min ago"
},

{
title:"Dataset Uploaded",
time:"10 min ago"
},

{
title:"Report Exported",
time:"25 min ago"
},

{
title:"Model Accuracy Updated",
time:"1 hr ago"
}

]

return(

<div className="space-y-4">

{activities.map((item,index)=>(

<div
key={index}

className="
flex
justify-between
items-center
bg-purple-50
rounded-xl
p-4
hover:shadow-md
transition
"

>

<div>

<h3 className="font-semibold">

{item.title}

</h3>

</div>

<p className="
text-sm
text-gray-500
">

{item.time}

</p>

</div>

))}

</div>

)

}