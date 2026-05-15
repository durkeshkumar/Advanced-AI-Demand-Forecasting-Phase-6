export default function TopProducts(){

const products=[

{
name:"Laptop",
sales:"₹25,000"
},

{
name:"Mobile",
sales:"₹18,500"
},

{
name:"Tablet",
sales:"₹14,000"
},

{
name:"Monitor",
sales:"₹11,000"
}

]

return(

<div className="space-y-4">

{products.map((item,index)=>(

<div
key={index}
className="
flex
justify-between
bg-purple-50
p-4
rounded-xl
"
>

<div>

<p className="font-semibold">
{item.name}
</p>

</div>

<div className="text-purple-700 font-bold">

{item.sales}

</div>

</div>

))}

</div>

)

}