import {
    Button,
    Container,
    Rating,
    TextField,
    Typography
} from '@mui/material';
import { Box } from '@mui/system';
import React, { useRef, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import StarIcon from '@mui/icons-material/Star';
import { useHistory } from 'react-router';
const axios = require('axios');
const labels = {
    0.5: 'Useless',
    1: 'Useless+',
    1.5: 'Poor',
    2: 'Poor+',
    2.5: 'Ok',
    3: 'Ok+',
    3.5: 'Good',
    4: 'Good+',
    4.5: 'Excellent',
    5: 'Excellent+'
};
const AddReview = () => {
    const { user } = useAuth();
    const [value, setValue] = useState(3);
    const [hover, setHover] = useState(-1);
    const [review, setReview] = useState('');
    const history = useHistory();

    const handleReviewField = (e) => {
        // const value = e.
    };

    const handleForm = (e) => {
        const userReview = {};
        userReview.UserName = user.displayName;
        userReview.email = user.email;
        userReview.rating = value;
        userReview.review = review;

        axios.post('http://localhost:5000/reviews/', userReview).then((res) => {
            if (res.data.insertedId) {
                alert('Successfully post review!');
                history.push('/userdashboard');
            }
        });
        setReview('');
        console.log(userReview);
        e.preventDefault();
    };
    return (
        <Container style={{ textAlign: 'center' }}>
            <Typography variant="h5" gutterBottom component="div">
                Give your review
            </Typography>
            <form onSubmit={handleForm}>
                <TextField
                    sx={{ mt: 8, width: 300 }}
                    id="outlined-multiline-static"
                    label="Review Details"
                    onChange={(e) => setReview(e.target.value)}
                    multiline
                    rows={6}
                />
                <Box
                    sx={{
                        mt: 3,
                        display: 'flex',
                        justifyContent: 'center'
                    }}
                >
                    <Box
                        sx={{
                            width: 200,
                            display: 'flex',
                            justifyContent: 'center'
                        }}
                    >
                        <Rating
                            name="hover-feedback"
                            value={value}
                            precision={0.5}
                            onChange={(event, newValue) => {
                                setValue(newValue);
                            }}
                            onChangeActive={(event, newHover) => {
                                setHover(newHover);
                            }}
                            emptyIcon={
                                <StarIcon
                                    style={{ opacity: 0.55 }}
                                    fontSize="inherit"
                                />
                            }
                        />
                        {value !== null && (
                            <Box sx={{ ml: 2 }}>
                                {labels[hover !== -1 ? hover : value]}
                            </Box>
                        )}
                    </Box>
                </Box>

                <Button type="submit" variant="contained" color="success">
                    Post
                </Button>
            </form>
        </Container>
    );
};

export default AddReview;
