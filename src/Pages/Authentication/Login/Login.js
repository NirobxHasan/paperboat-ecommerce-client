import {
    Button,
    Container,
    Grid,
    Paper,
    TextField,
    Typography
} from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    const [loginInfo, setLoginInfo] = useState({});
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleFromChange = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const info = { ...loginInfo };
        info[field] = value;
        setLoginInfo(info);
        console.log(loginInfo);
    };
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
                    p: 3,
                    my: 5,
                    maxWidth: 'md',
                    width: 400,
                    height: 450,
                    textAlign: 'center'
                }}
                elevation={1}
            >
                <Typography variant="h5" gutterBottom component="div">
                    Please Login
                </Typography>
                <form onSubmit={handleLoginForm}>
                    <TextField
                        sx={{ my: 2, width: '90%' }}
                        id="standard-basic"
                        label="Email"
                        type="email"
                        variant="standard"
                        color="success"
                        name="email"
                        onChange={handleFromChange}
                    />
                    <br />
                    <TextField
                        sx={{ mb: 2, width: '90%' }}
                        id="standard-basic"
                        label="Password"
                        type="password"
                        variant="standard"
                        color="success"
                        name="password"
                        onChange={handleFromChange}
                    />
                    <br />

                    <Box>
                        <Button
                            type="submit"
                            color="success"
                            variant="contained"
                        >
                            LOGIN
                        </Button>
                    </Box>

                    <Button sx={{ my: 3 }} color="success" variant="outlined">
                        Google Login
                    </Button>

                    <Box>
                        <Link
                            style={{ textDecoration: 'none' }}
                            to="/registration"
                        >
                            <Button variant="text">Create a new account</Button>
                        </Link>
                    </Box>
                </form>
            </Paper>
        </Container>
    );
};

export default Login;
