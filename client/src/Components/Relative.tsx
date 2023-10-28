import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
function Relative() {
    return (
        <Grid container justifyContent="center" alignItems="center" direction="column">
            <Button 
            variant="contained" 
            color="primary"
            style={{margin: "1em"}}
            >
                Relative
            </Button>
        </Grid>
    );
}
export default Relative;