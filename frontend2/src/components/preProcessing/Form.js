import React from 'react';
import { useState} from 'react';
import DatasetForm from './DatasetForm.js';
import HierarchyForm from './HierarchyForm.js';
import FixedForm from './FixedForm.js'
import '../../styles/preProcessing/Form.css'

function Form(){

    const[step,setStep]=useState(0);
    const[preStep, setPreStep]=useState(false);

    

    //stretegy
    const [dataset, setDataset]= useState(false);
    const [fixed, setFixed]= useState(false);
    const [hierarchy, setHierarchy]= useState(false);



   if(!preStep){
    return(
      <div className='formContainer'>
        <div className='intro_vis1'>
           <h1 className='introTit'>Welcome !</h1>
           <h2 className='introDesc'>Here you can choose among 3 different loading strategies,
             8 prefiltering approaches and several splitting strategies.</h2>
          
            <button className='start' onClick={()=>setPreStep(true)}>Let's start</button>
        </div>        
      </div>
    );
   }

   if (preStep){
    if(!dataset && !fixed && !hierarchy){
      return(
        <div className='formContainer'>
          <div className='intro_vis2'>
          <div id='strategy'>
          <h2 className='titleSt'>Loading strategy</h2>
          </div>
          <button className='btt_data' onClick={()=>setDataset(true)} >Dataset</button>
          <button className='btt_fix'onClick={()=>setFixed(true)}>Fixed</button>
          <button className='btt_hier'onClick={()=>setHierarchy(true)}>Hierarchy</button>
          </div>
        </div>
      );
    } else if(dataset && !fixed && !hierarchy){
      return(
       <DatasetForm step={step} setStep={setStep}/>
      );
    } else if(!dataset && fixed && !hierarchy){
      return(
       <FixedForm step={step} setStep={setStep}/>
      );
    } else if(!dataset && !fixed && hierarchy){
      return(
       <HierarchyForm step={step} setStep={setStep}/>
      );
    }
  }
}


export default Form;