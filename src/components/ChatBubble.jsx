import React, { useState, useEffect } from 'react';
import { Card, CardContent, Typography, Grid } from '@mui/material';

export default function ChatBubble(props) {
    const [type, setType] = useState(null);
    const [color, setColor] = useState(null);
    const [alignment, setAlignment] = useState(null);

    useEffect(() => {
        setType(props.type);
        // sent
        if (type == 'sent') {
            setAlignment('flex-end');
            setColor('dodgerblue');
        } else {
            // received
            setAlignment('flex-start');
            setColor('#00172D');
        }
        console.log('In ChatBubble useEffect');
    });

    return (
        <Grid container item p={{ xs: 0, sm: 2 }} justifyContent={alignment}>
            <Card
                alignItems='center'
                justifyContent='center'
                variant='outlined'
                sx={{ bgcolor: color, maxWidth: '90%', margin: '20px' }}
            >
                <CardContent>
                    <Typography color={'white'} sx={{ fontSize: 12 }}>
                        <b>{props.userName}</b>
                    </Typography>
                    <Typography color={'white'}>{props.message}</Typography>
                </CardContent>
            </Card>
        </Grid>
    );
}
