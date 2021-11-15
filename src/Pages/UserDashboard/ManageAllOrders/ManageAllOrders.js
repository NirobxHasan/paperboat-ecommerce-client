import { Button, Grid, Paper, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router';
const axios = require('axios');
const ManageAllOrders = () => {
    const [orders, setOrders] = useState([]);
    const [shipped, setShipped] = useState(false);
    const history = useHistory();
    const location = useLocation();
    useEffect(() => {
        fetch('http://localhost:5000/allOrders')
            .then((res) => res.json())
            .then((data) => setOrders(data));
    }, []);

    const handleDelete = (id) => {
        const result = window.confirm('Are you sure to cancel this order?');
        if (!result) {
            return;
        }

        axios.delete(`http://localhost:5000/orders/${id}`).then((res) => {
            console.log(res);
            if (res.data.deletedCount === 1) {
                const restOrder = orders.filter(
                    (product) => product._id !== id
                );
                setOrders(restOrder);
            }
        });
    };

    const handleShipping = (id) => {
        fetch(`http://localhost:5000/orders/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ status: 'shipped' })
        })
            .then((res) => res.json())
            .then((data) => {});
        window.location.reload();
    };
    return (
        <div>
            <Typography variant="h5" gutterBottom component="div">
                Manage all orders
            </Typography>
            {orders.map((order) => (
                <Paper
                    key={order._id}
                    sx={
                        {
                            // display: 'flex',
                            // justifyContent: 'space-around',
                            // flexWrap: 'wrap'
                        }
                    }
                >
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={12} md={4} lg={4}>
                            <Box>
                                <img width="150" src={order.img} alt="" />
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={12} md={4} lg={4}>
                            <Box sx={{ p: 3 }}>
                                <Typography
                                    variant="h6"
                                    gutterBottom
                                    component="div"
                                >
                                    {order.product_title}
                                </Typography>
                                <Typography
                                    variant="subtitle1"
                                    gutterBottom
                                    component="div"
                                    sx={{ fontWeight: 'bold' }}
                                >
                                    Price: {order.price}
                                </Typography>
                                <Typography
                                    variant="subtitle1"
                                    gutterBottom
                                    component="div"
                                    sx={{ fontWeight: 'bold' }}
                                >
                                    Order by: {order.Name}
                                </Typography>
                                <Typography
                                    variant="button"
                                    display="block"
                                    gutterBottom
                                >
                                    status: {order.status}
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid
                            sx={{
                                display: 'flex',
                                alignItems: 'center'
                            }}
                            item
                            xs={12}
                            sm={12}
                            md={4}
                            lg={4}
                        >
                            <Box sx={{ m: 2 }}>
                                <Button
                                    sx={{ alignSelf: 'center', mr: 2 }}
                                    onClick={() => handleDelete(order._id)}
                                    variant="contained"
                                    color="error"
                                >
                                    Cancel
                                </Button>
                                {order.status !== 'shipped' ? (
                                    <Button
                                        sx={{ alignSelf: 'center' }}
                                        onClick={() =>
                                            handleShipping(order._id)
                                        }
                                        variant="contained"
                                        color="error"
                                    >
                                        shipped
                                    </Button>
                                ) : (
                                    ''
                                )}
                            </Box>
                        </Grid>
                    </Grid>
                </Paper>
            ))}
        </div>
    );
};

export default ManageAllOrders;
