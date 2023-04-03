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

  const defaultCheckState={
    global_threshold:false,
    user_average:false,
    user_k_core:false,
    item_k_core:false,
    iterative_k_core:false, 
    n_rounds_k_core:false,  
    cold_users:false,


    fixt:false,     
    tho:false,      
    rand_sub:false,
    rand_sub_c:false,      
    rand_cross:false,      
    fixt2:false, 
    tho2:false,
    tho_c2:false, 
    rand_sub2:false,
    rand_sub_c2:false, 
    rand_cross2:false,  
  };
  const defaultParamState={
    tho_c:false,
    rand_sub_c:false,
  };

  const defaultValueState={
    global_threshold_threshold:0,
    user_k_core_core:0,
    item_k_core_core:0,
    iterative_k_core_core:0,
    n_rounds_k_core_core:0,
    n_rounds_k_core_rounds:0,
    cold_users_threshold:0,

    //fixed
    test_temporal_hold_out_test_ratio:0.0,

    
  };

  const [checkData,setCheckData]=useState(defaultCheckState);
  const [paramData,setParamData]=useState(defaultParamState);
  const [valueData,setValueData]=useState(defaultValueState);
  const [fileData, setFileData] = useState("")
  

  const step = props.step;


  const handleChangeFile = e => {
    const fileReader = new FileReader();
    fileReader.readAsText(e.target.files[0], "UTF-8");
    fileReader.onload = e => {
      setFileData(e.target.result);
    };
  };

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
      setParamData(defaultParamState);
      setCheckData(defaultCheckState);
      setValueData(defaultValueState);
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
                                color:'rgb(0, 179, 255)',
                                textShadow:".05em .05em 0 rgb(60, 70, 75)"
                                }}>
                            Random Seed</Typography>

                        <Input placeholder="Set a random seed "  required sx={{ mb: 1, fontSize: 'var(--joy-fontSize-sm)' }}
                        value={valueData.seed} onChange={(event)=>setValueData({...valueData, seed:event.target.value})} />

                        <Typography variant='h3'
                            sx={{
                                textAlign:'center',
                                color:'rgb(0, 179, 255)',
                                mt:8, mb:5,
                                textShadow:".05em .05em 0 rgb(60, 70, 75)"
                                }}>
                            Dataset Binarization</Typography>

                        <FormControlLabel control={<Checkbox/>} label="Check if you want to binarize the dataset" checked={checkData.binarize} onChange={(event)=>setCheckData({...checkData, binarize:event.target.checked})}/>
                    
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
                        <PreFiltering checkData={checkData} setCheckData={setCheckData} valueData={valueData} setValueData={setValueData}/>
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
                        <TestSplitting checkData={checkData} setCheckData={setCheckData} valueData={valueData} setValueData={setValueData}
                                paramData={paramData} setParamData={setParamData} />

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
                        <ValidationSplitting checkData={checkData} setCheckData={setCheckData} valueData={valueData} setValueData={setValueData} 
                                paramData={paramData} setParamData={setParamData}/>

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
                            color:'rgb(0, 179, 255)',
                            mt:9, mb:9,
                            textShadow:".05em .05em 0 rgb(60, 70, 75)"
                            }}>
                            Dataset Upload</Typography>                      
                        <Typography variant='h4' sx={{mb:5}}>Upload dataset in <strong>.tsv</strong> format  </Typography>
                        <Input type='file' name="dataset_file" id="dataset_file"  accept=".tsv" required onChange={handleChangeFile}/>
        
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

                        {/* <Button type='submit' variant='contained' color='success' onClick={datasetSubmit}
                                    sx={{
                                        my:8,
                                        width:350,
                                        height:65,
                                        fontSize:'18px',
                                        borderRadius:'10px',
                                        }}>
                                        Preprocess with Dataset strategy</Button> */}
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