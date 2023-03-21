import React from 'react';
import '../styles/Footer.css'

function Footer(){
    return(
        <div className='foot_container'>
          <p className='frontCredit'>
            Frontend developed by
            <a href="mailto:a.mezzina5@studenti.poliba.it" title="mail"> Alessandro Maria Mezzina </a> under the supervision
            of SisInfLab Research Group - Politecnico di Bari
          </p>
        </div>
    );
}

export default Footer;