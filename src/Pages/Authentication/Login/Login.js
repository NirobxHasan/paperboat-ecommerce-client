import { Button, Container, Grid, Paper, TextField } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const Login = () => {
    const handleLoginForm = (e) => {
        e.preventDefault();
    };
    return (
        <Container
            sx={{
                height: '100vh',
                display: 'flex',
                justifyContent: 'center',
                flexWrap: 'wrap',
                alignContent: 'center'
            }}
        >
            <Paper
                sx={{
                    p: 5,
                    my: 5,
                    maxWidth: 'md',
                    width: 400,
                    height: 400,
                    textAlign: 'center'
                }}
                elevation={1}
            >
                <form onSubmit={handleLoginForm}>
                    <TextField
                        sx={{ mb: 3, width: '90%' }}
                        id="standard-basic"
                        label="Email"
                        type="email"
                        variant="standard"
                        color="success"
                    />
                    <br />
                    <TextField
                        sx={{ mb: 3, width: '90%' }}
                        id="standard-basic"
                        label="Password"
                        type="password"
                        variant="standard"
                        color="success"
                    />
                    <Box>
                        <Button
                            type="submit"
                            color="success"
                            variant="outlined"
                        >
                            LOGIN
                        </Button>
                    </Box>
                </form>
            </Paper>
        </Container>
    );
};

export default Login;
