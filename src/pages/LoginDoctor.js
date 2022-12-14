import React, { useState } from 'react';
import { TextField, Typography, Grid, CircularProgress, Button } from '@mui/material';
import { signInWithEmailAndPassword } from 'firebase/auth';
import Sheet from '@mui/joy/Sheet';
import { useNavigate } from 'react-router-dom';
import { collection, query, where, getDocs } from "firebase/firestore"; 
import { auth,db } from '../firebase';

export default function LoginUser() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const doctorsRef = collection(db,'Doctors');
    const navigate = useNavigate();

    const signIn = (email, password) => {
        setLoading(true);
        setTimeout(async () => { 
        const queryRef = query(doctorsRef, where("email", "==", email));
        const querySnapshot = await getDocs(queryRef);
        if (querySnapshot.size==0)
        {
            setLoading(false);
            console.log('Wrong Email/Password.');
        }
        else {
            signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    console.log('Logged In Successfully');
                    const user = userCredential.user;
                    navigate('/doctorselection');
                })
                .catch((error) => {
                    setLoading(false);
                    console.log('Wrong Email/Password.');
            });
        }
        }, 2000);
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            console.log('Pressed on Enter Key');
            signIn(email, password);
        }
    };

    return loading ? (
        <Grid
            container
            spacing={0}
            direction='column'
            alignItems='center'
            justifyContent='center'
            sx={{ minHeight: '90vh' }}
        >
            <CircularProgress size={100} />
        </Grid>
    ) : (
        <Sheet
            sx={{
                maxWidth: 400,
                mx: 'auto', // margin left & right
                my: 4, // margin top & botom
                py: 3, // padding top & bottom
                px: 2, // padding left & right
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
                borderRadius: 'sm',
                boxShadow: 'md',
            }}
        >
            <div>
                <Typography level='h4' component='h1'>
                    <b>Doctor Login Here</b>
                </Typography>
                <Typography level='body2'>Sign in to continue</Typography>
            </div>
            <TextField
                // html input attribute
                type='email'
                placeholder='email'
                // pass down to FormLabel as children
                label='Email'
                onChange={(event) => {
                    setEmail(event.target.value);
                }}
            />
            <TextField
                type='password'
                placeholder='password'
                label='Password'
                onChange={(event) => {
                    setPassword(event.target.value);
                }}
                onKeyDown={handleKeyDown}
            />
            <button
                sx={{
                    mt: 10, // margin top
                }}
                onClick={() => signIn(email, password)}
            >
                Log In
            </button>
        </Sheet>
    );
}
