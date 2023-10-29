import RelativeButton from "./RelativeButton";
import { useAuth0 } from "@auth0/auth0-react";

function Header() {
  const { logout } = useAuth0();

  const openInNewTab = (url: string) => {
    window.open(url, "_blank", "noreferrer");
  };

  return (
    <header className="bg-gray-900 border-b border-primary/10 py-2">
      <div className="container mx-auto flex flex-row justify-between items-center">
        <h1 className="text-2xl text-white font-bold">MedWise</h1>
        <div className="flex flex-row gap-4 px-4">
          <RelativeButton 
          label="Chat"
          small
          onClick={() => openInNewTab("http://localhost:8501/")}
          />
        <RelativeButton 
          label="Logout" 
          onClick={logout} 
          small 
          secondary
        />
        </div>
      </div>
    </header>
  );
}

export default Header;
