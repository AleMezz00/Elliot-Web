import React, { useState,useEffect } from 'react';
import { Container,Box, FormLabel, FormGroup, Input,Button, Typography, ButtonGroup } from '@mui/material';
import Form from './Form.js';
import Progressbar from '../Progressbar';

function HierarchyForm(props){ 

  const requestState = props.requestState;
  const setRequestState = props.setRequestState;

  const change = ()=>{
    props.setStep(5);
    props.setSubmitButton(false);
    setRequestState(props.request)

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
                                mt:8, mb:5,
                                }}>
                            Random Seed</Typography>

                        <Input placeholder="Set a random seed "  required sx={{ mb: 1, fontSize: 'var(--joy-fontSize-sm)' }} 
                         value={requestState.seed_hierarchy} onChange={(event)=>setRequestState({...requestState, seed_hierarchy:event.target.value})} />
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

export default HierarchyForm;