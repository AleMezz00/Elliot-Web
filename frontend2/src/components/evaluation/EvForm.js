import React,{useState,useEffect} from 'react';
import Progressbar from '../Progressbar.js'
import SimpleMetrics from './SimpleMetrics.js';
import ComplexMetrics from './ComplexMetrics.js';
import '../../styles/evaluation/EvForm.css';
import Cutoffs from './Cutoffs.js';
import { Box, Button, ButtonGroup, Checkbox,Container,FormControlLabel, FormGroup, Typography, Input} from '@mui/material';
import Footer from '../Footer.js';

function EvForm(){

    const [evStep,setEvStep]=useState(-1);
    

    const defaultEv = {
        
        tresh:0,
        topK:0,
        paired:false,
        wilico:false,

        auc:false,
        gauc:false,
        lauc:false,
        f1:false,
        hr:false,
        map:false,
        mar:false,
        mrr:false,
        nDCG:false,
        precision:false,
        recall:false,

        aclt:false,
        aplt:false,
        arp:false,
        popREo:false,
        popRSP:false,

        itCov:false,
        numRet:false,
        usCov:false,
        usCovATN:false,

        gini:false,
        shann:false,
        sRec:false,

        mae:false,
        mse:false,
        rmse:false,

        efd:false,
        epc:false,

        dsc:false,
        dscInput:0,
        extF1:false,
        extpopREO:false,
        extpopRSP:false,
        extEFD:false,
        extEPC:false,

        fairness:{}


    }

    const [dataEv, setDataEv]= useState(defaultEv);



    const next =()=>{
        setEvStep(evStep+1);
      }
        
      const previous=()=>{
        setEvStep(evStep-1);
      }

      const reset=()=>{
        setEvStep(0);
        setDataEv(defaultEv);

      }

      const evFormSubmit=()=>{

        const form=document.getElementById('evForm');
        document.getElementById('evFormSubmit').addEventListener('click', ()=>{
            if(form.checkValidity()){
              document.getElementsByClassName('evButton').styley='display:none';
              fetch('/api/v1/recommendationmodel-json', {
                method: 'POST',
                body: new FormData(form)
            }).then(res => res.json())
            .then(data => {
                document.getElementById('evDownloadDF').setAttribute('href', `/api/v1/evaluation/download`);
                document.getElementById('evLoading').setAttribute('hidden', true);
                document.getElementById('evResult').setAttribute('hidden',false);
            });
            document.getElementById('evLoading').setAttribute('hidden', false);
        
            }else document.getElementById('evSubmitError').innerHTML='Go back and fill required fields';
          })
        }

    return(
        <Container>
            {evStep=== (-1) &&
                <Box>
                    <Typography variant='h2' 
                   sx={{
                    textAlign:'center',
                    color:'rgb(0, 179, 255)',
                    mt:15, mb:15,
                    textShadow:".05em .05em 0 rgb(60, 70, 75)"
                    }}
                    >Welcome in Evaluation section</Typography>

                    <Typography variant='h4' 
                        sx={{textAlign:'center',}}>
                    Here you can setup evaluation configuration and simple/complex metrics </Typography>
                

                    <Box sx={{textAlign:'center'}}>
                    <Button type='button' variant='contained' size='large' onClick={next} 
                    sx={{
                        mt:15,
                        mb:39,
                        width:200,
                        height:60,
                        fontSize:'19px',
                        borderRadius:'10px'
                       }}>Let's start</Button>
                    </Box>
                </Box>
            }


            <form action='' method='POST' encType="multipart/form-data" id='evForm'>
                {evStep===0 &&
                    <Box sx={{mt:7, textAlign:'center'}}>
                        <Progressbar step={evStep} initStyle='twenty%'/>
                        <Typography variant='h2'
                            sx={{
                                textAlign:'center',
                                  mt:7, mb:5,
                                color:'rgb(0, 179, 255)',
                                textShadow:".05em .05em 0 rgb(60, 70, 75)"
                                }}>Evaluation</Typography>
                      
                        <Typography variant='h4' sx={{mb:2}} >Input <strong>Train</strong> dataset in <strong>.tsv</strong> format</Typography>
                        <Input type='file' name="train_dataset" id="train_dataset" sx={{mb:2}}  required/>
                    
                        <Typography variant='h4' sx={{mb:2}}>Input <strong>Test</strong> dataset in <strong>.tsv</strong> format</Typography>
                        <Input type='file' name="test_dataset" id="test_dataset" sx={{mb:2}} required/>
                    
                        <Typography variant='h4' sx={{mb:2}}>Input <strong>Recs</strong> dataset in <strong>.tsv</strong> format</Typography>
                        <Input type='file' name="recs_dataset" id="recs_dataset" sx={{mb:2}} required/>

                        <Box sx={{textAlign:'center', mb:22.8}}>
                        <ButtonGroup size='large' sx={{mt:7}}>
                            <Button  type='button' variant='contained' color='error' onClick={reset}
                              sx={{
                                mx:8,
                                width:160,
                                height:55,
                                fontSize:'15px',
                                borderRadius:'10px',
                            }}>Reset all input</Button>  
                            <Button type='button' variant='contained' onClick={previous}         
                                            sx={{
                                            mx:8,
                                            width:160,
                                            height:55,
                                            fontSize:'18px',
                                            borderRadius:'10px',
                                            }}
                                            >Previous</Button>  
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
                        </Box>
                    </Box>
                }


                 {evStep===1 &&
                    <Box sx={{mt:7, textAlign:'center'}}>
                        <Progressbar step={evStep} initStyle='twenty%'/>
                        <Typography variant='h3'
                            sx={{
                                textAlign:'center',
                                  mt:5, mb:3,
                                color:'rgb(0, 179, 255)',
                                textShadow:".05em .05em 0 rgb(60, 70, 75)"
                                }}>Relevance Treshold</Typography>
                        <Input type="number" id="treshold" name="treshold" value={dataEv.tresh} onChange={(event)=>setDataEv({...dataEv, tresh:event.target.value})} />
                    
                        <Typography variant='h3'
                            sx={{
                                textAlign:'center',
                                  mt:5, mb:3,
                                color:'rgb(0, 179, 255)',
                                textShadow:".05em .05em 0 rgb(60, 70, 75)"
                                }}>Top K</Typography>
                        <Input type='number' id='top_k' name='top_k' value={dataEv.topK} onChange={(event)=>setDataEv({...dataEv, topK:event.target.value})} />
                    
                       <FormGroup  sx={{mt:5,alignItems:'center'}}>
                            <FormControlLabel control={<Checkbox/>} label="Paired Text" checked={dataEv.paired} onChange={(event)=>setDataEv({...dataEv, paired:event.target.checked})}  />
                            <FormControlLabel sx={{mt:2}} control={<Checkbox/>} label="Wilicoxon Text" checked={dataEv.wilico} onChange={(event)=>setDataEv({...dataEv, wilico:event.target.checked})}  />
                        </FormGroup> 

                        <Box sx={{textAlign:'center',mb:28}}>
                        <ButtonGroup size='large' sx={{mt:7}}> 
                        <Button  type='button' variant='contained' color='error' onClick={reset}
                              sx={{
                                mx:8,
                                width:160,
                                height:55,
                                fontSize:'15px',
                                borderRadius:'10px',
                            }}>Reset all input</Button> 
                            <Button type='button' variant='contained' onClick={previous}         
                                            sx={{
                                            mx:8,
                                            width:160,
                                            height:55,
                                            fontSize:'18px',
                                            borderRadius:'10px',
                                            }}
                                            >Previous</Button>
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
                        </Box>

                    </Box>
                }
                 {evStep===2 &&
                    <Box sx={{mt:5}}>
                        <Progressbar step={evStep} initStyle='twenty%'/>

                        <Cutoffs/>

                        <Box sx={{textAlign:'center',mb:6}}>
                        <ButtonGroup size='large' sx={{mt:7}}> 
                        <Button  type='button' variant='contained' color='error' onClick={reset}
                              sx={{
                                mx:8,
                                width:160,
                                height:55,
                                fontSize:'15px',
                                borderRadius:'10px',
                            }}>Reset all input</Button> 
                            <Button type='button' variant='contained' onClick={previous}         
                                            sx={{
                                            mx:8,
                                            width:160,
                                            height:55,
                                            fontSize:'18px',
                                            borderRadius:'10px',
                                            }}
                                            >Previous</Button>
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
                        </Box>
                    </Box>
                }
                 {evStep===3 &&
                    <Box sx={{mt:5}}>
                        <Progressbar step={evStep} initStyle='twenty%'/>

                        <SimpleMetrics dataEv={dataEv} setDataEv={setDataEv}/>

                        <Box sx={{textAlign:'center',mb:13}}>
                        <ButtonGroup size='large' sx={{mt:7}}> 
                        <Button  type='button' variant='contained' color='error' onClick={reset}
                              sx={{
                                mx:8,
                                width:160,
                                height:55,
                                fontSize:'15px',
                                borderRadius:'10px',
                            }}>Reset all input</Button> 
                            <Button type='button' variant='contained' onClick={previous}         
                                            sx={{
                                            mx:8,
                                            width:160,
                                            height:55,
                                            fontSize:'18px',
                                            borderRadius:'10px',
                                            }}
                                            >Previous</Button>
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
                        </Box>
                        
                    </Box>
                }
                 {evStep===4 &&
                    <Box sx={{mt:4}}>
                        <Progressbar step={evStep} initStyle='twenty%'/>

                        <ComplexMetrics dataEv={dataEv} setDataEv={setDataEv}/>

                        {/* <div id='evLoading' hidden>
                        <div className="lds-ripple"><div></div><div></div></div>
                            <span className='load_info'> Data processing in progress</span>
                        </div> 
                                            
                        <div id='evResult' hidden>
                            <h1 className='completedTit'>Processing completed</h1>
                            <p className='compl_content'>Your dataset has been successfully processed!
                                <a href='' className="download_link" id="evDownloadDF">Download ZIP</a>
                            </p>
                        </div>  */}

                        <Box sx={{textAlign:'center'}}>
                        <ButtonGroup size='large' sx={{mt:7}}> 
                        <Button  type='button' variant='contained' color='error' onClick={reset}
                              sx={{
                                mx:8,
                                width:160,
                                height:55,
                                fontSize:'15px',
                                borderRadius:'10px',
                            }}>Reset all input</Button> 
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
                        </Box>
                        
                        <Box sx={{textAlign:'center'}}>
                            <Button type='submit' variant='contained' color='success' onClick={evFormSubmit}
                                            sx={{
                                                my:4,
                                                width:350,
                                                height:65,
                                                fontSize:'18px',
                                                borderRadius:'10px',
                                                }}>Evaluate with this options</Button>
                        </Box>
                      
                    </Box>
                }
            </form>
        </Container>
    )
}

export default EvForm;