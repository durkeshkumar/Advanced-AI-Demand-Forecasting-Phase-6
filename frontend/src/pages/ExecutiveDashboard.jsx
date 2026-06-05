export default function ExecutiveDashboard(){

return(

<div className="p-6">

<h1 className="
text-3xl
font-bold
mb-6
">

Executive Dashboard

</h1>

<div className="
grid
md:grid-cols-4
gap-6
">

<div className="
bg-white
rounded-2xl
shadow-lg
p-5
">

<h3>Total Revenue</h3>

<h1 className="
text-3xl
font-bold
text-green-600
">

₹12,00,000

</h1>

</div>

<div className="
bg-white
rounded-2xl
shadow-lg
p-5
">

<h3>Total Profit</h3>

<h1 className="
text-3xl
font-bold
text-purple-600
">

₹3,60,000

</h1>

</div>

<div className="
bg-white
rounded-2xl
shadow-lg
p-5
">

<h3>Growth Rate</h3>

<h1 className="
text-3xl
font-bold
text-blue-600
">

18%

</h1>

</div>

<div className="
bg-white
rounded-2xl
shadow-lg
p-5
">

<h3>Forecast Accuracy</h3>

<h1 className="
text-3xl
font-bold
text-orange-600
">

94%

</h1>

</div>

</div>

</div>

);

}