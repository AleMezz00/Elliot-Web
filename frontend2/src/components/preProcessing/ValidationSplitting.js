import React, {useState, useEffect} from 'react';
import Progressbar from '../Progressbar.js';
import '../../styles/preProcessing/DataSetForm.css'
import Form from './Form.js';
import { Box, Checkbox, FilledInput, FormControlLabel, FormGroup, Input } from '@mui/material';


function ValidationSplitting(props){

    const[checkTime, setTime] = useState(false);
    const[checkTemporal, setTemporal] = useState(false);
    const[checkRandomSubSampling, setRandomSubSampling] = useState(false);
    const[checkRandomCross, setRandomCross] = useState(false);

    const checkForm=props.checkData;
    const setCheckForm=props.setCheckData;
    const valueForm=props.valueData;
    const setValueForm=props.setValueData;
    const paramForm=props.paramData;
    const setParamForm=props.setParamData;
    
    

    return(
        <div className='step3'>
        <h2 className='preFTitle'>Validation Splitting </h2>

        <div>
          <FormGroup sx={{alignItems:'center'}}>
             <FormControlLabel label="Fixed Timestamp" control={<Checkbox/>} onClick={()=>setTime(!checkTime)}
             checked={checkForm.fixt2} onChange={(event)=>setCheckForm({...checkForm,fixt2:event.target.checked})}/>
             {checkTime ? (
                <FormControlLabel label="Input timestamp in UNIX fromat or type the string best" control={<input type="number" className='inputNumber' size="small"/>}
                value={valueForm.fixt_value2} onChange={(event)=>setValueForm({...valueForm,fixt_value2:event.target.value})}/>
             ): (<></>)}     
          </FormGroup>
        </div>

        <div>
        
          <FormGroup sx={{alignItems:'center'}}>
             <FormControlLabel label="Temporal Hold-Out" control={<Checkbox/>} onClick={()=>setTemporal(!checkTemporal)}
             checked={checkForm.tho2} onChange={(event)=>setCheckForm({...checkForm, tho2:event.target.checked})}/>
             {checkTemporal ? (
                <FormGroup>
                    <FormControlLabel label="Input a value for leave-n-out" control={<input type="number" className='inputNumber' size="small"/>}
                    value={valueForm.tho_n_out2} onChange={(event)=>setValueForm({...valueForm,tho_n_out2:event.target.value})}/>
                    <FormControlLabel label="Input a value for test ratio" control={<input type="number" className='inputNumber' size="small"/>}
                    value={valueForm.tho_range2} onChange={(event)=>setValueForm({...valueForm,tho_range2:event.target.value})} />  
                
                 </FormGroup> ): (<></>)}     
          </FormGroup>
        
        </div>


        <div>
        <FormGroup sx={{alignItems:'center'}}>
             <FormControlLabel label="Random SubSampling" control={<Checkbox/>} onClick={()=>setRandomSubSampling(!checkRandomSubSampling)}
             checked={checkForm.rand_sub2} onChange={(event)=>setCheckForm({...checkForm, rand_sub2:event.target.checked})}/>
             {checkRandomSubSampling ? (
                <FormControlLabel label="Input a value test ratio" control={<input type="number" className='inputNumber' size="small"/>}
                value={valueForm.rand_sub_range2} onChange={(event)=>setValueForm({...valueForm,rand_sub_range2:event.target.value})}/>
             ): (<></>)}     
          </FormGroup>
        </div>


        <div>
        <FormGroup sx={{alignItems:'center'}}>
             <FormControlLabel label="Random Cross Validation" control={<Checkbox/>} onClick={()=>setRandomCross(!checkRandomCross)}
             checked={checkForm.rand_cross2} onChange={(event)=>setCheckForm({...checkForm, rand_cross2:event.target.checked})}/>
             {checkRandomCross ? (
                <FormControlLabel label="Input a value for the folds" control={<input type="number" className='inputNumber' size="small"/>}
                value={valueForm.rand_cross_folds2} onChange={(event)=>setValueForm({...valueForm,rand_cross_folds2:event.target.value})}/>
             ): (<></>)}     
          </FormGroup>
        </div>

        </div>  
    );

}

export default ValidationSplitting;