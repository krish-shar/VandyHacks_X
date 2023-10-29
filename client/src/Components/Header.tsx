import RelativeButton from "./RelativeButton";
import { useAuth0 } from "@auth0/auth0-react";

function Header() {
  const { logout } = useAuth0();

  return (
    <header className="bg-gray-900 border-b border-primary/10 py-4">
      <div className="container mx-auto flex flex-row justify-between items-center">
        <h1 className="text-3xl text-white font-bold">Medicinist</h1>
        <RelativeButton 
          label="Logout" 
          onClick={logout} 
          large 
          secondary
        />
      </div>
    </header>
  );
}

export default Header;
