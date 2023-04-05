import React from 'react';
import '../styles/Navbar.css';
import {Link} from 'react-router-dom';
import { Box, Divider, ListItemButton, Typography } from '@mui/material';

function Navbar(props){

   return(

    <Box className='nav_container'>
        <Link className='link' to='/'>
         <Typography className='title'variant='h2' 
                   sx={{
                    textAlign:'center',
                    ml:2,
                    }}> Elliot Web</Typography></Link>
                    
                    <Divider orientation='vertical'></Divider>
                    
                    <Box sx={{width:'260px',ml:10}}>
                     <ListItemButton>
                        <Link className='link' to='/preprocessing' >Data pre-processing</Link>
                     </ListItemButton>
                    </Box>


                    <Box sx={{width:'220px'}}>
                     <ListItemButton>
                         <Link  className='link' to='/recommendation' >Recommendation</Link>
                     </ListItemButton>
                    </Box>
                    

                    <Box sx={{width:'145px', mr:30}}>
                      <ListItemButton>
                        <Link className='link' to='/evaluation' >Evaluation</Link>
                      </ListItemButton> 
                    </Box>
        
      </Box>
 
   );
}

export default Navbar;