import React, {useState, useEffect} from 'react';
import { Box, Checkbox, Container, FormControlLabel, FormGroup, Input, FormLabel, Typography } from '@mui/material';


function ValidationSplitting(props){

    const[checkTime, setTime] = useState(false);
    const[checkTemporal, setTemporal] = useState(false);
    const[checkRandomSubSampling, setRandomSubSampling] = useState(false);
    const[checkRandomCross, setRandomCross] = useState(false);

    const requestState= props.requestState;
    const setRequestState = props.setRequestState;
    
    

    return(
      <Container>
           <Typography variant='h2'
            sx={{
               textAlign:'center',
               color:'rgb(0, 179, 255)',
               mt:6, mb:6,
               textShadow:".05em .05em 0 rgb(60, 70, 75)"
               }}>
               Validation Splitting </Typography>

         <Box sx={{mt:2}}>
            <FormGroup sx={{alignItems:'center'}}>
               <FormControlLabel label="Fixed Timestamp" control={<Checkbox/>} onClick={()=>setTime(!checkTime)}
               checked={requestState.validation_fixed_timestamp} onChange={(event)=>setRequestState({...requestState,validation_fixed_timestamp:event.target.checked})}/>
               {checkTime ? (
               <FormControlLabel label="Input timestamp in UNIX fromat or type the string best" control={<Input type="number" className='inputNumber' size="small"/>}
               value={requestState.validation_fixed_timestamp_value} onChange={(event)=>setRequestState({...requestState,validation_fixed_timestamp_value:event.target.value})}/>
               ): (<></>)}     
            </FormGroup>
         </Box>

         <Box sx={{mt:2}}>
            <FormGroup sx={{alignItems:'center'}}>
               <FormControlLabel label="Temporal Hold-Out" control={<Checkbox/>} onClick={()=>setTemporal(!checkTemporal)}
               checked={requestState.validation_temporal_hold_out} onChange={(event)=>setRequestState({...requestState, validation_temporal_hold_out:event.target.checked})}/>
               {checkTemporal ? (
                  <FormGroup>
                     <FormControlLabel label="Input a value for leave-n-out" control={<Input type="number" className='inputNumber' size="small"/>}
                     value={requestState.validation_temporal_hold_out_test_ratio} onChange={(event)=>setRequestState({...requestState,validation_temporal_hold_out_test_ratio:event.target.value})}/>
                     <FormControlLabel label="Input a value for test ratio" control={<Input type="number" className='inputNumber' size="small"/>}
                     value={requestState.validation_temporal_hold_out_leave_n_out} onChange={(event)=>setRequestState({...requestState,validation_temporal_hold_out_leave_n_out:event.target.value})} />  
                  </FormGroup> ): (<></>)}     
            </FormGroup>
         </Box>

         <Box sx={{mt:2}}>
            <FormGroup sx={{alignItems:'center'}}>
               <FormControlLabel label="Random SubSampling" control={<Checkbox/>} onClick={()=>setRandomSubSampling(!checkRandomSubSampling)}
               checked={requestState.validation_random_subsampling} onChange={(event)=>setRequestState({...requestState, validation_random_subsampling:event.target.checked})}/>
               {checkRandomSubSampling ? (
               <FormControlLabel label="Input a value test ratio" control={<Input type="number" className='inputNumber' size="small"/>}
               value={requestState.validation_random_subsampling_test_ratio} onChange={(event)=>setRequestState({...requestState,validation_random_subsampling_test_ratio:event.target.value})}/>
               ): (<></>)}     
            </FormGroup>
         </Box>

         <Box sx={{mt:2}}>
            <FormGroup sx={{alignItems:'center'}}>
               <FormControlLabel label="Random Cross Validation" control={<Checkbox/>} onClick={()=>setRandomCross(!checkRandomCross)}
               checked={requestState.validation_random_cross_validation} onChange={(event)=>setRequestState({...requestState, validation_random_cross_validation:event.target.checked})}/>
               {checkRandomCross ? (
               <FormControlLabel label="Input a value for the folds" control={<Input type="number" className='inputNumber' size="small"/>}
               value={requestState.validation_random_cross_validation_folds} onChange={(event)=>setRequestState({...requestState,validation_random_cross_validation_folds:event.target.value})}/>
               ): (<></>)}     
            </FormGroup>
         </Box>
      </Container>  
    );
}

export default ValidationSplitting;