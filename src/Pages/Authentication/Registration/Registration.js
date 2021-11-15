import {
    Alert,
    Button,
    Container,
    Paper,
    TextField,
    Typography
} from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { useHistory, useLocation } from 'react-router-dom';
const Registration = () => {
    const [loginInfo, setLoginInfo] = useState({});
    const [error, setError] = useState('');
    const history = useHistory();
    const location = useLocation();
    const { googleLogin, authError, register } = useAuth();

    const handleFromChange = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const info = { ...loginInfo };
        info[field] = value;
        setLoginInfo(info);
        console.log(loginInfo);
    };
    const handleLoginForm = (e) => {
        setError('');
        if (loginInfo.password !== loginInfo.password2) {
            setError("Password doesn't match!");
            return;
        }
        register(loginInfo.email, loginInfo.password, loginInfo.name, history);

        e.preventDefault();
    };
    return (
        <Container
            sx={{
                height: '100vh',
                display: 'flex',
                justifyContent: 'center',
                flexWrap: 'wrap'
            }}
        >
            <Paper
                sx={{
                    p: 5,
                    my: 5,
                    maxWidth: 'md',
                    width: 400,
                    height: '600px',
                    textAlign: 'center'
                }}
                elevation={1}
            >
                <Typography variant="h5" gutterBottom component="div">
                    Create a New Account
                </Typography>
                <form onSubmit={handleLoginForm}>
                    <TextField
                        sx={{ width: '90%' }}
                        id="standard-basic"
                        label="Your Name"
                        type="text"
                        variant="standard"
                        color="success"
                        name="name"
                        onChange={handleFromChange}
                    />
                    <br />
                    <TextField
                        sx={{ width: '90%' }}
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
                        sx={{ width: '90%' }}
                        id="standard-basic"
                        label="Password"
                        type="password"
                        variant="standard"
                        color="success"
                        name="password"
                        onChange={handleFromChange}
                    />
                    <br />
                    <TextField
                        sx={{ width: '90%' }}
                        id="standard-basic"
                        label="Retype Password"
                        type="password"
                        variant="standard"
                        color="success"
                        name="password2"
                        onChange={handleFromChange}
                    />
                    <br />

                    <Box sx={{ my: 2 }}>
                        <Button
                            type="submit"
                            color="success"
                            variant="contained"
                        >
                            Register
                        </Button>
                    </Box>
                    {error && <Alert severity="error">{error}</Alert>}
                    {authError && <Alert severity="error">{authError}</Alert>}

                    <Button
                        onClick={() => googleLogin(history, location)}
                        sx={{ my: 2 }}
                        color="success"
                        variant="outlined"
                    >
                        Google Login
                    </Button>

                    <Box>
                        <Link style={{ textDecoration: 'none' }} to="/login">
                            <Button variant="text">
                                Already have a account? Please Login
                            </Button>
                        </Link>
                    </Box>
                </form>
            </Paper>
        </Container>
    );
};

export default Registration;
