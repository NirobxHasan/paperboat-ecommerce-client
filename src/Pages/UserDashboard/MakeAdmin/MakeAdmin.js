import { Button, Container, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const handleEmailField = (e) => {
        setEmail(e.target.value);
    };
    const handleAdminform = (e) => {
        console.log(email);
        fetch('https://ancient-mesa-81170.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ email })
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.modifiedCount === 1) {
                    alert('Successfully admin created!');
                }
            });
        e.preventDefault();
    };
    return (
        <Container>
            <Typography variant="h6" gutterBottom component="div">
                Create Admin
            </Typography>
            <Box sx={{ mt: 5, textAlign: 'center' }}>
                <form onSubmit={handleAdminform}>
                    <TextField
                        sx={{ width: '50%' }}
                        id="standard-basic"
                        label="Email"
                        type="email"
                        onBlur={handleEmailField}
                        variant="standard"
                    />
                    <Button type="submit" color="success" variant="contained">
                        Make admin
                    </Button>
                </form>
            </Box>
        </Container>
    );
};

export default MakeAdmin;
