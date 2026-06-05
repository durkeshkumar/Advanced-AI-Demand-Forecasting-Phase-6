import {
Routes,
Route
}
from "react-router-dom";

import Login from "../pages/Login";
import Register from "../pages/Register";

import Dashboard from "../pages/Dashboard";
import Upload from "../pages/Upload";
import Forecast from "../pages/Forecast";
import Notifications from "../pages/Notifications";
import Reports from "../pages/Reports";
import AdminDashboard from "../pages/AdminDashboard";

import ProtectedRoute
from "./ProtectedRoute";

import SystemMonitoring from "../pages/SystemMonitoring";

import ForecastHistory from "../pages/ForecastHistory";

import AdvancedAnalytics from "../pages/AdvancedAnalytics";

import Monitoring from "../pages/Monitoring";

import AIInsights from "../pages/AIInsights";

import ActivityLogs from "../pages/ActivityLogs";

import UserManagement from "../pages/UserManagement";

import ForecastComparison from "../pages/ForecastComparison";

import DatasetManagement from "../pages/DatasetManagement";

import ForecastWorkspace from "../pages/ForecastWorkspace";

import ExecutiveDashboard from "../pages/ExecutiveDashboard";

import ScenarioAnalysis from "../pages/ScenarioAnalysis";

import Collaboration from "../pages/Collaboration";
export default function AppRoutes(){

return(

<Routes>


<Route
path="/workspace"
element={<ForecastWorkspace/>}
/>

<Route
path="/executive-dashboard"
element={<ExecutiveDashboard/>}
/>

<Route
path="/scenario-analysis"
element={<ScenarioAnalysis/>}
/>

<Route
path="/collaboration"
element={<Collaboration/>}
/>

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

element={

<ProtectedRoute

allowedRoles={[

"Viewer",
"Analyst",
"Super Admin"

]}

>

<Dashboard/>

</ProtectedRoute>

}

/>








<Route

path="/upload"

element={

<ProtectedRoute

allowedRoles={[

"Super Admin"

]}

>

<Upload/>

</ProtectedRoute>

}

/>








<Route

path="/forecast"

element={

<ProtectedRoute

allowedRoles={[

"Analyst",
"Super Admin"

]}

>

<Forecast/>

</ProtectedRoute>

}

/>









<Route

path="/analytics"

element={

<ProtectedRoute

allowedRoles={[

"Analyst",
"Super Admin"

]}

>

<AdvancedAnalytics/>

</ProtectedRoute>

}

/>









<Route

path="/history"

element={

<ProtectedRoute

allowedRoles={[

"Analyst",
"Super Admin"

]}

>

<ForecastHistory/>

</ProtectedRoute>

}

/>









<Route

path="/reports"

element={

<ProtectedRoute

allowedRoles={[

"Analyst",
"Super Admin"

]}

>

<Reports/>

</ProtectedRoute>

}

/>









<Route

path="/notifications"

element={

<ProtectedRoute

allowedRoles={[

"Super Admin"

]}

>

<Notifications/>

</ProtectedRoute>

}

/>










<Route

path="/monitoring"

element={

<ProtectedRoute

allowedRoles={[

"Super Admin"

]}

>

<Monitoring/>

</ProtectedRoute>

}

/>










<Route

path="/system-monitoring"

element={

<ProtectedRoute

allowedRoles={[

"Super Admin"

]}

>

<SystemMonitoring/>

</ProtectedRoute>

}

/>


<Route

path="/insights"

element={

<ProtectedRoute

allowedRoles={[

"Analyst",
"Super Admin"

]}

>

<AIInsights/>

</ProtectedRoute>

}

/>

<Route

path="/logs"

element={

<ProtectedRoute

allowedRoles={[

"Super Admin"

]}

>

<ActivityLogs/>

</ProtectedRoute>

}

/>


<Route

path="/users"

element={

<ProtectedRoute

allowedRoles={[

"Super Admin"

]}

>

<UserManagement/>

</ProtectedRoute>

}

/>

<Route

path="/comparison"

element={

<ProtectedRoute

allowedRoles={[

"Analyst",
"Super Admin"

]}

>

<ForecastComparison/>

</ProtectedRoute>

}

/>
<Route

path="/datasets"

element={

<ProtectedRoute

allowedRoles={[

"Super Admin"

]}

>

<DatasetManagement/>

</ProtectedRoute>

}

/>

<Route

path="/admin"

element={

<ProtectedRoute

allowedRoles={[

"Super Admin"

]}

>

<AdminDashboard/>

</ProtectedRoute>

}

/>






</Routes>

)

}