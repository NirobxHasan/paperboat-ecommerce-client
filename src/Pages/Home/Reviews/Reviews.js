import { Container, Grid, Paper, Rating, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('https://ancient-mesa-81170.herokuapp.com/reviews')
            .then((res) => res.json())
            .then((data) => setReviews(data));
    }, []);
    return (
        <Container>
            <Typography
                sx={{ textAlign: 'center', my: 5, fontWeight: 600 }}
                variant="h4"
                gutterBottom
                component="div"
            >
                Reviews
            </Typography>
            <Grid container spacing={2}>
                {reviews.map((review) => (
                    <Grid key={review._id} item xs={12} sm={6} md={4} lg={3}>
                        <Paper elevation={1} sx={{ p: 3, textAlign: 'center' }}>
                            <Typography
                                variant="h6"
                                gutterBottom
                                component="div"
                                sx={{ color: '#519071', fontWeight: 600 }}
                            >
                                {review.UserName}
                            </Typography>
                            <Typography
                                sx={{ my: 2 }}
                                variant="body2"
                                gutterBottom
                            >
                                "{review.review}"
                            </Typography>

                            <Rating
                                name="read-only"
                                precision={0.5}
                                value={review.rating}
                                readOnly
                            />
                        </Paper>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default Reviews;
