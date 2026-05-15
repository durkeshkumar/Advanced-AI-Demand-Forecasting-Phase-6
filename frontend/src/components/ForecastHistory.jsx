export default function ForecastHistory(){

const history=[

{
date:"15-05-2026",
model:"Prophet",
accuracy:"96.1%"
},

{
date:"14-05-2026",
model:"Linear Regression",
accuracy:"94.2%"
},

{
date:"13-05-2026",
model:"Random Forest",
accuracy:"91.7%"
}

]

return(

<div className="
space-y-4
">

{history.map((item,index)=>(

<div
key={index}

className="
bg-purple-50
rounded-2xl
p-5
flex
justify-between
items-center
"

>

<div>

<h2 className="
font-bold
">

{item.model}

</h2>

<p className="
text-gray-500
">

{item.date}

</p>

</div>


<div className="
font-bold
text-purple-700
">

{item.accuracy}

</div>

</div>

))}

</div>

)

}