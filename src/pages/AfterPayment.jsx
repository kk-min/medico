import React from 'react';
import { Grid, CircularProgress, Button, IconButton } from '@mui/material';
import { useNavigate } from 'react-router-dom';
const preventDefault = (event) => event.preventDefault();

export default function AfterPayment() {
    const navigate = useNavigate();

    const navigateSelection = () => {
        navigate('/Selection');
    };

    const navigateGP = () => {
        navigate('/FindGP');
    };

    return (
        <div>
            <div>
                <b>Thank you for trying out MediCo.</b>
                <br></br>
                <br></br>
                <Button variant='contained' onClick={navigateSelection}>
                    Return to Home Page
                </Button>
                <br></br>
                <br></br>
                <Button variant='contained' onClick={navigateGP}>
                    Visit Nearby GP Location
                </Button>

                <br />
            </div>
        </div>
    );
}
