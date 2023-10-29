import { useAuth0 } from "@auth0/auth0-react";
import RoleSelection from "./Components/RoleSelection";
import Dashboard from "./Pages/Dashboard";
// import { WebDashboard } from "./Pages/WebDashboard";

function App() {



  const { isAuthenticated } = useAuth0();

  if (!isAuthenticated) return <RoleSelection />;

  // return <div>
  //   <WebDashboard />
  // </div>

  return (
    <div>
      <Dashboard />
    </div>
  );
}

export default App;
