import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { makeStyles } from '@mui/styles';
import React from 'react';

import img04 from '../../../images/banner/img04.jpg';
import img05 from '../../../images/banner/img05.jpg';
import img06 from '../../../images/banner/img06.jpg';
import img08 from '../../../images/banner/img08.jpg';

const Category = () => {
    const useStyles = makeStyles({
        shortbanner: {
            background: `url(${img06}),linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(93,93,93,0.896796218487395) 40%, rgba(50,50,50,0.29175420168067223) 100%, rgba(33,33,33,1) 100%)`,
            backgroundBlendMode: 'overlay',
            backgroundSize: 'cover',
            padding: '25px',
            height: 160,
            margin: '10px',
            display: 'flex',
            flexWrap: 'wrap',
            alignContent: 'flex-end',
            color: '#ffff'
        },
        longbanner: {
            background: `url(${img05}),linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(93,93,93,0.896796218487395) 30%, rgba(50,50,50,0.29175420168067223) 100%, rgba(33,33,33,1) 100%)`,
            backgroundBlendMode: 'overlay',
            backgroundSize: 'cover',
            margin: '10px',
            height: 320,
            padding: '25px',
            display: 'flex',
            flexWrap: 'wrap',
            alignContent: 'flex-end',
            color: '#ffff'
        },
        shortbanner_r: {
            background: `url(${img08}),linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(93,93,93,0.896796218487395) 40%, rgba(50,50,50,0.29175420168067223) 100%, rgba(33,33,33,1) 100%)`,
            backgroundBlendMode: 'overlay',
            backgroundSize: 'cover',
            padding: '25px',
            height: 160,
            margin: '10px',
            display: 'flex',
            flexWrap: 'wrap',
            alignContent: 'flex-end',
            color: '#ffff'
        },
        longbanner_r: {
            background: `url(${img04}),linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(93,93,93,0.896796218487395) 40%, rgba(50,50,50,0.29175420168067223) 100%, rgba(33,33,33,1) 90%)`,
            backgroundBlendMode: 'overlay',
            backgroundSize: 'cover',
            margin: '10px',
            height: 320,
            padding: '25px',
            display: 'flex',
            flexWrap: 'wrap',
            alignContent: 'flex-end',
            color: '#ffff'
        }
    });

    const { shortbanner, longbanner, shortbanner_r, longbanner_r } =
        useStyles();
    return (
        <Container sx={{ mt: 5 }}>
            <Typography
                sx={{ textAlign: 'center', my: 5, fontWeight: 600 }}
                variant="h4"
                gutterBottom
                component="div"
            >
                Categories
            </Typography>
            <Grid container spacing={1}>
                <Grid item xs={12} sm={12} md={6} lg={6}>
                    <Box className={shortbanner}>
                        <Box sx={{ mb: 4 }}>
                            <Typography
                                variant="h5"
                                gutterBottom
                                component="div"
                            >
                                Musical Bands
                            </Typography>
                        </Box>
                    </Box>
                    <Box className={longbanner}>
                        <Box sx={{ mb: 4 }}>
                            <Typography
                                variant="h5"
                                gutterBottom
                                component="div"
                                sx={{ color: '#fff' }}
                            >
                                Bangla Typography
                            </Typography>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6}>
                    <Box className={longbanner_r}>
                        <Box sx={{ mb: 4 }}>
                            <Typography
                                variant="h5"
                                gutterBottom
                                component="div"
                            >
                                TV Series
                            </Typography>
                        </Box>
                    </Box>
                    <Box className={shortbanner_r}>
                        <Box sx={{ mb: 4 }}>
                            <Typography
                                variant="h5"
                                gutterBottom
                                component="div"
                            >
                                Sport Clubs
                            </Typography>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Category;
