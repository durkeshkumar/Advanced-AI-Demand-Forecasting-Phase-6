export default function FilterBar({

search,
setSearch,

filter,
setFilter

}){

return(

<div
className="
flex
gap-4
mb-8
"
>

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
border
p-4
rounded-xl
w-80
bg-white
shadow
"

/>


<select

value={filter}

onChange={(e)=>

setFilter(
e.target.value
)

}

className="
border
p-4
rounded-xl
bg-white
shadow
"

>

<option value="All">

All

</option>

<option value="Completed">

Completed

</option>

<option value="Processing">

Processing

</option>

</select>

</div>

)

}