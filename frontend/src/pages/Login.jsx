import { useState } from "react";
import axios from "axios";

export default function Login(){

const [email,setEmail]=useState("");

const [password,setPassword]=useState("");


async function handleLogin(){

try{

console.log(
"Trying login:",
email
);

const response=

await axios.post(

"http://127.0.0.1:8000/auth/login",

{

email:email,

password:password

}

);

console.log(
"LOGIN SUCCESS:",
response.data
);


localStorage.setItem(

"userRole",

response.data.role

);


localStorage.setItem(

"token",

response.data.access_token

);


localStorage.setItem(

"name",

response.data.name

);


alert(
"Login Successful"
);


window.location.href=
"/dashboard";


}

catch(error){

console.log(

"LOGIN ERROR:",

error.response?.data ||

error.message

);

alert(

error.response?.data?.detail ||

"Login failed"

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

Login

</h1>


<input

type="email"

placeholder="Email"

value={email}

onChange={(e)=>

setEmail(
e.target.value
)

}

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

onChange={(e)=>

setPassword(
e.target.value
)

}

className="
w-full
border
rounded-xl
p-4
mb-6
"

/>



<button

onClick={handleLogin}

className="
w-full
bg-purple-700
text-white
p-4
rounded-xl
hover:bg-purple-800
transition
"

>

Login

</button>



<p className="
text-center
mt-6
">

No account?

<a

href="/register"

className="
text-purple-700
font-bold
ml-2
"

>

Register

</a>

</p>

</div>

</div>

)

}