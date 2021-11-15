import { Container, Paper } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { useForm } from 'react-hook-form';
const axios = require('axios');
const AddProduct = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors }
    } = useForm();

    const onSubmit = (data) => {
        axios.post('http://localhost:5000/products/', data).then((res) => {
            if (res.data.insertedId) {
                alert('Successfully added product!');
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
            <Paper
                sx={{
                    mt: 3,

                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    p: 3
                }}
            >
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input
                        placeholder="Title"
                        style={inputStyle}
                        {...register('title', {
                            required: true
                        })}
                    />
                    <input
                        placeholder="Image Link "
                        style={inputStyle}
                        {...register('img', { required: true })}
                    />
                    <input
                        placeholder="Price"
                        style={inputStyle}
                        type="number"
                        {...register('price', { required: true })}
                    />
                    <input
                        placeholder="Description"
                        style={inputStyle}
                        {...register('description', { required: true })}
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
        </Container>
    );
};

export default AddProduct;
