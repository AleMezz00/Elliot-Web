import React,{useState,useEffect} from 'react';
import Progressbar from '../Progressbar.js'
import SimpleMetrics from './SimpleMetrics.js';
import ComplexMetrics from './ComplexMetrics.js';
import '../../styles/evaluation/EvForm.css';
import Cutoffs from './Cutoffs.js';
import { Checkbox,FormControlLabel, FormGroup } from '@mui/material';

function EvForm(){

    const [evStep,setEvStep]=useState(0);

    const next =()=>{
        setEvStep(evStep+1);
      }
        
      const previous=()=>{
        setEvStep(evStep-1);
      }

    if(evStep===0){
        return(
            <div className='evFormContainer'>
                <div className='div_Ev_0'>
                    <h1 className='EvTit'>Welcome !</h1>
                    <h2 className='EvDescr'>
                        Here you can setup evaluation configuration and simple/complex metrics 
                    </h2>
                    <button className='start_Ev' onClick={next}>Let's start !</button>
                </div>
            </div> 
        );
    }
    if(evStep === 1){
        return(
            <div className='evFormContainer'>
            <div className='div_Ev_1'>
            <div className='barra'><Progressbar step={evStep} initStyle='twenty%'/></div>
                <form action='' method='POST' encType="multipart/form-data" id='evForm'>
                <h1 className='EvStrategy'>Evaluation</h1>
                        <div className='fileCard'>
                            <h2 className='fileDesc'>Input <strong>Train</strong> dataset in <strong>.tsv</strong> format</h2>
                            <input type='file' name="train_dataset" id="train_dataset" className="form-control-Ev" required/>
                        </div>
                        <div className='fileCard'>
                             <h2 className='fileDesc'>Input <strong>Test</strong> dataset in <strong>.tsv</strong> format</h2>
                            <input type='file' name="test_dataset" id="test_dataset" className="form-control-Ev" required/>
                        </div>
                        <div className='fileCard'>
                            <h2 className='fileDesc'>Input <strong>Recs</strong> dataset in <strong>.tsv</strong> format</h2>
                            <input type='file' name="recs_dataset" id="recs_dataset" className="form-control-Ev" required/>
                        </div>
                </form>
                </div>        
                 <button className='btt_next_Ev_0' onClick={next}>Next</button>
                <button className='btt_prev_Ev_0'onClick={previous}>Previous</button>
                <button className='btt_reset_Ev_0' onClick={()=>setEvStep(0)}>Reset all input</button>      
            </div>
        );
    }    
    if(evStep === 2){
        return(
            <div className='evFormContainer'>
                <div className='div_Ev_2'>
                <div className='barra'><Progressbar step={evStep} initStyle='twenty%'/></div>
                <form action='' method='POST' encType="multipart/form-data" id='evForm'>
                    <div className='Rev_Container'>
                        <h2 className='Rev_Tit_Ev'>Relevance treshold</h2>
                        <input type="number" id="treshold" name="treshold" className='optInput_Ev'/>
                    </div>
                    <div className='Top_Container'>
                        <h2 className='Top_Tit_Ev'>Top K</h2>
                        <input type='number' id='top_k' name='top_k' className='optInput_Ev' />
                    </div>     
                    <div className='check_div_Ev'>
                       <FormGroup>
                            <FormControlLabel control={<Checkbox/>} label="Paired Text" className='check_Paired_Ev'/>
                            <FormControlLabel control={<Checkbox/>} label="Wilicoxon Text" className='check_Wili_Ev'/>
                        </FormGroup> 
                    </div>
                    </form>
                    </div>
                    <button className='btt_next_Ev_0' onClick={next}>Next</button>
                    <button className='btt_prev_Ev_0'onClick={previous}>Previous</button>
                    <button className='btt_reset_Ev_0' onClick={()=>setEvStep(0)}>Reset all input</button>
            </div>   
        );
    }
    if(evStep === 3){
        return(
            <div className='evFormContainer'>
                <div className='div_Ev_3'>
            <div className='barra'><Progressbar step={evStep} initStyle='twenty%'/></div>
                <form action='' method='POST' encType="multipart/form-data" id='evForm'>
                <Cutoffs />
                </form>
                </div>
                <button className='btt_next_Ev_0' onClick={next}>Next</button>
                <button className='btt_prev_Ev_0'onClick={previous}>Previous</button>
                <button className='btt_reset_Ev_0' onClick={()=>setEvStep(0)}>Reset all input</button>
            </div>
        );
    }
    if (evStep === 4){
        return(
            <div className='evFormContainer'>
            <div className='div_Ev_4'>
            <div className='barra'><Progressbar step={evStep} initStyle='twenty%'/></div>
                <form action='' method='POST' encType="multipart/form-data" id='evForm'>
                <SimpleMetrics/>
                </form>
           </div>
                <button className='btt_next_Ev_0' onClick={next}>Next</button>
                <button className='btt_prev_Ev_0'onClick={previous}>Previous</button>
                <button className='btt_reset_Ev_0' onClick={()=>setEvStep(0)}>Reset all input</button>
           </div>
        );
    }

    if (evStep === 5){
        return(
            <div className='evFormContainer'>
            <div className='div_Ev_5'>
            <div className='barra'><Progressbar step={evStep} initStyle='twenty%'/></div>
                <form action='' method='POST' encType="multipart/form-data" id='evForm'>
                    <ComplexMetrics/>
                   </form>
                 
                <div id='evLoading' hidden>
                <div className="lds-ripple"><div></div><div></div></div>
                    <span className='load_info'> Data processing in progress</span>
                </div> 
                                    
                <div id='evResult' hidden>
                    <h1 className='completedTit'>Processing completed</h1>
                    <p className='compl_content'>Your dataset has been successfully processed!
                        <a href='' className="download_link" id="evDownloadDF">Download ZIP</a>
                    </p>
                </div>   
            </div>  
                <button className='btt_prev_Ev_0'onClick={previous}>Previous</button>
                <button className='btt_reset_Ev_0' onClick={()=>setEvStep(0)}>Reset all input</button>
                <input type='submit'className='btt_run_Ev' value='Evaluate with this options' />
            </div>
        );
    } 
}

export default EvForm;