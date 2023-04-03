import React from 'react';
import Navbar from '../components/Navbar.js';
import Footer from '../components/Footer.js';
import imgPath from '../images/elliot_img.png'
import '../styles/Home.css'
import {Container, Box, Typography, ImageList} from '@mui/material';

function Home(){
    return(
        <>
         <Navbar preProc='preProc0' rec='rec0' evl='evl0'/>
         <Box className='main_container'>
            <Typography variant='h3' sx={{textAlign:'center',mt:5,color:'rgb(0, 179, 255)',textShadow:".05em .05em 0 rgb(60, 70, 75)"}} className='homeTit'
            >What is Elliot?</Typography>

            <Typography variant='h6' sx={{textAlign:'center',mx:30, mt:4,mb:4}} className='introduction'>
               Elliot is a comprehensive recommendation framework that analyzes the recommendation problem
                 from the researcher’s perspective. It conducts a whole experiment, from dataset loading to
                 results gathering. The core idea is to feed the system with a simple and straightforward 
                 configuration file that drives the framework through the experimental setting choices. 
                 Elliot untangles the complexity of combining splitting strategies, hyperparameter model optimization,
                 model training, and the generation of reports of the experimental results.
               
            </Typography>

               <img src={imgPath} className='img' alt='' />
            
            <Typography variant='body1' sx={{textAlign:'center',mt:1,mb:7}} className='moreInfo'>
               Visit the official web-site of <a href='https://elliot.readthedocs.io/en/latest/#'>Elliot framework</a> 
               to get more info.
            </Typography>

         </Box>
         <Footer />
        </>
 
    );
}

export default Home;