import { Navigate } from "react-router-dom";


export default function ProtectedRoute({

children,

allowedRoles

}){

const role =

localStorage.getItem(
"userRole"
);


if(

!allowedRoles.includes(
role
)

){

return(

<Navigate
to="/dashboard"
/>

);

}


return children;

}