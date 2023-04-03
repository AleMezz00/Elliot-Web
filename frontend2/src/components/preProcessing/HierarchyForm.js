import React, { useState,useEffect } from 'react';
import { Container,Box, FormLabel, FormGroup, Input,Button, Typography, ButtonGroup } from '@mui/material';
import Form from './Form.js';
import Progressbar from '../Progressbar';

function HierarchyForm(props){

  const[seed,setSeed]=useState(42);

  const change = ()=>{
    props.setStep(5);
    props.setSubmitButton(false);
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
        <Container  sx={{mt:5}}>

                 {props.step===0 &&
                <Box sx={{textAlign:'center'}}>
                    <Progressbar step={props.step} initStyle='twenty%'/>
                    <FormGroup sx={{alignItems:'center'}}>
                    <Typography variant='h3'
                            sx={{
                                textAlign:'center',
                                color:'rgb(0, 179, 255)',
                                mt:8, mb:5,
                                textShadow:".05em .05em 0 rgb(60, 70, 75)"
                                }}>
                            Random Seed</Typography>

                        <Input placeholder="Set a random seed "  required sx={{ mb: 1, fontSize: 'var(--joy-fontSize-sm)' }} />
                        <Typography variant='h5' sx={{my:5}}>Input files of a root folder <strong>(in .zip)</strong> for a hierarchy strategy</Typography>
                        <Input type='file'name="dataset_folder" id="dataset_folder" className="hierFile" accept=".zip" required/>

                        <ButtonGroup sx={{mt:12}}>
                        <Button type='button' variant='contained' onClick={change}
                                    sx={{
                                        mx:8,
                                        width:160,
                                        height:55,
                                        fontSize:'16px',
                                        borderRadius:'10px',
                                        bgcolor:'#ff9800',
                                        '&:hover':{bgcolor:'#ed6c02'}
                                        }}> 
                                        Change strategy</Button> 
                        </ButtonGroup>
                         

                    </FormGroup>
                </Box>
                }

            {props.step===5 &&
                <Form/>
            }

        </Container>
                
    )

}

export default HierarchyForm;