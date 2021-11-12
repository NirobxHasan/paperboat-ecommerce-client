import { Grid, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/system';
import React from 'react';
import banner from '../../../images/banner/img01.jpg'
import img02 from '../../../images/banner/img02.jpg'


const HeaderBanner = () => {
    const useStyles = makeStyles({
        mainBanner:{
            background:`url(${banner}),linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(123,129,131,0.896796218487395) 33%, rgba(200,200,200,0.29175420168067223) 100%, rgba(208,251,255,1) 100%)`,
            backgroundBlendMode:'overlay',
            backgroundSize:'cover',
            padding: '25px',
            height:500,
            margin:'10px',
            display: 'flex',
            flexWrap: 'wrap',
            alignContent: 'flex-end',
            color:'#ffff'
            
        },
        subBox01:{
            background:`url(${img02}),linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(123,129,131,0.896796218487395) 33%, rgba(200,200,200,0.29175420168067223) 100%, rgba(208,251,255,1) 100%)`,
            backgroundBlendMode:'overlay',
            backgroundSize:'cover',
            margin:'10px',
            height: 245
        },
        subBox02:{
            background:`url(${img02}),linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(123,129,131,0.896796218487395) 33%, rgba(200,200,200,0.29175420168067223) 100%, rgba(208,251,255,1) 100%)`,
            backgroundBlendMode:'overlay',
            backgroundSize:'cover',
            margin:'10px',
            height: 245
        }


    })
    
    
    const {mainBanner,subBox01,subBox02}= useStyles();
    return (
        <div>
            <Grid container>
            <Grid  item xs={12} sm={12} md={8} lg={8}>
                <Box className={mainBanner}>
                <Box sx={{mb:8}}>
                    <Typography   variant="h3" gutterBottom component="div">
                        Lorem ipsum dolor sit amet.
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                        blanditiis tenetur unde suscipit.
                    </Typography>
                </Box>    
                
                </Box>
                
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={4}>
                <Box className={subBox01}>01</Box>
                <Box className={subBox02}>01</Box>
                
            </Grid>
            
            </Grid>
        </div>
    );
};

export default HeaderBanner;