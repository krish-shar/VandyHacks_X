import {Card, CardContent, Typography} from '@mui/material';

interface MedProps {
    name: string;
    dosage: string;
    frequency: string;
    interval: string;
    status: string;
}


function MedCards(med : MedProps) {
    
                return (
                    <Card>
                        <CardContent>
                            <Typography variant="h5" component="div">
                                {med.name}
                            </Typography>
                            <Typography variant="body2">
                                Dosage: {med.dosage}
                            </Typography>
                            <Typography variant="body2">
                                Frequency: {med.frequency}
                            </Typography>
                            <Typography variant="body2">
                                Interval: {med.interval}
                            </Typography>
                            <Typography variant="body2">
                                Status: {med.status}
                            </Typography>
                        </CardContent>
                    </Card>
                );
}
export default MedCards;