import { Link, Typography, Box } from '@mui/material';
import React from 'react';
import '../styles/Footer.css'

function Footer(){
    return(
      <Box sx={{height:'46px',bgcolor:'lightgrey', textAlign:'center'}}>
            <Typography sx={{fontSize:'18px'}}> Frontend developed by
        <Link href="mailto:a.mezzina5@studenti.poliba.it" title="mail"> Alessandro Maria Mezzina </Link> under the supervision
            of SisInfLab Research Group - Politecnico di Bari
        </Typography>
        </Box>
    );
}

export default Footer;