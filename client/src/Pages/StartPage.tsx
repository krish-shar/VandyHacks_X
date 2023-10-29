import Doctor from '../Components/Doctor';
import Relative from '../Components/Relative';
import Patient from '../Components/Patient';
import Grid from '@mui/material/Grid'
function StartPage() {
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
        </Grid>
      );
}
export default StartPage;