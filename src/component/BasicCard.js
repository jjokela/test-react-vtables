import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default function BasicCard(props) {
    return (
        <Card sx={{ minWidth: 275, height: 350}}>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    {props.name}
                </Typography>
                <Typography variant="body2" sx={{ fontSize: 16 }}>
                    {props.description}
                </Typography>
            </CardContent>
            <CardActions sx={{ justifyContent: 'end' }}>
                {props.actualWordIndex} / {props.totalDataSetCount}
                {/* <Button size="small">Learn More</Button> */}
            </CardActions>
        </Card>
    );
}


