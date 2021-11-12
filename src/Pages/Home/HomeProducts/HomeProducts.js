import { Button, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import product_img from '../../../images/products/2004.jpg';
import Product from '../../Products/Product/Product';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
const products = [
    {
        id: 1,
        product_name: 'Real Madrid Trophies wall clock',
        img: product_img,
        price: '690'
    },
    {
        id: 2,
        product_name: 'Real Madrid Trophies wall clock',
        img: product_img,
        price: '690'
    },
    {
        id: 3,
        product_name: 'Real Madrid Trophies wall clock',
        img: product_img,
        price: '690'
    },
    {
        id: 4,
        product_name: 'Real Madrid Trophies wall clock',
        img: product_img,
        price: '690'
    },
    {
        id: 5,
        product_name: 'Real Madrid Trophies wall clock',
        img: product_img,
        price: '690'
    },
    {
        id: 6,
        product_name: 'Real Madrid Trophies wall clock',
        img: product_img,
        price: '690'
    },
    {
        id: 7,
        product_name: 'Real Madrid Trophies wall clock',
        img: product_img,
        price: '690'
    },
    {
        id: 8,
        product_name: 'Real Madrid Trophies wall clock',
        img: product_img,
        price: '690'
    },
    {
        id: 9,
        product_name: 'Real Madrid Trophies wall clock',
        img: product_img,
        price: '690'
    },
    {
        id: 10,
        product_name: 'Real Madrid Trophies wall clock',
        img: product_img,
        price: '690'
    }
];

const Products = () => {
    const useStyles = makeStyles({
        exploreBtn: {
            textDecoration: 'none'
        }
    });
    const { exploreBtn } = useStyles();
    return (
        <Container sx={{ mt: 5 }}>
            <Typography
                sx={{ textAlign: 'center', my: 5, fontWeight: 600 }}
                variant="h4"
                gutterBottom
                component="div"
            >
                Our Clock
            </Typography>
            <Grid container spacing={2}>
                {products.slice(0, 6).map((product) => (
                    <Product product={product} />
                ))}
            </Grid>
            <Box sx={{ textAlign: 'right', my: 2 }}>
                <Link className={exploreBtn} to="/products">
                    <Button
                        sx={{
                            fontWeight: '600',
                            fontSize: '1.0rem',
                            color: '#424242'
                        }}
                        variant="text"
                    >
                        Explore more>>>{' '}
                    </Button>
                </Link>
            </Box>
        </Container>
    );
};

export default Products;
