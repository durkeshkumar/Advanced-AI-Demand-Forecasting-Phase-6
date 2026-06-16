import { useEffect, useState } from "react";

export default function GovernanceCenter(){

const [versions,setVersions] =
useState([]);

const [modifications,setModifications] =
useState([]);

const [approvals,setApprovals] =
useState([]);

const [dashboard,setDashboard] =
useState({});

useEffect(()=>{

loadGovernance();

},[]);

async function loadGovernance(){

try{

const versionResponse =
await fetch(
"http://127.0.0.1:8000/forecast-governance/versions"
);

const versionData =
await versionResponse.json();

setVersions(
versionData
);

const modificationResponse =
await fetch(
"http://127.0.0.1:8000/forecast-governance/modifications"
);

const modificationData =
await modificationResponse.json();

setModifications(
modificationData
);

const approvalResponse =
await fetch(
"http://127.0.0.1:8000/forecast-governance/approval-records"
);

const approvalData =
await approvalResponse.json();

setApprovals(
approvalData
);

const dashboardResponse =
await fetch(
"http://127.0.0.1:8000/forecast-governance/dashboard"
);

const dashboardData =
await dashboardResponse.json();

setDashboard(
dashboardData
);

}

catch(error){

console.log(error);

}

}

return(

<div className="
p-8
bg-gray-50
min-h-screen
">

<div className="
bg-gradient-to-r
from-slate-700
to-slate-900
text-white
rounded-3xl
p-8
mb-8
shadow-xl
">

<h1 className="
text-4xl
font-bold
">

Governance Center

</h1>

<p className="
mt-2
text-lg
">

Forecast Governance and Audit Tracking

</p>

</div>

<div className="
grid
md:grid-cols-3
gap-6
mb-8
">

<div className="
bg-white
rounded-3xl
shadow-lg
p-6
">

<h3 className="font-bold">
Versions
</h3>

<p>
{dashboard.total_versions}
</p>

</div>

<div className="
bg-white
rounded-3xl
shadow-lg
p-6
">

<h3 className="font-bold">
Modifications
</h3>

<p>
{dashboard.total_modifications}
</p>

</div>

<div className="
bg-white
rounded-3xl
shadow-lg
p-6
">

<h3 className="font-bold">
Approvals
</h3>

<p>
{dashboard.approval_records}
</p>

</div>

</div>

<div className="
grid
lg:grid-cols-3
gap-6
">

<div className="
bg-white
rounded-3xl
shadow-lg
p-6
">

<h2 className="
text-xl
font-bold
mb-4
">

Versions

</h2>

{
versions.map((item,index)=>(

<div
key={index}
className="
bg-blue-50
p-3
rounded-xl
mb-3
"
>

{item.forecast_name}
-
{item.version}

</div>

))
}

</div>

<div className="
bg-white
rounded-3xl
shadow-lg
p-6
">

<h2 className="
text-xl
font-bold
mb-4
">

Modifications

</h2>

{
modifications.map((item,index)=>(

<div
key={index}
className="
bg-yellow-50
p-3
rounded-xl
mb-3
"
>

{item.forecast_name}
-
{item.modified_by}

</div>

))
}

</div>

<div className="
bg-white
rounded-3xl
shadow-lg
p-6
">

<h2 className="
text-xl
font-bold
mb-4
">

Approvals

</h2>

{
approvals.map((item,index)=>(

<div
key={index}
className="
bg-green-50
p-3
rounded-xl
mb-3
"
>

{item.forecast_name}
-
{item.approved_by}

</div>

))
}

</div>

</div>

</div>

);

}