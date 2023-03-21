import React from 'react';
import '../styles/Navbar.css';
import {Link} from 'react-router-dom';

function Navbar(props){

   return(

    <div className='nav_container'>
        <Link className='link' to='/'><h1 className='title'>Elliot Web</h1></Link>
         <hr className='divide' />
          <ul className='nav_opt'>
             <li className={props.preProc} >
                <Link className='link' to="/preprocessing">Data pre-processing</Link>
             </li>
              <li className={props.rec}>
                 <Link className='link' to='/recommendation'>Recommendation</Link>
              </li>
              <li className={props.evl}>
                 <Link className='link' to='/evaluation'>Evaluation</Link>
              </li>
          </ul>  
      </div>
 
   );
}

export default Navbar;