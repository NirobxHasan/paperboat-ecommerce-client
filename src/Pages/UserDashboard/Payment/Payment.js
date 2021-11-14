import { Typography } from '@mui/material';
import React from 'react';

const Payment = () => {
    return (
        <div>
            <Typography
                sx={{ textAlign: 'center', my: 5, fontWeight: 600 }}
                variant="h4"
                gutterBottom
                component="div"
            >
                Payment Method comming soon!!
            </Typography>
        </div>
    );
};

export default Payment;
