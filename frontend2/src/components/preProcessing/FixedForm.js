import React, { useState, useEffect } from 'react';
import Progressbar from '../Progressbar.js';
import '../../styles/preProcessing/FixedForm.css'
import Form from './Form.js';
import { Checkbox,FormControlLabel } from '@mui/material';

function FixedForm(props){

  const[dataRec, setDataRec]=useState(false);
  const [checkData, setCheckData]= useState(false);

    const defaultRec={
        rnd_seed:42,
        binarize:false,
        
    };

    //props.setStep(0);

    const next =()=>{
      props.setStep(props.step +1 );
    }
      
    const previous=()=>{
      props.setStep(props.step-1);
    }
      const reset=()=>{
        setDataRec(false);
        props.setStep(0);
      }
      const change = ()=>{
        props.setStep(5);
      }
      
      const fixedSubmit=()=>{
          let form=document.getElementById('form_data');
             if(form.checkValidity()){
               document.getElementsByClassName('navButt').style.display='none';
               fetch('/api/v1/preprocessing-json', {
                 method: 'POST',
                 body: new FormData(form)
             }).then(res => res.json())
             .then(data => {
                 document.getElementById('downloadFix').setAttribute('href', `/api/v1/preprocessing/download/${data}`);
                 document.getElementById('loadingFix').setAttribute('hidden', true);
                 document.getElementById('resultFix').setAttribute('hidden',false);
             });
             document.getElementById('loadingFix').setAttribute('hidden', false);
         
             }else 
             document.getElementById('disclaimerFix').innerHTML='Go back and fill required fields';
           }
        
    
      if(props.step === 0){
            return(
              <div className='fixed_container'>
                <form action="" method="POST" encType="multipart/form-data" id="form_data">
                    <div className='randSeedFix_0'>
                    <div className='barra'><Progressbar step={props.step} initStyle='fifty%'/></div>
                      <h2 className='randSeedTitFix'>Random seed</h2> 
                      <h3 className='randDescFix'>set a random seed for the preparation of operations:</h3>
                      <input type='number' name='random_seed' id='random_seed' className='randValue' value={dataRec.seed} onChange={(event)=>setDataRec({...dataRec, seed:event.target.value})}/>
                      <h2 className='binarTitFix'>Dataset Binarization</h2> 
                      <div className='check_div'>
                    <FormControlLabel control={<Checkbox/>} label="Check if you want to binarize the dataset" className='check_label'
                    checked={dataRec.binarize} onChange={(event)=>setDataRec({...dataRec, binarize:event.target.checked})}/>
                    </div>
                  </div>   
                <button className='btt_next_Fix_0' onClick={next}>Next</button>
                <button className='btt_reset_Fix_0' onClick={reset}>Reset input parameters</button>
                <button className='btt_change_Fix_0' onClick={change}> Change strategy</button>
                </form> 
              </div>
            );
      }

      if (props.step===1){
        return(
          <div className='fixed_container'>
            <div className='randSeedFix_1'>
            <div className='barra'><Progressbar step={props.step} initStyle='fifty%'/></div>
              <form action="" method="POST" encType="multipart/form-data" id="form_data">
                <h1 className='fixStrategy'>Fixed strategy</h1>
                  <div className='fileSect'>
                    <h2 className='fileDesc'>Input <strong>Train</strong> dataset in <strong>.tsv</strong> format</h2>
                    <input type="file" name="train_file" className="form-control_Fix" accept=".tsv" required/>
                  </div>
                  <div className='fileSect'>
                  <h2 className='fileDesc'>Input <strong>Validation</strong> dataset in <strong>.tsv</strong> format {'('}optional{')'}</h2>  
                  <input type="file" name="validation_file" className="form-control_Fix" accept=".tsv"/>              
                  </div>
                  <div className='fileSect'>
                  <h2 className='fileDesc'>Input <strong>Test</strong> dataset in <strong>.tsv</strong> format</h2>
                  <input type="file" name="test_file" className="form-control_Fix" accept=".tsv" required/>
                  </div>
                </form>
            <button className='btt_reset_Fix_1' onClick={reset}>Reset input parameters</button>
            <button className='btt_prev_Fix_1' onClick={previous} >Previous</button>
            <button className='btt_change_Fix_1' onClick={change}> Change strategy</button>
            <input type='submit' value='Preprocess with Fixed strategy' className='btt_run_Fix_1' onClick={fixedSubmit}/>
            </div>
            <span id='disclaimerFix'></span>
               <div id='loadingFix' hidden>
                  <div className="lds-ripple"><div></div><div></div></div>
                  <span className='load_info'> Data preprocessing in progress</span>
               </div> 
               <div id='resultFix' hidden>
                <h1 className='completedTitFix'>Preprocessing completed</h1>
                <p className='compl_contentFix'>Your dataset has been successfully processed!
                  <a href='' className="download_linkFix" id="downloadFix">Download ZIP</a>
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

export default FixedForm;