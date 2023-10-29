import { useAuth0 } from "@auth0/auth0-react";
import RoleSelection from "./Components/RoleSelection";
import Dashboard from "./Pages/Dashboard";

function App() {
  const { isAuthenticated } = useAuth0();

  if (!isAuthenticated) return <RoleSelection />;
  return (
    <div>
      <Dashboard />
    </div>
  );
}

export default App;
