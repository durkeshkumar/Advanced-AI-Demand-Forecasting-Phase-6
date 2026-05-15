export default function AccuracyMetrics(){

const metrics=[

{
title:"MAE",
value:"2.31"
},

{
title:"RMSE",
value:"3.74"
},

{
title:"MAPE",
value:"4.2%"
},

{
title:"R² Score",
value:"0.94"
}

]

return(

<div className="
grid
md:grid-cols-4
gap-5
">

{metrics.map((item,index)=>(

<div
key={index}

className="
bg-purple-50
rounded-2xl
p-5
text-center
"

>

<h2 className="
text-gray-500
">

{item.title}

</h2>

<p className="
text-2xl
font-bold
text-purple-700
mt-3
">

{item.value}

</p>

</div>

))}

</div>

)

}