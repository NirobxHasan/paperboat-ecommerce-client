import { Button, Grid, Paper, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
const axios = require('axios');
const ManageOrder = () => {
    const [products, setProducts] = useState([]);
    const { user } = useAuth();
    useEffect(() => {
        fetch(`http://localhost:5000/orders?email=${user.email}`)
            .then((res) => res.json())
            .then((data) => setProducts(data));
    }, []);

    const handleDelete = (id) => {
        console.log(id);
        axios.delete(`http://localhost:5000/orders/${id}`).then((res) => {
            console.log(res);
            if (res.data.deletedCount === 1) {
                const restOrder = products.filter(
                    (product) => product._id !== id
                );
                setProducts(restOrder);
            }
        });
    };
    return (
        <div>
            <Typography variant="h5" gutterBottom component="div">
                Manage your order
            </Typography>
            {products.map((product) => (
                <Paper
                    key={products._id}
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
                                <img width="150" src={product.img} alt="" />
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={12} md={4} lg={4}>
                            <Box sx={{ p: 3 }}>
                                <Typography
                                    variant="h6"
                                    gutterBottom
                                    component="div"
                                >
                                    {product.product_title}
                                </Typography>
                                <Typography
                                    variant="subtitle1"
                                    gutterBottom
                                    component="div"
                                    sx={{ fontWeight: 'bold' }}
                                >
                                    Price: {product.price}
                                </Typography>
                                <Typography
                                    variant="button"
                                    display="block"
                                    gutterBottom
                                >
                                    status: {product.status}
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
                            <Box>
                                <Button
                                    sx={{ alignSelf: 'center' }}
                                    onClick={() => handleDelete(product._id)}
                                    variant="contained"
                                    color="error"
                                >
                                    Cancel
                                </Button>
                            </Box>
                        </Grid>
                    </Grid>
                </Paper>
            ))}
        </div>
    );
};

export default ManageOrder;
