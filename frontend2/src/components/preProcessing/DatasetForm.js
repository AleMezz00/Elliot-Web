import React, {useState, useEffect} from 'react';
import Progressbar from '../Progressbar.js';
import '../../styles/preProcessing/DataSetForm.css'
import Form from './Form.js';
import { Box, Button, Checkbox, Container, FilledInput, FormControlLabel, FormGroup, FormLabel, Input } from '@mui/material';
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
  

  const step = props.step;
 



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

    return(
        <Container>
            <form action="" method="POST" encType="multipart/form-data" id="form_data">
            <input type='text' name='loading_strategy' id='loading_strategy' value={props.strategy} readOnly hidden/>
               {step===0 &&
                <Box>
                    <Progressbar step={props.step} initStyle='twenty%'/>
                    <FormGroup>
                        <FormLabel>Random Seed</FormLabel>
                        <Input placeholder="Set a random seed "  required sx={{ mb: 1, fontSize: 'var(--joy-fontSize-sm)' }}
                        value={valueData.seed} onChange={(event)=>setValueData({...valueData, seed:event.target.value})} />
                        <FormLabel>Dataset Binarization</FormLabel>
                        <FormControlLabel control={<Checkbox/>} label="Check if you want to binarize the dataset" className='check_label' checked={checkData.binarize} onChange={(event)=>setCheckData({...checkData, binarize:event.target.checked})}/>
                        

                        <Button className='btt_next_Data' onClick={next}>Next</Button>
                        <Button className='btt_reset_Data' onClick={reset}>Reset input parameters</Button>
                        <Button className='btt_change_Data' onClick={change}> Change strategy</Button> 

                    </FormGroup>
                    
                </Box> 
                }


                {step===1 &&
                <Box>
                    <Progressbar step={props.step} initStyle='twenty%'/>
                    <FormGroup>
                        <PreFiltering checkData={checkData} setCheckData={setCheckData} valueData={valueData} setValueData={setValueData}/>

                        <Button className='btt_next_Data' onClick={next}>Next</Button>
                        <Button className='btt_reset_Data' onClick={reset}>Reset input parameters</Button>
                        <Button className='btt_change_Data' onClick={change}> Change strategy</Button> 
                        <Button className='btt_prev_Data' onClick={previous}>Previous</Button>

                    </FormGroup>
                    
                </Box> 
                }  

                
                {step===2 &&
                <Box>
                    <Progressbar step={props.step} initStyle='twenty%'/>
                    <FormGroup>
                        <TestSplitting checkData={checkData} setCheckData={setCheckData} valueData={valueData} setValueData={setValueData} 
                                paramData={paramData} setParamData={setParamData} />
                        <Button className='btt_next_Data' onClick={next}>Next</Button>
                        <Button className='btt_reset_Data' onClick={reset}>Reset input parameters</Button>
                        <Button className='btt_change_Data' onClick={change}> Change strategy</Button> 
                        <Button className='btt_prev_Data' onClick={previous}>Previous</Button>

                    </FormGroup>
                    
                </Box> 
                }  

                {step===3 &&
                <Box>
                    <Progressbar step={props.step} initStyle='twenty%'/>
                    <FormGroup>
                        <ValidationSplitting checkData={checkData} setCheckData={setCheckData} valueData={valueData} setValueData={setValueData} 
                                 paramData={paramData} setParamData={setParamData}/>
                        <Button className='btt_next_Data' onClick={next}>Next</Button>
                        <Button className='btt_reset_Data' onClick={reset}>Reset input parameters</Button>
                        <Button className='btt_change_Data' onClick={change}> Change strategy</Button> 
                        <Button className='btt_prev_Data' onClick={previous}>Previous</Button>

                    </FormGroup>
                    
                </Box> 
                } 

                {step===4 &&
                <Box>
                    <Progressbar step={props.step} initStyle='twenty%'/>
                    <FormGroup>

                        <FormLabel> dataset upload</FormLabel>
                        
                        <FormLabel> Upload dataset in <strong>.tvs</strong> format  </FormLabel>
                        <Input type='file' name="dataset_file" id="dataset_file"  accept=".tsv" required/>
          
                        <Button className='btt_reset_Data' onClick={reset}>Reset input parameters</Button>
                        <Button className='btt_change_Data' onClick={change}> Change strategy</Button> 
                        <Button className='btt_prev_Data' onClick={previous}>Previous</Button>

                        <Button type='submit' onClick={datasetSubmit}>Preprocess with Dataset strategy</Button>

                    </FormGroup>
                    
                </Box> 
                } 

                {step===5 &&
                <Box>
                    <Form/>
                    
                </Box> 
                } 
            </form>
                
        
        </Container>
        
    )

}

export default DatasetForm;