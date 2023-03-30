import React from 'react';
import { useState} from 'react';
import DatasetForm from './DatasetForm.js';
import HierarchyForm from './HierarchyForm.js';
import FixedForm from './FixedForm.js'
import '../../styles/preProcessing/Form.css'
import { Box, Button, ButtonGroup, Container, FormControl, FormLabel, Paper, Typography } from '@mui/material';

function Form(){



    const[step,setStep]=useState(0);
    const[preStep, setPreStep]=useState(false);

    

    //stretegy
    const [dataset, setDataset]= useState(false);
    const [fixed, setFixed]= useState(false);
    const [hierarchy, setHierarchy]= useState(false);

    //elenco request.form.get
    const request = {
                    test_splitting_strategy,
                    test_random_subsampling_test_ratio,
                    test_random_subsampling_folds,
                    test_splitting_strategy,
                    validation_splitting_strategy,
                    test_splitting_strategy,
                    validation_temporal_hold_out_test_ratio,
                    validation_random_subsampling_test_ratio
                    }
    const [requestState,setRequestState] = useState(request)


   if(!preStep){
    return(

        <Container sx={{my:6}}>
            <Box>
                   <Typography variant='h2' 
                   sx={{
                    textAlign:'center',
                    color:'rgb(0, 179, 255)',
                    mt:15, mb:15,
                    textShadow:".05em .05em 0 rgb(60, 70, 75)"
                    }}
                    >Welcome in Data Pre-processing section
                    </Typography> 

                   <Typography variant='h4' 
                   sx={{textAlign:'center',}}
                    >Here you can choose among 3 different loading strategies,
                    8 prefiltering approaches and several splitting strategies.
                    </Typography>

            </Box>

            <Box sx={{textAlign:'center'}}>
              <Button type='button' variant='contained' size='large' onClick={()=>setPreStep(true)}
             sx={{
              mt:15,
              width:200,
              height:60,
              fontSize:'19px',
              borderRadius:'10px'
             }}
             > Let's start !
             </Button> 
            </Box>
           
        </Container>
    );
   }

   if (preStep){
    if(!dataset && !fixed && !hierarchy){

      return(
        
        <Container sx={{my:6}}>
            
                   <Typography variant='h2'
                    sx={{
                    textAlign:'center',
                    color:'rgb(0, 179, 255)',
                    mt:15, mb:10,
                    textShadow:".05em .05em 0 rgb(60, 70, 75)"
                    }}
                    >Loading strategies</Typography> 

                  <Typography variant='h4'
                    sx={{
                    textAlign:'center',
                    mb:15
                    }}
                    >Choose your loading strategy: </Typography> 

              <Box sx={{textAlign:'center'}}>          
                  <ButtonGroup size='large'>
                  <Button variant='contained' type='button' onClick={()=>setDataset(true)}
                      sx={{
                        mx:8,
                        width:200,
                        height:60,
                        fontSize:'19px',
                        borderRadius:'10px'
                       }} 
                       > Dataset</Button>
                  <Button variant='contained' type='button' onClick={()=>setFixed(true)}
                      sx={{
                        mx:8,
                        width:200,
                        height:60,
                        fontSize:'19px',
                        borderRadius:'10px'
                       }}
                       > Fixed</Button>
                  <Button variant='contained' type='button' onClick={()=>setHierarchy(true)}
                      sx={{
                        mx:8,
                        width:200,
                        height:60,
                        fontSize:'19px',
                        borderRadius:'10px'
                       }}
                       > Hierarchy</Button>
                  </ButtonGroup>
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