import {
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    createTheme,
    Grid,
    Typography
} from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const Product = (props) => {
    const theme = createTheme({
        palette: {
            primary: {
                main: '#519071'
            },
            secondary: {
                main: '#fff59d'
            }
        }
    });
    const { _id, title, img, price } = props.product;

    return (
        <Grid item xs={12} sm={6} md={4} lg={4}>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia component="img" height="258" image={img} />
                <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                        {title.slice(0, 32)}..
                    </Typography>
                    <Typography
                        variant="subtitle1"
                        gutterBottom
                        component="div"
                        sx={{ fontWeight: 500 }}
                    >
                        Price: {price}৳
                    </Typography>
                </CardContent>
                <CardActions
                    sx={{
                        display: 'flex',
                        flexDirection: 'row-reverse',
                        alignItems: 'flex-end'
                    }}
                >
                    <Link
                        style={{ textDecoration: 'none' }}
                        to={`/products/${_id}`}
                    >
                        <Button variant="outlined" size="small" theme={theme}>
                            Buy Now
                        </Button>
                    </Link>
                </CardActions>
            </Card>
        </Grid>
    );
};

export default Product;
