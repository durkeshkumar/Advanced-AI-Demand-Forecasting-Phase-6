import { Routes, Route } from "react-router-dom";

import Login from "../pages/Login";
import Register from "../pages/Register";
import Dashboard from "../pages/Dashboard";
import Upload from "../pages/Upload";
import Forecast from "../pages/Forecast";
import Notifications from "../pages/Notifications";
import AdminDashboard from "../pages/AdminDashboard";
import Reports from "../pages/Reports";

export default function AppRoutes(){

return(

<Routes>

<Route
path="/"
element={<Login/>}
/>

<Route
path="/register"
element={<Register/>}
/>

<Route
path="/dashboard"
element={<Dashboard/>}
/>

<Route
path="/upload"
element={<Upload/>}
/>

<Route
path="/forecast"
element={<Forecast/>}
/>

<Route
path="/notifications"
element={<Notifications/>}
/>

<Route
path="/admin"
element={<AdminDashboard/>}
/>

<Route
path="/reports"
element={<Reports/>}
/>

</Routes>



)

}