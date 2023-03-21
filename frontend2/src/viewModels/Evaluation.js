import React from "react";
import Navabar from '../components/Navbar.js';
import Footer from '../components/Footer.js';
import EvForm from '../components/evaluation/EvForm.js'
import '../styles/evaluation/Evaluation.css';

function Evaluation(){
    return(
        <>
        <Navabar preProc='preProc0' rec='rec0' evl='evl1'/>
        <div className="div_Eva"><EvForm /></div>
        <Footer />
        </>

    );
}

export default Evaluation;