import React from 'react';
import {medicine} from '../Components/MockMedicine';
import {Card, CardContent, Grid, Typography} from '@mui/material';

export const MedCards = () => {
    return (
        <Grid container spacing={2}>
            {medicine.map((med) => {
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
            })}
        </Grid>
    );
};
