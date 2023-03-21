import React from 'react';
import Navbar from '../components/Navbar.js';
import Footer from '../components/Footer.js';
import RecForm from '../components/recommendation/RecForm.js';
import '../styles/recommendation/Recommendation.css';

function Recommendation(){
    return(
        <>
        <Navbar preProc='preProc0' rec='rec1' evl='evl0'/>
        <div className='recFormContainer'>
            <RecForm />
        </div>
        <Footer />
        </>

    );
}

export default Recommendation;