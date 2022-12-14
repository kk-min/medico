import React, { useEffect } from 'react';
import { auth } from '../firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { Grid } from '@mui/material';
import SelectionCard from '../components/SelectionCard';
import doctor_image from '../assets/doctor_image.jpg';
import symptom_declaration_image from '../assets/symptom_declaration_image.jpg';
import ChatBubble from '../components/ChatBubble.jsx';

export default function Selection(props) {
    const navigate = useNavigate();
    useEffect(() => {
        //Set up observer on user authentication
        onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in
                console.log('Authorization granted.');
                props.setLoggedIn(true);
            } else {
                // User is signed out
                console.log('Not authorized.');
                props.setLoggedIn(false);
            }
        });
    });

    const onClickHandler = (event) => {
        if (event.value == 0) {
            // Doctor Chat chosen
            navigate('/chat');
        }
        if (event.value == 1) {
            // Symptom Declaration chosen
            navigate('/symptomdeclaration');
        }
    };
    return (
        <div>
            <Grid container>
                <Grid item xs={6}>
                    <ChatBubble
                        message={'Test message'}
                        userName={'testUser'}
                    />
                </Grid>
                <Grid item xs={6}>
                    <SelectionCard
                        image={symptom_declaration_image}
                        title='Declare symptoms'
                        subtitle='Indicate your symptoms using a visual diagram.'
                    ></SelectionCard>
                </Grid>
            </Grid>
        </div>
    );
}
