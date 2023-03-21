import React, {useState, useEffect} from 'react';
import Progressbar from '../Progressbar.js';
import '../../styles/preProcessing/DataSetForm.css'
import Form from './Form.js';
import { Box, Checkbox, FilledInput, FormControlLabel, FormGroup, Input } from '@mui/material';
import PreFiltering from './PreFiltering.js';
import TestSplitting from './TestSplitting.js';
import ValidationSplitting from './ValidationSplitting.js';


function DatasetForm(props){

  const defaultCheckState={
    binarize:false,
    glob_thresh:false,
    us_av:false,
    us_k:false,
    it_k:false,
    iter_k:false, 
    n_k:false,  
    cold_us:false,
    fixt:false,     
    tho:false,      
    rand_sub:false,
    rand_sub_c:false,      
    rand_cross:false,      
    fixt2:false, 
    tho2:false,
    tho_c2:false, 
    rand_sub2:false,
    rand_sub_c2:false, 
    rand_cross2:false,  
  };
  const defaultParamState={
    tho_c:false,
    rand_sub_c:false,
  };

  const defaultValueState={
    seed: 0,
    glob_thresh_value:'',
    us_av_value:'',
    us_k_value:'',
    it_k_value:'',
    iter_k_value:'',
    n_value:'',
    k_value:'',
    cold_us_value:'',
    fixt_value:'',
    tho_range:'',
    tho_n_out:'',
    rand_sub_range:'',
    rand_sub_n_out:'',
    rand_sub_folds:'',
    fixt_value2:'',
    tho_range2:'',
    tho_n_out2:'',
    rand_sub_range2:'',
    rand_sub_n_out2:'',
    rand_sub_folds2:'',
    rand_cross_folds2:'',
    rand_cross_folds:'',
  };

  const [checkData,setCheckData]=useState(defaultCheckState);
  const [paramData,setParamData]=useState(defaultParamState);
  const [valueData,setValueData]=useState(defaultValueState);



  const next=()=>{
      props.setStep(props.step+1);
  }
      
  const previous=()=>{
      props.setStep(props.step-1);
  }

  const reset=()=>{
      props.setStep(0);
      setParamData(defaultParamState);
      setCheckData(defaultCheckState)
      setValueData(defaultValueState)
  }

  const change = ()=>{
    props.setStep(5);
  }

 
   //fetch     
  const datasetSubmit=()=>{
    let form=document.getElementById('form_data');
      if(true){
        //document.getElementsByClassName('navButt').style.display='none';
        fetch("/api/v1/preprocessing-json", {
          method: 'POST',
          body: new FormData(form)
      }).then(res => res.json())
      .then(data => {
          document.getElementById('downloadDF').setAttribute('href', `/api/v1/preprocessing/download/${data}`);
          document.getElementById('loading').setAttribute('hidden', true);
          document.getElementById('result').setAttribute('hidden',false);
      });
      document.getElementById('loading').setAttribute('hidden', false);
  
      }else document.getElementById('disclaimer').innerHTML='Go back and fill required fields';
    }

    
      if(props.step===0){
        return(
          <div className='datSet_container'>
            <form action="" method="POST" encType="multipart/form-data" id="form_data">
              <input type='text' name='loading_strategy' id='loading_strategy' value={props.strategy} readOnly hidden/>
                <div className='randSeed_0'>
                <div className='barra'><Progressbar step={props.step} initStyle='twenty%'/></div>
                  <h2 className='randSeedTit'>Random seed</h2> 
                  <h3 className='randDesc'>set a random seed for the preparation of operations:</h3>
                  <input type='number' name='random_seed' className='randValue' value={valueData.seed} onChange={(event)=>setValueData({...valueData, seed:event.target.value})}/>
                  <h2 className='binarTit'>Dataset Binarization</h2> 
                  <div className='check_div'>
                    <FormControlLabel control={<Checkbox/>} label="Check if you want to binarize the dataset" className='check_label' checked={checkData.binarize} onChange={(event)=>setCheckData({...checkData, binarize:event.target.checked})}/>
                  </div>
                  </div>
                  <button className='btt_next_Data' onClick={next}>Next</button>
                  <button className='btt_reset_Data' onClick={reset}>Reset input parameters</button>
                  <button className='btt_change_Data' onClick={change}> Change strategy</button> 
            </form>
          </div>
        );
      }

      if(props.step===1){
        return(
          <div className='datSet_container'>
          <div className='randSeed_1'>
          
          <div className='barra'><Progressbar step={props.step} initStyle='twenty%'/></div>
            <form action="" method="POST" encType="multipart/form-data" id="form_data">
              <input type='text' name='loading_strategy' id='loading_strategy' value={props.strategy} readOnly hidden/>
              <div className='check_div'>
                 <PreFiltering checkData={checkData} setCheckData={setCheckData} valueData={valueData} setValueData={setValueData}/>
              </div>
              </form>
            </div>
            <button className='btt_next_Data' onClick={next}>Next</button>
            <button className='btt_reset_Data' onClick={reset}>Reset input parameters</button>
            <button className='btt_prev_Data' onClick={previous}>Previous</button>
            <button className='btt_change_Data' onClick={change}> Change strategy</button>
               
          </div>
        );
      }

      if(props.step===2){
            return(
              <div className='datSet_container'>
              <div className='randSeed_2'>
              <div className='barra'><Progressbar step={props.step} initStyle='twenty%'/></div>
                <form action="" method="POST" encType="multipart/form-data" id="form_data">
                  <input type='text' name='loading_strategy' id='loading_strategy' value={props.strategy} readOnly hidden/>
                  <div>
                      <TestSplitting checkData={checkData} setCheckData={setCheckData} valueData={valueData} setValueData={setValueData} 
                                paramData={paramData} setParamData={setParamData} />
                  </div>
                </form>
                </div>
                <button className='btt_next_Data' onClick={next}>Next</button>
                <button className='btt_reset_Data' onClick={reset}>Reset input parameters</button>
                <button className='btt_prev_Data' onClick={previous}>Previous</button>
                <button className='btt_change_Data' onClick={change}> Change strategy</button>
              </div>
            );
          }

        if(props.step===3){
            return(
              <div className='datSet_container'>
                <div className='randSeed_3'>
              <div className='barra'><Progressbar step={props.step} initStyle='twenty%'/></div>
                <form action="" method="POST" encType="multipart/form-data" id="form_data">
                  <input type='text' name='loading_strategy' id='loading_strategy' value={props.strategy} readOnly hidden/>
                    <ValidationSplitting checkData={checkData} setCheckData={setCheckData} valueData={valueData} setValueData={setValueData} 
                                 paramData={paramData} setParamData={setParamData}/>
                </form>
                </div>
                <button className='btt_next_Data' onClick={next}>Next</button>
                <button className='btt_reset_Data' onClick={reset}>Reset input parameters</button>
                <button className='btt_prev_Data' onClick={previous}>Previous</button>
                <button className='btt_change_Data' onClick={change}> Change strategy</button>
              </div>
            );
          }

          if(props.step==4){
            return(
              <div className='datSet_container'>
                <div className='randSeed_4'>
                <div className='barra'><Progressbar step={props.step} initStyle='twenty%'/></div>
                  <h2 className='upTitle'>Dataset upload</h2>
                  <h3 className='upDescription'>Upload dataset in <strong>.tvs</strong> format </h3>
                  <div className='up_file_div'>
                    <input type='file' name="dataset_file" id="dataset_file" className="form-control_Data" accept=".tsv" required/>
                  </div>
                </div>
                <button className='btt_reset_Data' onClick={reset}>Reset input parameters</button>
                <button className='btt_prev_Data' onClick={previous}>Previous</button>
                <button className='btt_change_Data' onClick={change}> Change strategy</button>  
                  <input id='dataset_submit' value='Preprocess with Dataset strategy' className='btt_run_Data' onClick={datasetSubmit}/>      
              </div> 
            );
          }
            
      if(props.step===5){
        return(
          <Form/>
        );
      }
}

export default DatasetForm;