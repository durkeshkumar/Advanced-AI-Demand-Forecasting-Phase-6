import {
RadialBarChart,
RadialBar,
ResponsiveContainer
} from "recharts";

export default function AccuracyChart(){

const data=[
{
name:"Accuracy",
value:94
}
]

return(

<div className="h-60">

<ResponsiveContainer>

<RadialBarChart
innerRadius="70%"
outerRadius="100%"
data={data}
startAngle={180}
endAngle={0}
>

<RadialBar
dataKey="value"
/>

<text
x="50%"
y="55%"
textAnchor="middle"
fontSize="25"
fontWeight="bold"
>

94%

</text>

</RadialBarChart>

</ResponsiveContainer>

</div>

)

}