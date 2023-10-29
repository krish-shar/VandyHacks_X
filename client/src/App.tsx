<<<<<<< HEAD
import RelativeButton from "./Components/RelativeButton";

function App() {
=======

import Doctor from './Components/Doctor';
import Relative from './Components/Relative';
import Patient from './Components/Patient';
import Grid from '@mui/material/Grid'
import LoginButton from './Components/LoginButton';
import LogoutButton from './Components/LogoutButton';
import Cam from "./Components/Camera.tsx";
>>>>>>> SahitM


<<<<<<< HEAD
  return (
    <div className="App">
      <div className="flex flex-col justify-center items-center h-screen">
        <div className="flex flex-col justify-center text-center">
          <h1 className="text-2xl text-white">Welcome to the Healthcare System</h1>
          <h1 className="text-2xl text-white">Select your role:</h1>
          <br />
        </div>


        <div className="flex flex-row justify-center">
          <div className="flex flex-col gap-y-4">
          <RelativeButton label="Patient" onClick={() => {
        
          }}  large />
            <RelativeButton label="Doctor" onClick={() => {}} large disabled secondary />

            <RelativeButton label="Relative" onClick={() => {}}  large disabled secondary/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
=======
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
>>>>>>> SahitM
