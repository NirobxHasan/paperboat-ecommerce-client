import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import ManageOrder from '../ManageOrder/ManageOrder';
import AddReview from '../AddReview/AddReview';
import { Switch, Route, Link, useRouteMatch } from 'react-router-dom';
import Payment from '../Payment/Payment';
import useAuth from '../../../hooks/useAuth';
import { Button } from '@mui/material';
import AddProduct from '../AddProduct/AddProduct';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import ManageProducts from '../ManageProducts/ManageProducts';
import ManageAllOrders from '../ManageAllOrders/ManageAllOrders';
const drawerWidth = 200;

function UserDashboard(props) {
    const { admin, logOut } = useAuth();
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };
    const { path, url } = useRouteMatch();
    const style = {
        textDecoration: 'none',
        fontSize: '1.0rem',
        color: 'green'
    };
    const drawer = (
        <div>
            <Toolbar />
            <Divider />
            <List>
                {!admin && (
                    <Box>
                        <ListItem button>
                            <Link style={style} to={`${url}`}>
                                My Order
                            </Link>
                        </ListItem>
                        <Divider />
                        <ListItem button>
                            <Link style={style} to={`${url}/addreview`}>
                                Add Review
                            </Link>
                        </ListItem>
                        <Divider />
                        <ListItem button>
                            <Link style={style} to={`${url}/payment`}>
                                Payment
                            </Link>
                        </ListItem>
                        <Divider />
                    </Box>
                )}

                {/* admin section */}

                {admin && (
                    <Box>
                        <ListItem button>
                            <Link style={style} to={`${url}/manageAllOrder`}>
                                Manage All orders
                            </Link>
                        </ListItem>
                        <Divider />
                        <ListItem button>
                            <Link style={style} to={`${url}/addproduct`}>
                                Add Product
                            </Link>
                        </ListItem>
                        <Divider />
                        <ListItem button>
                            <Link style={style} to={`${url}/manageproduct`}>
                                Manage Products
                            </Link>
                        </ListItem>
                        <Divider />
                        <ListItem button>
                            <Link style={style} to={`${url}/makeadmin`}>
                                Create admin
                            </Link>
                        </ListItem>
                        <Divider />
                    </Box>
                )}

                <ListItem button>
                    <Link style={style} to="/">
                        Home
                    </Link>
                </ListItem>
                <Divider />
                <ListItem button>
                    <Button
                        sx={{ fontSize: '1.0rem' }}
                        onClick={logOut}
                        color="error"
                        variant="text"
                    >
                        Logout
                    </Button>
                </ListItem>
                <Divider />
            </List>
        </div>
    );

    const container =
        window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` }
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        Dashboard
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': {
                            boxSizing: 'border-box',
                            width: drawerWidth
                        }
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': {
                            boxSizing: 'border-box',
                            width: drawerWidth
                        }
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    p: 3,
                    width: { sm: `calc(100% - ${drawerWidth}px)` }
                }}
            >
                {/* ----main function---- */}
                {/* <ManageOrder /> */}

                <Switch>
                    <Route exact path={path}>
                        {admin ? <ManageAllOrders /> : <ManageOrder />}
                    </Route>
                    <Route path={`${path}/addreview`}>
                        <AddReview />
                    </Route>
                    <Route path={`${path}/payment`}>
                        <Payment />
                    </Route>
                    {admin && (
                        <Box>
                            <Route path={`${path}/manageAllOrder`}>
                                <ManageAllOrders />
                            </Route>
                            <Route path={`${path}/addproduct`}>
                                <AddProduct />
                            </Route>
                            <Route path={`${path}/makeadmin`}>
                                <MakeAdmin />
                            </Route>
                            <Route path={`${path}/manageproduct`}>
                                <ManageProducts />
                            </Route>
                        </Box>
                    )}
                </Switch>
            </Box>
        </Box>
    );
}

UserDashboard.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func
};

export default UserDashboard;
