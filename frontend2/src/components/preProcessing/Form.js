import React from 'react';
import { useState} from 'react';
import DatasetForm from './DatasetForm.js';
import HierarchyForm from './HierarchyForm.js';
import FixedForm from './FixedForm.js'
import '../../styles/preProcessing/Form.css'
import { Box, Button, ButtonGroup, Container, FormControl, FormLabel, Paper, Typography, Input } from '@mui/material';

function Form(){

    const[step,setStep]=useState(0);
    const [submitButton,setSubmitButton] = useState(false)
    const[preStep, setPreStep]=useState(false);

    //elenco request.form.get
    const request = {

          loading_strategy:'',

          //dataset- prefiltering
          seed_dataset:0,
          binarize_block:false,
          global_threshold:false,
          user_average:false,
          user_k_core:false,
          item_k_core:false,
          iterative_k_core:false, 
          n_rounds_k_core:false,  
          cold_users:false,

          global_threshold_threshold:0,
          user_k_core_core:0,
          item_k_core_core:0,
          iterative_k_core_core:0,
          n_rounds_k_core_core:0,
          n_rounds_k_core_rounds:0,
          cold_users_threshold:0,

          //dataset-testsplitting
          test_fixed_timestamp:false,
          test_temporal_hold_out:false,
          test_random_subsampling:false,
          test_random_cross_validation:false,

          test_fixed_timestamp_value:'',
          test_temporal_hold_out_test_ratio:0,
          test_temporal_hold_out_leave_n_out:0,
          test_random_subsampling_test_ratio:0,
          test_random_cross_validation_folds:0,

          //dataset-validation
          validation_fixed_timestamp:false,
          validation_temporal_hold_out:false,
          validation_random_subsampling:false,
          validation_random_cross_validation:false,

          validation_fixed_timestamp_value:'',
          validation_temporal_hold_out_test_ratio:0,
          validation_temporal_hold_out_leave_n_out:0,
          validation_random_subsampling_test_ratio:0,
          validation_random_cross_validation_folds:0,

          //fixed
          seed_fixed:0,
          binarize_fixed:false,

          //hierarchy
          seed_hierarchy:0,
            }

    const [requestState,setRequestState] = useState(request);

    const handleChange=(e) => {
      const { name, value } = e.target;
      console.log(name,value);
      setRequestState(requestState => ({...requestState, [name]: value}))
      console.log(requestState)
    }

    const handleChangeHier=(e) => {
      const { name, value } = e.target;
      console.log(name,value);
      setRequestState(requestState => ({...requestState, [name]: value}))
      console.log(requestState)
      setSubmitButton(true)
    }

     const FormSubmit=(e)=>{
      e.preventDefault()
      console.log(e.target)
      console.log(requestState)
        if(true){
          fetch("http://127.0.0.1:5000/api/v1/preprocessing-json", {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({requestState})
        }).then(res => res.json());
        // .then(data => {
        //     document.getElementById('downloadDF').setAttribute('href', `/api/v1/preprocessing/download/${data}`);
        // });
    
        }
      } 
 
    return(
        <>
        {!preStep ? 
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
           
        </Container> : 
        <Container sx={{marginBottom:25}}>

          <form  action="" method="POST" encType="multipart/form-data" id="form_data">

          {requestState.loading_strategy === '' ?
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
                      <Button variant='contained' type='button' name='loading_strategy' value='dataset'
                       onClick={handleChange} 
                          sx={{
                            mx:8,
                            width:200,
                            height:60,
                            fontSize:'19px',
                            borderRadius:'10px'
                          }} 
                          > Dataset</Button>
                      <Button variant='contained' type='button' name='loading_strategy' value='fixed' 
                        onClick={handleChange} 
                          sx={{
                            mx:8,
                            width:200,
                            height:60,
                            fontSize:'19px',
                            borderRadius:'10px'
                          }}
                          > Fixed</Button>
                      <Button variant='contained' type='button' name='loading_strategy' value='hierarchy' 
                      onClick={handleChangeHier}
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
               :null}
               {requestState.loading_strategy === 'dataset' ? 
                 <DatasetForm step={step} setStep={setStep} setPreStep={setPreStep} setSubmitButton={setSubmitButton} request={request} setRequestState={setRequestState} requestState={requestState}/>
                 :null}
               {requestState.loading_strategy === 'fixed' ?
                <FixedForm step={step} setStep={setStep} setPreStep={setPreStep} setSubmitButton={setSubmitButton} request={request} setRequestState={setRequestState} requestState={requestState}/> 
                :null}
              {requestState.loading_strategy === 'hierarchy'  ?
                <HierarchyForm step={step} setStep={setStep} setPreStep={setPreStep} setSubmitButton={setSubmitButton} request={request} setRequestState={setRequestState} requestState={requestState}/>
              :null}
          </form>

          {submitButton ?
          <Box sx={{textAlign:'center'}}>
            <Button type='submit' variant='contained' color='success' value='Process the Strategy' onClick={FormSubmit}
            sx={{
            my:8,
            width:350,
            height:65,
            fontSize:'18px',
            borderRadius:'10px',}}> Process the Strategy</Button>
          </Box>  
          :null
          }
        </Container>
       
        }
        </>
    );

  }


export default Form;