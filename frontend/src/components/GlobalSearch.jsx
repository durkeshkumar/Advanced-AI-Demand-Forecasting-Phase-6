import {
FaSearch
}
from "react-icons/fa";


export default function GlobalSearch({

search,
setSearch

}){

return(

<div className="
relative
w-full
max-w-md
">

<input

type="text"

placeholder="Search..."

value={search}

onChange={(e)=>

setSearch(
e.target.value
)

}

className="
w-full
bg-white
shadow-lg
rounded-2xl
p-4
pl-14
outline-none
border
"

/>

<FaSearch
className="
absolute
left-5
top-5
text-gray-400
"
/>

</div>

)

}