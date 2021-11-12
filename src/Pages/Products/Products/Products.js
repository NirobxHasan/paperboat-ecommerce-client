import { Container, Grid, Typography } from '@mui/material';
import React from 'react';
import product_img from '../../../images/products/2004.jpg';
import Product from '../Product/Product';
const products = [
    {
        product_name: 'Real Madrid Trophies wall clock',
        img: product_img,
        price: '690'
    },
    {
        product_name: 'Real Madrid Trophies wall clock',
        img: product_img,
        price: '690'
    },
    {
        product_name: 'Real Madrid Trophies wall clock',
        img: product_img,
        price: '690'
    },
    {
        product_name: 'Real Madrid Trophies wall clock',
        img: product_img,
        price: '690'
    },
    {
        product_name: 'Real Madrid Trophies wall clock',
        img: product_img,
        price: '690'
    },
    {
        product_name: 'Real Madrid Trophies wall clock',
        img: product_img,
        price: '690'
    }
];
const Products = () => {
    return (
        <Container sx={{ mt: 5 }}>
            <Grid container spacing={2}>
                {products.map((product) => (
                    <Product product={product} />
                ))}
            </Grid>
        </Container>
    );
};

export default Products;
