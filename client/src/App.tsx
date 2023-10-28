import Doctor from './Components/Doctor';
import Relative from './Components/Relative';
import Patient from './Components/Patient';
import Grid from '@mui/material/Grid'
import LoginButton from './Components/LoginButton';
import LogoutButton from './Components/LogoutButton';

function App() {
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
      </Grid>
    );
}

export default App;
