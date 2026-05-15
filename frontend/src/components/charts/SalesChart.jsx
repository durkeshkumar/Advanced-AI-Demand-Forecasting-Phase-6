import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";

export default function SalesChart(){

const data=[

{
month:"Jan",
sales:1200
},

{
month:"Feb",
sales:2100
},

{
month:"Mar",
sales:1800
},

{
month:"Apr",
sales:3000
},

{
month:"May",
sales:2500
},

{
month:"Jun",
sales:4200
}

]

return(

<div className="h-56">

<ResponsiveContainer
width="100%"
height="100%"
>

<LineChart data={data}>

<XAxis dataKey="month"/>

<YAxis/>

<Tooltip/>

<Line
type="monotone"
dataKey="sales"
stroke="#7E22CE"
strokeWidth={4}
/>

</LineChart>

</ResponsiveContainer>

</div>

)

}