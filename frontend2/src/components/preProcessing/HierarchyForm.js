import React, { useState,useEffect } from 'react';
import { Container,Box, FormLabel, FormGroup, Input,Button } from '@mui/material';
import Form from './Form.js';
import Progressbar from '../Progressbar';

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

    return(
        <Container>
            <form action="" method="POST" encType="multipart/form-data" id="form_data">
              <input type='text' name='loading_strategy' id='loading_strategy' value={props.strategy} hidden/>
                 {props.step===0 &&
                <Box>
                    <Progressbar step={props.step} initStyle='twenty%'/>
                    <FormGroup>
                        <FormLabel>Random Seed</FormLabel>
                        <Input placeholder="Set a random seed "  required sx={{ mb: 1, fontSize: 'var(--joy-fontSize-sm)' }} />
                        <FormLabel>Input files of a root folder (in .zip) for a hierarchy strategy</FormLabel>
                        <Input type='file'name="dataset_folder" id="dataset_folder" className="hierFile" accept=".zip" required/>
                
                        <Button className='btt_change_Data' onClick={change}> Change strategy</Button>
                        

                        <Button type= 'submit' onClick={hierarchySubmit}>Pre-process with hierarchy strategy</Button> 

                    </FormGroup>
                </Box>
                
                }
                   
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
            </form>

            {props.step===5 &&
                <Form/>
            }

        </Container>
                
    )

}

export default HierarchyForm;