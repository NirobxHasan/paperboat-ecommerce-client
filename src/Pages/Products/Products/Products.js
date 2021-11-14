import { Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import product_img from '../../../images/products/2004.jpg';
import Product from '../Product/Product';

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then((res) => res.json())
            .then((data) => setProducts(data));
    }, []);
    return (
        <Container sx={{ mt: 5 }}>
            <Grid container spacing={2}>
                {products.map((product) => (
                    <Product key={product._id} product={product} />
                ))}
            </Grid>
        </Container>
    );
};

export default Products;
