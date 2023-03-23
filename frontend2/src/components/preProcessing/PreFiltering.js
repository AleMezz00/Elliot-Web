import React, {useState, useEffect} from 'react';

import { Box, Checkbox, Container, FilledInput, FormControlLabel, FormGroup, FormLabel, Input} from '@mui/material';


function PreFiltering(props){

    const[checkGlobal, setcheckGlobal] = useState(false);
    const[checkUserK, setUserK] = useState(false);
    const[checkItemK, setItemK] = useState(false);
    const[checkIterativeK, setIterativeK] = useState(false);
    const[checkNround, setNround] = useState(false);
    const[checkCold, setCold] = useState(false);
    
    const checkForm=props.checkData;
    const setCheckForm=props.setCheckData;
    const valueForm=props.valueData;
    const setValueForm=props.setValueData;

    return(
        <Container className='step1'>
        <FormLabel className='preFTitle'>Pre-filtering</FormLabel>

        <Box>
          <FormGroup sx={{alignItems:'center'}}>
             <FormControlLabel label="Global Threshold" control={<Checkbox/>} checked={checkForm.glob_tresh}  onClick={()=>setcheckGlobal(!checkGlobal)}
             onChange={(event)=>{setCheckForm({...checkForm,glob_thresh:event.target.checked})}}/>
             {checkGlobal ? (
                <FormControlLabel label="  Input a value of a Global Threshold" control={<Input type="number" className='inputNumber' size="small"/>}
                value={valueForm.glob_tresh_value} onChange={(event)=>{setValueForm({...valueForm,glob_thresh_value:event.target.value})}}/>
             ): (<></>)}     
          </FormGroup>
        </Box>

        <Box sx={{alignItems:'center'}}>   
             <FormControlLabel  label="User Average" control={<Checkbox/>}
             checked={checkForm.us_av} onChange={(event)=>{setCheckForm({...checkForm,us_av:event.target.checked})}}/>           
        </Box>

        <Box>
        
          <FormGroup sx={{alignItems:'center'}}>
             <FormControlLabel label=" User K-Core" control={<Checkbox/>} checked={checkForm.us_k}  onChange={(event)=>{setCheckForm({...checkForm,us_k:event.target.checked})}} onClick={()=>setUserK(!checkUserK)}/>
             {checkUserK ? (
                <FormControlLabel label="  Input a value of Core " control={<Input type="number" className='inputNumber' size="small"/>}
                value={valueForm.us_k_value} onChange={(event)=>{setValueForm({...valueForm,us_k_value:event.target.value})}}/>
             ): (<></>)}     
          </FormGroup>
        
        </Box>

        <Box>
        <FormGroup sx={{alignItems:'center'}}>
             <FormControlLabel label=" Item K-Core" control={<Checkbox/>}  onClick={()=>setItemK(!checkItemK)}
             checked={checkForm.it_k} onChange={(event)=>{setCheckForm({...checkForm,it_k:event.target.checked})}} />
             {checkItemK ? (
                <FormControlLabel label="  Input a value of Core" control={<Input type="number" className='inputNumber' size="small"/>}
                value={valueForm.it_k_value} onChange={(event)=>{setValueForm({...valueForm,it_k_value:event.target.value})}} />
             ): (<></>)}     
          </FormGroup>
        </Box>

        <Box>
        <FormGroup sx={{alignItems:'center'}}>
             <FormControlLabel label=" Iterative K-Core" control={<Checkbox/>}  onClick={()=>setIterativeK(!checkIterativeK)}
             checked={checkForm.iter_k} onChange={(event)=>{setCheckForm({...checkForm,iter_k:event.target.checked})}}/>
             {checkIterativeK ? (
                <FormControlLabel label="  Input a value of Core" control={<Input type="number" className='inputNumber' size="small"/>}
                value={valueForm.iter_k_value} onChange={(event)=>{setValueForm({...valueForm,iter_k_value:event.target.value})}}/>
             ): (<></>)}     
          </FormGroup>
        </Box>

        <Box>
        <FormGroup sx={{alignItems:'center'}}>
             <FormControlLabel label=" N round K-core" control={<Checkbox/>} checked={checkForm.n_k}   onClick={()=>setNround(!checkNround)}
             onChange={(event)=>{setCheckForm({...checkForm,n_k:event.target.checked})}}/>
             {checkNround ? (
                <FormGroup>
                    <FormControlLabel label="  Input a value of a core" control={<Input type="number" className='inputNumber' size="small"/>}
                    value={valueForm.k_value} onChange={(event)=>{setValueForm({...valueForm,k_value:event.target.value})}}/>
                    <FormControlLabel label="  Input a value of a round" control={<Input type="number" className='inputNumber' size="small"/>}
                    value={valueForm.n_value} onChange={(event)=>{setValueForm({...valueForm,n_value:event.target.value})}}/>  
                </FormGroup>
               ): (<></>)}     
          </FormGroup>
        </Box>

        <Box>
        <FormGroup sx={{alignItems:'center'}}>
             <FormControlLabel label=" Cold User" control={<Checkbox/>} onClick={()=>setCold(!checkCold)}
             checked={checkForm.cold_us} onChange={(event)=>{setCheckForm({...checkForm,cold_us:event.target.checked})}}/>
             {checkCold ? (
                <FormControlLabel label=" Input a value of threshold for cold user" control={<Input type="number" className='inputNumber' size="small"/>}
                value={valueForm.cold_us_value} onChange={(event)=>{setValueForm({...valueForm,cold_us_value:event.target.value})}}/>
             ): (<></>)}     
          </FormGroup>
        </Box>

        </Container>  
    );

}

export default PreFiltering;