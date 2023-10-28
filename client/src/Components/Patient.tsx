import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

function Patient() {
    return (
        <Grid container justifyContent="center" alignItems="center" direction="column">
            <Button 
            variant="contained" 
            color="primary"
            style={{margin: "1em"}}
            >
                Patient
            </Button>
        </Grid>
    );
}

export default Patient;