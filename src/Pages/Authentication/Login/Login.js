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
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const [loginInfo, setLoginInfo] = useState({});
    const history = useHistory();
    const location = useLocation();
    const { authError, emailLogin, googleLogin } = useAuth();
    const handleFromChange = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const info = { ...loginInfo };
        info[field] = value;
        setLoginInfo(info);
    };
    const handleLoginForm = (e) => {
        emailLogin(loginInfo.email, loginInfo.password, history, location);
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

                    <Button
                        onClick={() => googleLogin(history, location)}
                        sx={{ my: 3 }}
                        color="success"
                        variant="outlined"
                    >
                        Google Login
                    </Button>
                    {authError && <Alert severity="error">{authError}</Alert>}

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
