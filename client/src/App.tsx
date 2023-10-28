
import Doctor from './Components/Doctor';
import Relative from './Components/Relative';
import Patient from './Components/Patient';
import Grid from '@mui/material/Grid'
import LoginButton from './Components/LoginButton';
import LogoutButton from './Components/LogoutButton';
import Cam from "./Components/Camera.tsx";

export default function App() {
    return (

      <Grid container 
      justifyContent="center" 
      alignItems="center" 
      direction="column"
      style={{height: "100vh"}}
      >
        <h1>Who are you?</h1>
        <Doctor />
        <Relative />
        <Patient />
        <LoginButton></LoginButton>
        <br></br>
        <LogoutButton></LogoutButton>
        <h1 className="text-3xl font-bold underline">
           Hello world!
        </h1>
        <Cam />
      </Grid>
    );
}