import MedCards from '../Components/MedCards';
import {medicine} from '../Components/MockMedicine';
import {Grid} from '@mui/material';


function PatientPage() {
    const meds = medicine;
    return (
        <Grid container spacing={2}>
            {meds.map((med) => (
                <MedCards name={med.name} dosage={med.dosage} frequency={med.frequency} interval={med.interval} status={med.status} />
            ))}
        </Grid>
    );
}


export default PatientPage;