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
    binarize:false,
    glob_thresh:false,
    us_av:false,
    us_k:false,
    it_k:false,
    iter_k:false, 
    n_k:false,  
    cold_us:false,
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
    seed: 0,
    glob_thresh_value:'',
    us_av_value:'',
    us_k_value:'',
    it_k_value:'',
    iter_k_value:'',
    n_value:'',
    k_value:'',
    cold_us_value:'',
    fixt_value:'',
    tho_range:'',
    tho_n_out:'',
    rand_sub_range:'',
    rand_sub_n_out:'',
    rand_sub_folds:'',
    fixt_value2:'',
    tho_range2:'',
    tho_n_out2:'',
    rand_sub_range2:'',
    rand_sub_n_out2:'',
    rand_sub_folds2:'',
    rand_cross_folds2:'',
    rand_cross_folds:'',
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
      
  }
      
  const previous=()=>{
      props.setStep(props.step-1);
  }

  const reset=()=>{
      props.setStep(0);
      setParamData(defaultParamState);
      setCheckData(defaultCheckState)
      setValueData(defaultValueState)
  }

  const change = ()=>{
    props.setStep(5);
  }

 
   //fetch     
  const datasetSubmit=(e)=>{
    e.preventDefault()
    console.log(e.target)
    //let form=document.getElementById('form_data');
      if(true){
        //document.getElementsByClassName('navButt').style.display='none';
        fetch("http://127.0.0.1:5000/api/v1/preprocessing-json", {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({checkData, paramData, valueData, fileData})
      }).then(res => res.json())
      .then(data => {
          document.getElementById('downloadDF').setAttribute('href', `/api/v1/preprocessing/download/${data}`);
          document.getElementById('loading').setAttribute('hidden', true);
          document.getElementById('result').setAttribute('hidden',false);
      });
      document.getElementById('loading').setAttribute('hidden', false);
  
      }else document.getElementById('disclaimer').innerHTML='Go back and fill required fields';
    }

    return(
        <Container sx={{mt:2}}>
            <form action="" method="POST" encType="multipart/form-data" id="form_data">
            <input type='text' name='loading_strategy' id='loading_strategy' value={props.strategy} readOnly hidden/>
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
                        <Typography variant='h4' sx={{mb:5}}>Upload dataset in <strong>.tvs</strong> format  </Typography>
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

                        <Button type='submit' variant='contained' color='success' onClick={datasetSubmit}
                                    sx={{
                                        my:8,
                                        width:350,
                                        height:65,
                                        fontSize:'18px',
                                        borderRadius:'10px',
                                        }}>
                                        Preprocess with Dataset strategy</Button>
                    </FormGroup>          
                </Box> 
                } 

                {step===5 &&
                <Box>
                    <Form/>       
                </Box> 
                } 
            </form>       
        </Container>        
    )

}

export default DatasetForm;