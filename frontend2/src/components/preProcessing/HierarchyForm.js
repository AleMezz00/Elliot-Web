import React, { useState,useEffect } from 'react';
import '../../styles/preProcessing/HierarchyForm.css'
import Form from './Form';

function HierarchyForm(props){

  const[seed,setSeed]=useState(42);

  const change = ()=>{
    props.setStep(5);
  }

  const hierarchySubmit=()=>{
        let form=document.getElementById('form_data');
         if(form.checkValidity()){
           document.getElementsById('hierarchy_button').style.display='none';
           fetch('/api/v1/preprocessing-json', {
             method: 'POST',
             body: new FormData(form)
         }).then(res => res.json())
         .then(data => {
             document.getElementById('downloadHi').setAttribute('href', `/api/v1/preprocessing/download/${data}`);
             document.getElementById('loadingHi').setAttribute('hidden', true);
             document.getElementById('resultHi').setAttribute('hidden',false);
         });
         document.getElementById('loadingHi').setAttribute('hidden', false);
     
         }else document.getElementById('disclaimerHi').innerHTML='Fill required fields';
       }

       if (props.step !== 5){ 
    return(
        <div className='hier_container'>
            <form action="" method="POST" encType="multipart/form-data" id="form_data">
              <input type='text' name='loading_strategy' id='loading_strategy' value={props.strategy} hidden/>
               <div className='hier_randSeed'>
                 <h2 className='rndSeedTitHier'>Random seed</h2>
                   <h3 className='randDescrHier'>Set a random seed for the preprocessing operations</h3>
                 <input type='number' name='random_seed' id='random_seed' className='randSeedHier' value={seed} onChange={(event)=>setSeed(event.target.value)}/>
                 <h2 className='descrHier'>Input files of a root folder (in .zip) for a hierarchy strategy</h2>
                 <div className='hier_sect'>
                  <input type='file'name="dataset_folder" id="dataset_folder" className="hierFile" accept=".zip" required/>
                 </div>
                </div>     
                <button className='btt_change_hier' onClick={change}> Change strategy</button>
                <input type='submit'  value="Pre-process with hierarchy strategy" className="btt_run_hier" onClick={hierarchySubmit}/>
               </form>
             

            <span id='disclaimerHi'></span>

            <div id='loadingHi' hidden>
               <div className="lds-ripple"></div>
                 <span className='load_info'> Data preprocessing in progress</span>
             </div> 

            <div id='resultHi' hidden>
               <h1 className='completedTitHi'>Preprocessing completed</h1>
                  <p className='compl_contentHi'>Your dataset has been successfully processed!
                    <a href='' className="download_linkHi" id="downloadHi">Download ZIP</a>
                  </p>
             </div> 

        </div>
    );
  }

    if(props.step===5){
      return(
        <Form/>
      );
    }
}

export default HierarchyForm;