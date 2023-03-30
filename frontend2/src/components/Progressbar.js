import React,{useEffect} from 'react';
import '../styles/Progressbar.css';


function Progressbar(props){
   useEffect(()=>{
    if(props.initStyle==='twenty%'){
    if(props.step===0){document.getElementById('status').style.width='20%'}
    if(props.step===1){document.getElementById('status').style.width='40%'}
    else if(props.step===2){document.getElementById('status').style.width='60%'}
    else if(props.step===3){document.getElementById('status').style.width='80%'}
    else if(props.step===4){document.getElementById('status').style.width='100%'}
    }else if(props.initStyle==='fifty%'&&props.step===1){document.getElementById('status').style.width='100%'}

   });

    return(
        <div className='bar_container'>
            <div id='status' className={props.initStyle==='fifty%'&&props.step===0?'two':'five'}>
            </div>
        </div>

     );
}

export default Progressbar;