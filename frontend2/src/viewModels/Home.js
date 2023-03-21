import React from 'react';
import Navbar from '../components/Navbar.js';
import Footer from '../components/Footer.js';
import '../styles/Home.css';
import imgPath from '../images/elliot_img.png'

function Home(){
    return(
        <>
           <Navbar preProc='preProc0' rec='rec0' evl='evl0'/>
            <div className='main_container'>
               <h1 className='homeTit'>What is Elliot ?</h1>
               <img src={imgPath} className='img' alt='' />
               <p className='introduction'>
                 Elliot is a comprehensive recommendation framework that analyzes the recommendation problem
                 from the researcher’s perspective. It conducts a whole experiment, from dataset loading to
                 results gathering. The core idea is to feed the system with a simple and straightforward 
                 configuration file that drives the framework through the experimental setting choices. 
                 Elliot untangles the complexity of combining splitting strategies, hyperparameter model optimization,
                 model training, and the generation of reports of the experimental results.
               </p>
               <p className='moreInfo'>
                 Visit the official web-site of <a href='https://elliot.readthedocs.io/en/latest/#'>Elliot framework</a> 
                  to get more info.
               </p>
            </div>
           <Footer />
        </>
    );
}

export default Home;
