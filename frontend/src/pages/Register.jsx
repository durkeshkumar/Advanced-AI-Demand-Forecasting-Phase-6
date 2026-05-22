import { useState } from "react";
import axios from "axios";

export default function Register(){

const [name,setName]=useState("");
const [email,setEmail]=useState("");
const [password,setPassword]=useState("");
const [role,setRole]=useState("Viewer");

async function handleRegister(){

try{

const response = await axios.post(

"http://127.0.0.1:8000/auth/register",

{
name:name,
email:email,
password:password,
role:role
}

);

console.log(response.data);

alert("Registration successful");

localStorage.clear();

window.location.href="/";

}
catch(error){

console.log(
error.response?.data || error
);

alert(
"Registration failed"
);

}

}

return(

<div className="
min-h-screen
flex
items-center
justify-center
bg-gradient-to-br
from-purple-100
via-white
to-purple-200
">

<div className="
bg-white
rounded-3xl
shadow-xl
p-10
w-96
">

<h1 className="
text-3xl
font-bold
text-center
mb-8
">

Register

</h1>

<input
type="text"
placeholder="Name"
value={name}
onChange={(e)=>setName(e.target.value)}
className="
w-full
border
rounded-xl
p-4
mb-4
"
/>

<input
type="email"
placeholder="Email"
value={email}
onChange={(e)=>setEmail(e.target.value)}
className="
w-full
border
rounded-xl
p-4
mb-4
"
/>

<input
type="password"
placeholder="Password"
value={password}
onChange={(e)=>setPassword(e.target.value)}
className="
w-full
border
rounded-xl
p-4
mb-4
"
/>

<select
value={role}
onChange={(e)=>setRole(e.target.value)}
className="
w-full
border
rounded-xl
p-4
mb-6
"
>

<option value="Viewer">
Viewer
</option>

<option value="Analyst">
Analyst
</option>

<option value="Super Admin">
Super Admin
</option>

</select>

<button
onClick={handleRegister}
className="
w-full
bg-purple-700
text-white
p-4
rounded-xl
hover:bg-purple-800
"
>

Register

</button>

</div>

</div>

)

}