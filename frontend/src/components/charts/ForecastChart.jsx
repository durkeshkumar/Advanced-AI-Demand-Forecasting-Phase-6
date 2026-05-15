import {

AreaChart,
Area,
XAxis,
YAxis,
Tooltip,
ResponsiveContainer

}

from "recharts";


export default function ForecastChart({

days=7

}){

const data=[];


for(

let i=1;

i<=days;

i++

){

data.push({

day:`Day ${i}`,

prediction:
Math.floor(
100+
i*15+
Math.random()*25
)

})

}


return(

<div className="
w-full
h-[320px]
">

<ResponsiveContainer
width="100%"
height="100%"
>

<AreaChart
data={data}
>

<defs>

<linearGradient
id="forecast"
x1="0"
y1="0"
x2="0"
y2="1"
>

<stop
offset="5%"
stopColor="#9333ea"
stopOpacity={0.8}
/>

<stop
offset="95%"
stopColor="#9333ea"
stopOpacity={0.1}
/>

</linearGradient>

</defs>


<XAxis
dataKey="day"
/>

<YAxis/>

<Tooltip/>


<Area

type="monotone"

dataKey="prediction"

stroke="#9333ea"

strokeWidth={4}

fill="url(#forecast)"

/>

</AreaChart>

</ResponsiveContainer>

</div>

)

}