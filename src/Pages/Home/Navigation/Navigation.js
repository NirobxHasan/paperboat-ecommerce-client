import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
import { useTheme } from '@mui/material';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

const Navigation = () => {
    const theme = useTheme();
    const useStyles = makeStyles({
        navItem: {
            color: 'white',
            textDecoration: 'none',
            fontSize: '1.2rem'
        },
        navIcon: {
            [theme.breakpoints.up('sm')]: {
                display: 'none !important'
            }
        },
        navItemContainer: {
            [theme.breakpoints.down('sm')]: {
                display: 'none !important'
            }
        },
        navLogo: {
            [theme.breakpoints.down('sm')]: {
                textAlign: 'right'
            }
        },
        mobileNavItem: {
            textDecoration: 'none',
            color: 'black'
        }
    });
    const { navItem, navIcon, navItemContainer, navLogo, mobileNavItem } =
        useStyles();

    const [state, setState] = React.useState(false);

    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static" sx={{ backgroundColor: '#212121' }}>
                    <Toolbar>
                        <IconButton
                            className={navIcon}
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                            onClick={() => setState(true)}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography
                            className={navLogo}
                            variant="h5"
                            component="div"
                            sx={{ flexGrow: 1 }}
                        >
                            Paperboat
                        </Typography>
                        <Box className={navItemContainer}>
                            <Link className={navItem} to="/">
                                <Button color="inherit">Home</Button>
                            </Link>
                            <Link className={navItem} to="/products">
                                <Button color="inherit">Products</Button>
                            </Link>
                            <Link className={navItem} to="/about">
                                <Button color="inherit">About</Button>
                            </Link>
                            <Link className={navItem} to="/about">
                                <Button color="inherit">About</Button>
                            </Link>
                        </Box>
                    </Toolbar>
                </AppBar>
            </Box>

            <div>
                <React.Fragment>
                    <Drawer open={state} onClose={() => setState(false)}>
                        <Box sx={{ width: 250 }} role="presentation">
                            <List>
                                <ListItem button>
                                    <ListItemText>
                                        <Link
                                            className={mobileNavItem}
                                            to="/home"
                                        >
                                            Home
                                        </Link>
                                    </ListItemText>
                                </ListItem>
                                <Divider />
                                <ListItem button>
                                    <ListItemText>
                                        <Link
                                            className={mobileNavItem}
                                            to="/products"
                                        >
                                            Products
                                        </Link>
                                    </ListItemText>
                                </ListItem>
                                <Divider />
                                <ListItem button>
                                    <ListItemText>
                                        <Link
                                            className={mobileNavItem}
                                            to="/about"
                                        >
                                            About
                                        </Link>
                                    </ListItemText>
                                </ListItem>
                            </List>
                        </Box>
                    </Drawer>
                </React.Fragment>
            </div>
        </>
    );
};

export default Navigation;
