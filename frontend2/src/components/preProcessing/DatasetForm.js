import React, {useState, useEffect} from 'react';
import Progressbar from '../Progressbar.js';
import '../../styles/preProcessing/DataSetForm.css'
import Form from './Form.js';
import { Box, Button, ButtonGroup, Checkbox, Container, FilledInput, FormControlLabel, FormGroup, FormLabel, Input, Typography } from '@mui/material';
import PreFiltering from './PreFiltering.js';
import TestSplitting from './TestSplitting.js';
import ValidationSplitting from './ValidationSplitting.js';
import { blue } from '@mui/material/colors';


function DatasetForm(props){


  const [fileData, setFileData] = useState("")

  const requestState = props.requestState;
  const setRequestState = props.setRequestState;
  

  const step = props.step;




  const handleChange=(e) => {
    const { name, value } = e.target;
    console.log(name,value);
    setRequestState(requestState => ({...requestState, [name]: value}))
    console.log(requestState)
  }

  const next=()=>{
      props.setStep(props.step+1);
      if(props.step === 3){
        props.setSubmitButton(true)
      }
      
  }
      
  const previous=()=>{
      props.setStep(props.step-1);
      props.setSubmitButton(false);
  }

  const reset=()=>{
      props.setStep(0);
      setRequestState(props.request)
      props.setSubmitButton(false);
  }

  const change = ()=>{
    props.setStep(5);
    props.setSubmitButton(false);
  }

    return(
        <Container sx={{mt:2}}>
            {step===0 &&
                <Box sx={{textAlign:'center',mt:6}}>
                    <Progressbar step={props.step} initStyle='twenty%'/>
                    <FormGroup sx={{alignItems:'center'}}>

                        <Typography variant='h3'
                            sx={{
                                textAlign:'center',
                                  mt:8, mb:5,
                                }}>
                            Random Seed</Typography>

                        <Input placeholder="Set a random seed "  required sx={{ mb: 1, fontSize: 'var(--joy-fontSize-sm)' }}
                        value={requestState.seed_dataset} onChange={(event)=>setRequestState({...requestState, seed_dataset:event.target.value})} />

                        <Typography variant='h3'
                            sx={{
                                textAlign:'center',
                                mt:8, mb:5,
                                }}>
                            Dataset Binarization</Typography>

                        <FormControlLabel control={<Checkbox/>} label="Check if you want to binarize the dataset" checked={requestState.binarize_block}
                         onChange={(event)=>setRequestState({...requestState, binarize_block:event.target.checked})}/>
                    
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


                {step===1 &&
                <Box sx={{textAlign:'center',mt:2}} >
                    <Progressbar step={props.step} initStyle='twenty%'/>
                    <FormGroup sx={{alignItems:'center'}}>
                        <PreFiltering requestState={requestState} setRequestState={setRequestState} />
                        <ButtonGroup size='large' sx={{mt:5}}>                      
                        <Button type='button' variant='contained' color='error' onClick={reset}
                                            sx={{
                                                mx:8,
                                                width:160,
                                                height:55,
                                                fontSize:'15px',
                                                borderRadius:'10px',
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
                        <Button type='button' variant='contained' onClick={previous}         
                                            sx={{
                                            mx:8,
                                            width:160,
                                            height:55,
                                            fontSize:'18px',
                                            borderRadius:'10px',
                                            }}
                                            >Previous</Button>  
                        <Button type='button' variant='contained' onClick={next}        
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

                
                {step===2 &&
                <Box sx={{textAlign:'center',mt:6}}>
                    <Progressbar step={props.step} initStyle='twenty%'/>
                    <FormGroup sx={{alignItems:'center'}}>
                        <TestSplitting  requestState={requestState} setRequestState={setRequestState} />

                        <ButtonGroup sx={{mt:9}} >
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
                        <Button type='button' variant='contained' onClick={next}
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


                {step===3 &&
                <Box sx={{textAlign:'center',mt:6}}>
                    <Progressbar step={props.step} initStyle='twenty%'/>
                    <FormGroup sx={{alignItems:'center'}}>
                        <ValidationSplitting requestState={requestState} setRequestState={setRequestState}  />

                        <ButtonGroup sx={{mt:9}} >
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
                            <Button type='button' variant='contained' onClick={next} 
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

                {step===4 &&
                <Box sx={{textAlign:'center',mt:6}}>
                    <Progressbar step={props.step} initStyle='twenty%'/>
                    <FormGroup sx={{alignItems:'center'}}>
                        <Typography variant='h2'
                           sx={{
                            textAlign:'center',
                            mt:9, mb:9,
                            }}>
                            Dataset Upload</Typography>                      
                        <Typography variant='h4' sx={{mb:5}}>Upload dataset in <strong>.tsv</strong> format  </Typography>
                        <Input type='file' name="dataset_file" id="dataset_file"  accept=".tsv" required onChange={props.handleChangeFile}/>
        
                        <ButtonGroup sx={{mt:12}} >
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
                    </FormGroup>          
                </Box> 
                } 

                {step===5 &&
                <Box>
                    <Form/>       
                </Box> 
                } 
                  
        </Container>        
    )

}

export default DatasetForm;