import React, { useState, useEffect } from 'react';
import Progressbar from '../Progressbar.js';
import '../../styles/preProcessing/FixedForm.css'
import Form from './Form.js';
import { Container, Button, Input, FormGroup, Box, Checkbox,FormControlLabel, FormLabel, Typography, ButtonGroup } from '@mui/material';


function FixedForm(props){

    const requestState = props.requestState;
   const setRequestState = props.setRequestState;
  
    const next =()=>{
      props.setStep(props.step +1 );
      props.setSubmitButton(true);
    }
      
    const previous=()=>{
      props.setStep(props.step-1);
      props.setSubmitButton(false);
    }
      const reset=()=>{
        setRequestState(props.request)
        props.setStep(0);
        props.setSubmitButton(false);
      }
      const change = ()=>{
        props.setStep(5);
        props.setSubmitButton(false);
      }


    return(
        <Container sx={{mt:4}}>
                {props.step === 0 &&
                <Box  sx={{textAlign:'center'}}>
                    <Progressbar step={props.step} initStyle='fifty%'/>
                    <FormGroup  sx={{alignItems:'center'}}>
                    <Typography variant='h3'
                            sx={{
                                textAlign:'center',
                                mt:8, mb:5,
                                }}>
                            Random Seed</Typography>

                        <Input placeholder="Set a random seed "  required sx={{ mb: 1, fontSize: 'var(--joy-fontSize-sm)' }}
                        value={requestState.seed_fixed} onChange={(event)=>setRequestState({...requestState, seed_fixed:event.target.value})} />

                           <Typography variant='h3'
                            sx={{
                                textAlign:'center',
                                mt:8, mb:5,
                                }}>
                            Dataset Binarization</Typography>

                        <FormControlLabel control={<Checkbox/>} label="Check if you want to binarize the dataset" className='check_label' 
                          checked={requestState.binarize_fixed} onChange={(event)=>setRequestState({...requestState, binarize_fixed:event.target.checked})}/>
                        
                        
                        <ButtonGroup size='large' sx={{mt:10}}>
                        <Button type='button' variant='contained' color='error' onClick={reset}
                                            sx={{
                                                mx:8,
                                                width:160,
                                                height:55,
                                                fontSize:'15px',
                                                borderRadius:'10px'
                                            }} 
                                            >Reset input parameters</Button>
                        <Button type='button' variant='contained' onClick={change}
                                            sx={{
                                                mx:8,
                                                width:160,
                                                height:55,
                                                fontSize:'16px',
                                                borderRadius:'10px',
                                                bgcolor:'#ff9800',
                                                '&:hover':{bgcolor:'#ed6c02'}
                                            }}
                                            > Change strategy</Button> 
                        <Button type='button' variant='contained' color='primary' onClick={next}
                                                sx={{
                                                    mx:8,
                                                    width:160,
                                                    height:55,
                                                    fontSize:'19px',
                                                    borderRadius:'10px',
                                                }}
                                                >Next</Button>
                        </ButtonGroup>

                    </FormGroup>
                </Box>
                }


                {props.step === 1 &&
                <Box sx={{textAlign:'center'}}>
                    <Progressbar step={props.step} initStyle='fifty%'/>
                    <FormGroup sx={{alignItems:'center'}}>

                        <Typography variant='h2'
                              sx={{
                                textAlign:'center',
                                mt:5, mb:5,
                                }}>
                                Fidex strategy</Typography>

                        <Typography variant='h5'
                                sx={{
                                  mb:3
                                }}>
                        Input <strong>Train</strong> dataset in <strong>.tsv</strong> format</Typography>
                        <Input type="file" name="train_file" accept=".tsv" required/>

                        <Typography variant='h5'
                                sx={{
                                  my:3
                                }}>
                        Input <strong>Validation</strong> dataset in <strong>.tsv</strong> format </Typography>  
                        <Input type="file" name="validation_file" accept=".tsv"/>              
                        
                        <Typography variant='h5'
                                sx={{
                                  my:3
                                }}>
                        Input <strong>Test</strong> dataset in <strong>.tsv</strong> format</Typography>
                        <Input type="file" name="test_file" accept=".tsv" required/>
 
                        <ButtonGroup sx={{mt:6}} >
                            <Button type='button' variant='contained' color='error' onClick={reset}
                                    sx={{
                                        mx:8,
                                        width:160,
                                        height:55,
                                        fontSize:'15px',
                                        borderRadius:'10px',
                                    }}>
                                    Reset input parameters</Button>
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
                            <Button type='button' variant='contained' onClick={previous}
                                    sx={{
                                        mx:8,
                                        width:160,
                                        height:55,
                                        fontSize:'18px',
                                        borderRadius:'10px',
                                        }}
                                        >Previous</Button>
                        </ButtonGroup> 
                        {/* <Button type='submit' onClick={fixedSubmit} variant='contained' color='success'
                                      sx={{
                                        my:8,
                                        width:350,
                                        height:65,
                                        fontSize:'18px',
                                        borderRadius:'10px',
                                        }}>
                                        Preprocess with Fixed strategy</Button> 
 */}
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
            
        </Container>
    )
}
   


export default FixedForm;