import React from 'react';
import Navbar from '../components/Navbar.js';
import Form from '../components/preProcessing/Form.js';
import Footer from '../components/Footer.js';
import '../styles/preProcessing/PreProcessing.css';

function PreProcessing(){
    return(
        <>
        <Navbar preProc='preProc1' rec='rec0' evl='evl0'/>
        <div className='container' >
            <Form />
        </div>
        <Footer />
        </>

    );
}

export default PreProcessing;