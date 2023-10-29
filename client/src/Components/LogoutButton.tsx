import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "@mui/material";

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <Button
      variant="contained"
      onClick={() =>
        logout({
          logoutParams: {
            returnTo: "https://google.com",
            client_id: "XKstvdcjCKBZgYFVGsgXwjkCcRbQvODK",
          },
        })
      }
    >
      Log Out
    </Button>
  );
};

export default LogoutButton;
