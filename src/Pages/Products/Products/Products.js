import { Container, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';

import Product from '../Product/Product';

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://ancient-mesa-81170.herokuapp.com/products')
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
