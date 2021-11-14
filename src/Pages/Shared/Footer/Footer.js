import { Grid, TextField, Typography, createTheme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/system';
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    const useStyles = makeStyles({
        footerLink: {
            color: '#9e9e9e',
            textDecoration: 'none',
            '&:hover': {
                color: '#eeeeee'
            }
        }
    });
    const { footerLink, input } = useStyles();

    return (
        <Box
            sx={{
                mt: 8,
                backgroundColor: '#212121',
                color: '#ffff',
                mt: 8
            }}
        >
            <Grid container spacing={2} sx={{ p: 5 }}>
                <Grid item xs={12} sm={6} md={3} lg={3}>
                    <Typography
                        sx={{
                            my: 3,
                            fontWeight: 600,
                            color: '#519071',
                            textTransform: 'uppercase'
                        }}
                        variant="h4"
                        component="div"
                        gutterBottom
                    >
                        paperboat
                    </Typography>
                    <Typography variant="body2" gutterBottom>
                        PHONE: Toll Free (123) 456-7890
                    </Typography>
                    <Typography variant="body2" gutterBottom>
                        EMAIL: thenirobhasan@gmail.com
                    </Typography>
                    <Typography variant="body2" gutterBottom>
                        ADDRESS: 123 Street Name, City, England
                    </Typography>
                    <Typography variant="body2" gutterBottom>
                        WORKING DAYS:Mon - Sun
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={6} md={3} lg={3}>
                    <Typography variant="h6" component="div" gutterBottom>
                        About Us
                    </Typography>
                    <Link className={footerLink} to="/">
                        About us
                    </Link>
                    <br />
                    <Link className={footerLink} to="/">
                        Order History
                    </Link>
                    <br />
                    <Link className={footerLink} to="/">
                        Returns
                    </Link>
                    <br />
                    <Link className={footerLink} to="/">
                        Custom Service
                    </Link>
                    <br />
                    <Link className={footerLink} to="/">
                        Terms & Condition
                    </Link>
                </Grid>
                <Grid item xs={12} sm={6} md={3} lg={3}>
                    <Typography variant="h6" component="div" gutterBottom>
                        Customer Service
                    </Typography>
                    <Link className={footerLink} to="/">
                        Payment Methods
                    </Link>
                    <br />
                    <Link className={footerLink} to="/">
                        Money-back Guarantee!
                    </Link>
                    <br />
                    <Link className={footerLink} to="/">
                        Returns
                    </Link>
                    <br />
                    <Link className={footerLink} to="/">
                        Custom Service
                    </Link>
                    <br />
                    <Link className={footerLink} to="/">
                        Terms & Condition
                    </Link>
                </Grid>
                <Grid item xs={12} sm={6} md={3} lg={3}>
                    <Typography
                        sx={{
                            my: 3,
                            fontWeight: 600,

                            textTransform: 'uppercase'
                        }}
                        variant="h6"
                        component="div"
                        gutterBottom
                    >
                        Subscribe
                    </Typography>
                    <TextField
                        label="Your Email"
                        variant="filled"
                        color="success"
                        focused
                    />
                </Grid>
            </Grid>
        </Box>
    );
};

export default Footer;
