import React, { useState, useEffect } from 'react';
import Progressbar from '../Progressbar.js';
import '../../styles/preProcessing/FixedForm.css'
import Form from './Form.js';
import { Container, Button, Input, FormGroup, Box, Checkbox,FormControlLabel, FormLabel, Typography, ButtonGroup } from '@mui/material';


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
        <Container sx={{mt:4}}>
            <form action="" method="POST" encType="multipart/form-data" id="form_data">
                {props.step === 0 &&
                <Box  sx={{textAlign:'center'}}>
                    <Progressbar step={props.step} initStyle='fifty%'/>
                    <FormGroup  sx={{alignItems:'center'}}>
                    <Typography variant='h3'
                            sx={{
                                textAlign:'center',
                                color:'rgb(0, 179, 255)',
                                mt:8, mb:5,
                                textShadow:".05em .05em 0 rgb(60, 70, 75)"
                                }}>
                            Random Seed</Typography>

                        <Input placeholder="Set a random seed "  required sx={{ mb: 1, fontSize: 'var(--joy-fontSize-sm)' }}
                        value={dataRec.seed} onChange={(event)=>setDataRec({...dataRec, seed:event.target.value})} />

                           <Typography variant='h3'
                            sx={{
                                textAlign:'center',
                                color:'rgb(0, 179, 255)',
                                mt:8, mb:5,
                                textShadow:".05em .05em 0 rgb(60, 70, 75)"
                                }}>
                            Dataset Binarization</Typography>

                        <FormControlLabel control={<Checkbox/>} label="Check if you want to binarize the dataset" className='check_label' 
                          checked={dataRec.binarize} onChange={(event)=>setDataRec({...dataRec, binarize:event.target.checked})}/>
                        
                        
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
                                color:'rgb(0, 179, 255)',
                                mt:5, mb:5,
                                textShadow:".05em .05em 0 rgb(60, 70, 75)"
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
                        <Button type='submit' onClick={fixedSubmit} variant='contained' color='success'
                                      sx={{
                                        my:8,
                                        width:350,
                                        height:65,
                                        fontSize:'18px',
                                        borderRadius:'10px',
                                        }}>
                                        Preprocess with Fixed strategy</Button> 

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