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

const Product = (props) => {
    const theme = createTheme({
        palette: {
            primary: {
                main: '#212121'
            },
            secondary: {
                main: '#fff59d'
            }
        }
    });
    const { product_name, img, price } = props.product;

    return (
        <Grid item xs={12} sm={6} md={4} lg={4}>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia component="img" height="258" image={img} />
                <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                        {product_name}
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
                    sx={{ display: 'flex', flexDirection: 'row-reverse' }}
                >
                    <Button variant="outlined" size="small" theme={theme}>
                        Buy Now
                    </Button>
                </CardActions>
            </Card>
        </Grid>
    );
};

export default Product;
