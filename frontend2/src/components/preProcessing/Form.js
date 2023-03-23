import React from 'react';
import { useState} from 'react';
import DatasetForm from './DatasetForm.js';
import HierarchyForm from './HierarchyForm.js';
import FixedForm from './FixedForm.js'
import '../../styles/preProcessing/Form.css'
import { Box, Button, Container, FormControl, FormLabel, Paper } from '@mui/material';

function Form(){



    const[step,setStep]=useState(0);
    const[preStep, setPreStep]=useState(false);

    

    //stretegy
    const [dataset, setDataset]= useState(false);
    const [fixed, setFixed]= useState(false);
    const [hierarchy, setHierarchy]= useState(false);



   if(!preStep){
    return(

        <Container>
            <Box>
                <FormControl>
                   <FormLabel component='legend'>Welcome</FormLabel> 
                   <FormLabel component='legend'>Here you can choose among 3 different loading strategies,
                    8 prefiltering approaches and several splitting strategies.</FormLabel>
                </FormControl>

                <Button type='button' onClick={()=>setPreStep(true)}> Let's start !</Button>
                
            </Box>
        </Container>
    );
   }

   if (preStep){
    if(!dataset && !fixed && !hierarchy){

      return(
        
        <Container>
            <Box>
                <FormControl>
                   <FormLabel component='legend'>Loading strategies</FormLabel> 
                   <Button type='button' onClick={()=>setDataset(true)}> Dataset</Button>
                   <Button type='button' onClick={()=>setFixed(true)}> Fixed</Button>
                   <Button type='button' onClick={()=>setHierarchy(true)}> Hierarchy</Button>
                </FormControl>
   
            </Box>
        </Container>
      
      );
    } else if(dataset && !fixed && !hierarchy){
      return(
       <DatasetForm step={step} setStep={setStep} setPreStep={setPreStep}/>
      );
    } else if(!dataset && fixed && !hierarchy){
      return(
       <FixedForm step={step} setStep={setStep} setPreStep={setPreStep}/>
      );
    } else if(!dataset && !fixed && hierarchy){
      return(
       <HierarchyForm step={step} setStep={setStep} setPreStep={setPreStep}/>
      );
    }
  }
}


export default Form;