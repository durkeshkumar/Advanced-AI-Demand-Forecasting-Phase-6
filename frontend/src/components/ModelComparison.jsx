export default function ModelComparison(){

const models=[

{
name:"Linear Regression",
accuracy:"94.2%",
speed:"Fast"
},

{
name:"Random Forest",
accuracy:"91.7%",
speed:"Medium"
},

{
name:"Prophet",
accuracy:"96.1%",
speed:"Slow"
}

]

return(

<div className="
overflow-x-auto
">

<table className="
w-full
">

<thead>

<tr className="
bg-purple-100
">

<th className="p-4 text-left">

Model

</th>

<th className="p-4 text-left">

Accuracy

</th>

<th className="p-4 text-left">

Speed

</th>

</tr>

</thead>


<tbody>

{models.map((item,index)=>(

<tr
key={index}

className="
border-b
"

>

<td className="p-4">

{item.name}

</td>

<td className="
p-4
font-bold
text-purple-700
">

{item.accuracy}

</td>

<td className="p-4">

{item.speed}

</td>

</tr>

))}

</tbody>

</table>

</div>

)

}