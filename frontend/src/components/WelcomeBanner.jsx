export default function WelcomeBanner(){

return(

<div className="
bg-gradient-to-r
from-purple-700
to-pink-500
rounded-3xl
p-8
text-white
shadow-2xl
">

<h1 className="
text-4xl
font-bold
">

Welcome Back, Durkesh 👋

</h1>

<p className="
mt-3
text-purple-100
">

AI-powered demand forecasting dashboard

</p>

<div className="
mt-6
flex
gap-4
">

<button className="
bg-white
text-purple-700
px-6
py-3
rounded-xl
font-semibold
">

Generate Forecast

</button>

<button className="
bg-purple-900
px-6
py-3
rounded-xl
">

Upload Dataset

</button>

</div>

</div>

)

}