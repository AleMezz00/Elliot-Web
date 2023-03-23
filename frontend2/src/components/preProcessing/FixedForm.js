import React, { useState, useEffect } from 'react';
import Progressbar from '../Progressbar.js';
import '../../styles/preProcessing/FixedForm.css'
import Form from './Form.js';
import { Container, Button, Input, FormGroup, Box, Checkbox,FormControlLabel, FormLabel } from '@mui/material';


function FixedForm(props){

  const defaultRec={
    seed: 0,
    binarize: false

  };

  const[dataRec, setDataRec]=useState(defaultRec);
  
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


    return(
        <Container>
            <form action="" method="POST" encType="multipart/form-data" id="form_data">
                {props.step === 0 &&
                <Box>
                    <Progressbar step={props.step} initStyle='fifty%'/>
                    <FormGroup>
                        <FormLabel>Random Seed</FormLabel>
                        <Input placeholder="Set a random seed "  required sx={{ mb: 1, fontSize: 'var(--joy-fontSize-sm)' }}
                        value={dataRec.seed} onChange={(event)=>setDataRec({...dataRec, seed:event.target.value})} />
                        <FormLabel>Dataset Binarization</FormLabel>
                        <FormControlLabel control={<Checkbox/>} label="Check if you want to binarize the dataset" className='check_label' 
                          checked={dataRec.binarize} onChange={(event)=>setDataRec({...dataRec, binarize:event.target.checked})}/>
                        

                        <Button className='btt_next_Data' onClick={next}>Next</Button>
                        <Button className='btt_reset_Data' onClick={reset}>Reset input parameters</Button>
                        <Button className='btt_change_Data' onClick={change}> Change strategy</Button> 

                    </FormGroup>

                </Box>
                }
                {props.step === 1 &&
                <Box>
                    <Progressbar step={props.step} initStyle='fifty%'/>
                    <FormGroup>
                        <FormLabel>Fidex strategy</FormLabel>
                        <FormLabel>Input <strong>Train</strong> dataset in <strong>.tsv</strong> format</FormLabel>
                        <Input type="file" name="train_file" className="form-control_Fix" accept=".tsv" required/>

                        <FormLabel>Input <strong>Validation</strong> dataset in <strong>.tsv</strong> format </FormLabel>  
                        <Input type="file" name="validation_file" className="form-control_Fix" accept=".tsv"/>              
                        
                        <FormLabel>Input <strong>Test</strong> dataset in <strong>.tsv</strong> format</FormLabel>
                        <Input type="file" name="test_file" className="form-control_Fix" accept=".tsv" required/>
 
                        <Button className='btt_reset_Data' onClick={reset}>Reset input parameters</Button>
                        <Button className='btt_change_Data' onClick={change}> Change strategy</Button> 
                        <Button className='btt_change_Data' onClick={previous}> Previous</Button> 

                        <Button type='submit' className='btt_change_Data' onClick={fixedSubmit}> Preprocess with Fixed strategy</Button> 

                    </FormGroup>

                </Box>
                }

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

                {props.step ===5 &&
                    <Form/>
                    }
            </form>
            
        </Container>
    )
}
   


export default FixedForm;