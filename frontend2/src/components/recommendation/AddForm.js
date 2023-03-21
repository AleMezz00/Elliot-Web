import { Checkbox, FormControlLabel, FormGroup } from '@mui/material';
import React,{useState} from 'react';
import Models from  '../../json/models2.json';
import '../../styles/recommendation/AddForm.css'

function AddForm(){

    const[moduleOptions,setModuleOptions]=useState([]);
    const[moduleParameters,setModuleParameters]=useState([]);
    const[kChecked,setkChecked]=useState(false);

    const setModuleTypes=(event)=>{
        let options=[];
        let selected=event.target.value;
        Models.map(element=>{
            if(element.id===selected){
                options=element.models;
            }
            return console.log(options);
        })
        setModuleOptions(options);
    }
    
    const setTypeParameters=(event)=>{
        let parameters=[];
        let type=event.target.value;
        moduleOptions.map(option=>{
            if(option.id===type){
                parameters=option.parameters;
            }
            return console.log(parameters)
        })
        setModuleParameters(parameters);
    }

    return(<>
            <div className='modelSelect'>
                <label forhtml="loading_rec_model" className='modSect'>Select Recommendation Model</label>
                <select name="loading_rec_model" id="loading_rec_model" className="form-control-rec" onChange={setModuleTypes} required>
                    <option value='null' >--- Select one ---</option>
                    {Models.map(model =>{
                        return(<option key={model.id} value={model.id}>{model.id}</option>);
                    })}
                </select>
                <select name="loading_model" id="loading_model" className="form-control-rec" onChange={setTypeParameters} required>
                    <option value='null' >--- Select one ---</option>
                        {moduleOptions.map(option=>{
                            return(<option key={option.id} value={option.id}>{option.name}</option>);
                        })
                       }
                </select>
            </div>

            <div className='fileInputSect'>
                <div className='fileSpace'>
                    <span className='spanFile'>Test file</span>
                    <input type='file' id="test_file" name="test_file" className="formFileIn" required />
                </div>
                <div className='fileSpace'>
                    <span className='spanFile'>Train file</span>
                    <input type='file' id="train_file" name="train_file" className="formFileIn" required />
                </div>
            </div>

            <div className='topKSect'>
                <FormGroup>
                    <FormControlLabel label="Top K" control={<Checkbox/>} onChange={()=>setkChecked(!kChecked)} className='checkInputRec'/>
                    {kChecked ? (
                        <FormControlLabel label=" Input a top K value" control={<input type="number" className='inputNumber' size="small"/>}/>
                    ): (<></>)}   
                </FormGroup>
             </div>

            
            <div className={moduleParameters.length > 0?'parametersSect':'hide'}>
              <h2>Parameters</h2>
                {moduleParameters.map((value,index)=>{
                    return(<>
                    <div className='parameterCard'>
                      <label forhtml={value} className='paramLabel'>{value}</label>
                      <input type='text' key={index} id={value} name={value} className='textK' /><br/>
                    </div>
                    </>
                    );
                })}
            </div>

            <div className='metaParamSect'>
                <FormControlLabel control={<Checkbox/>} label=' Save weights' id='save_weights'/>
                <div className='parameterCard'>
                    <label forhtml='validation_metric' className='tInLab'>Validation metric</label>
                    <input type='text' id='validation_metric' name='validation_metric' palceholder='Input a value for validation metric' className='textInput' />
                </div>
                <div className='parameterCard'>
                    <label forhtml='validation_rate' className='tInLab'>Validation Rate</label>
                    <input type='number' id='validation_rate' name='validation_rate' palceholder='Input a value for validation rate' className='textInput' />
                </div>
                <div className='parameterCard'>
                    <label forhtml='hyper_opt_alg' className='tInLab'>Hyper opt alg</label>
                    <input type='text' id='hyper_opt_alg' name='hyper_opt_alg' palceholder='Input a value for hyper opt alg' className='textInput' />
                </div>
                <div className='parameterCard'>
                    <label forhtml='hyper_max_evals' className='tInLab'>Hyper max evals</label>
                    <input type='text' id='hyper_max_evals' name='hyper_max_evals' palceholder='Input a value for hyper max evals' className='textInput' />
                </div>
            </div>
       </>   
        
    );
}

export default AddForm;