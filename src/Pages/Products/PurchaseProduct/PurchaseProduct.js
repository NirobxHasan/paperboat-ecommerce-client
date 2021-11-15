import { Container, Grid, Paper, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';
const axios = require('axios');
const PurchaseProduct = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({});
    const { user } = useAuth();
    const { register, handleSubmit } = useForm();
    const history = useHistory();
    useEffect(() => {
        fetch(`https://ancient-mesa-81170.herokuapp.com/products/${id}`)
            .then((res) => res.json())
            .then((data) => setProduct(data));
    }, []);

    const onSubmit = (data) => {
        data.product_title = product.title;

        data.price = product.price;
        data.img = product.img;
        data.status = 'Pendding';
        console.log(data);

        axios
            .post('https://ancient-mesa-81170.herokuapp.com/orders/', data)
            .then((res) => {
                if (res.data.insertedId) {
                    alert('Successfully added order!');
                    history.push('/home');
                }
            });
    };
    const inputStyle = {
        display: 'block',
        margin: '15px 5px',
        padding: '15px 5px',
        fontSize: '1.2rem'
    };
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={12} md={6} lg={6}>
                    <Box sx={{ m: 2, maxWidth: 'xs' }}>
                        <img
                            src={product.img}
                            style={{
                                height: '100%',
                                width: '100%',
                                borderRadius: '18px'
                            }}
                            alt=""
                        />
                    </Box>
                </Grid>
                <Grid
                    sx={{
                        mt: 3,

                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                    item
                    xs={12}
                    sm={12}
                    md={6}
                    lg={6}
                >
                    <Paper sx={{ p: 5, maxWidth: 'sm' }}>
                        <Typography variant="h6" gutterBottom component="div">
                            {product.title}
                        </Typography>
                        <Typography
                            sx={{ my: 3 }}
                            variant="subtitle1"
                            gutterBottom
                            component="div"
                        >
                            Price {product.price}
                        </Typography>

                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input
                                style={inputStyle}
                                value={user.displayName}
                                {...register('Name', {
                                    required: true
                                })}
                            />
                            <input
                                style={inputStyle}
                                value={user.email}
                                {...register('email', {
                                    required: true
                                })}
                            />

                            <input
                                style={inputStyle}
                                placeholder="your phone number"
                                type="number"
                                {...register('phone_number', {
                                    required: true
                                })}
                            />
                            <input
                                style={inputStyle}
                                placeholder="your address"
                                type="text"
                                {...register('address', { required: true })}
                            />
                            <Box
                                sx={{
                                    mt: 2,
                                    display: 'flex',
                                    justifyContent: 'center'
                                }}
                            >
                                <input
                                    style={{
                                        backgroundColor: '#519071',
                                        padding: '10px 15px',
                                        color: '#ffff',
                                        border: 0
                                    }}
                                    type="submit"
                                />
                            </Box>
                        </form>
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    );
};

export default PurchaseProduct;
