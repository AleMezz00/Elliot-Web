import React from 'react';
import '../../styles/evaluation/Cutoffs.css'

function Cutoffs(){
    
        const cutoffAdd=(event)=>{
            let nCutoffs=document.getElementById('n_k').value;
          if(nCutoffs>0){
            const box= document.getElementById('cutoffField');
            while(box.firstChild){box.removeChild(box.lastChild);}
            for(let i=0;i<nCutoffs;i++){
                let number=i+1;
                const field=document.createElement('input');
                const placeholder='cutoff '+number+' value';
                const space=document.createElement('br');
                field.setAttribute('type','number');
                field.setAttribute('name','c_value');
                field.className='c_value';
                field.setAttribute('placeholder',placeholder);
                field.required=true;
                box.appendChild(field);
                box.appendChild(space);
            }
          }
        }

        const cutoffReset=()=>{
            const box=document.getElementById('cutoffField');
            while(box.firstChild){box.removeChild(box.lastChild)};
            document.getElementById('n_k').value='';
        }


    return(
        <>
         <h2 className='cutTit'>Cutoffs</h2>
          <div className='cut_div'>
            <input type='number' id='n_k' name='n_k' min='1' placeholder='Input number of cutoffs'
               required className='nInput'/>
            </div>     
            <div className='btt_div_cut'>  
            <button className='cutoff_Add' onClick={cutoffAdd}>Add field</button>
            <button className='cutoff_Reset' onClick={cutoffReset}>Reset fields</button> 
            </div>       
          
        </>
    );
}

export default Cutoffs;