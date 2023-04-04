import React, {useState, useEffect} from 'react';
import { Box, Checkbox, FormControlLabel, FormGroup, FormLabel, Input, Container, Typography } from '@mui/material';


function TestSplitting(props){

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
               Test Splitting </Typography>

         <Box sx={{mt:2}}>
            <FormGroup sx={{alignItems:'center'}}>
               <FormControlLabel label="Fixed Timestamp" control={<Checkbox/>} onClick={()=>setTime(!checkTime)}
               checked={requestState.text_fixed_timestamp} onChange={(event)=>setRequestState({...requestState,text_fixed_timestamp:event.target.checked})}/>
               {checkTime ? (
               <FormControlLabel label="Input timestamp in UNIX format or type the string best" control={<Input type="text" className='inputNumber' size="small"/>}
               value={requestState.test_fixed_timestamp_value} onChange={(event)=>setRequestState({...requestState,test_fixed_timestamp_value:event.target.value})}/>
               ): (<></>)}     
            </FormGroup>
        </Box>
 
        <Box sx={{mt:2}}>
            <FormGroup sx={{alignItems:'center'}}>
               <FormControlLabel label="Temporal Hold-Out" control={<Checkbox/>} onClick={()=>setTemporal(!checkTemporal)}
               checked={requestState.test_temporal_hold_out} onChange={(event)=>setRequestState({...requestState, test_temporal_hold_out:event.target.checked})}/>
               {checkTemporal ? (
                  <FormGroup>
                     <FormControlLabel label="Input a value for leave-n-out" control={<Input type="number" className='inputNumber' size="small"/>}
                     value={requestState.test_temporal_hold_out_leave_n_out} onChange={(event)=>setRequestState({...requestState,test_temporal_hold_out_leave_n_out:event.target.value})}/>
                     <FormControlLabel label="Input a value for test ratio" control={<Input type="number" className='inputNumber' size="small"/>}
                     value={requestState.test_temporal_hold_out_test_ratio} onChange={(event)=>setRequestState({...requestState,test_temporal_hold_out_test_ratio:event.target.value})} />                 
                  </FormGroup> ): (<></>)}     
            </FormGroup>
         </Box>

         <Box sx={{mt:2}}>
            <FormGroup sx={{alignItems:'center'}}>
               <FormControlLabel label="Random SubSampling" control={<Checkbox/>} onClick={()=>setRandomSubSampling(!checkRandomSubSampling)}
               checked={requestState.test_random_subsampling} onChange={(event)=>setRequestState({...requestState, test_random_subsampling:event.target.checked})}/>
               {checkRandomSubSampling ? (
               <FormControlLabel label="Input a value of Core" control={<Input type="number" className='inputNumber' size="small"/>}
               value={requestState.test_temporal_hold_out_test_ratio} onChange={(event)=>setRequestState({...requestState,test_temporal_hold_out_test_ratio:event.target.value})} />
               ): (<></>)}     
            </FormGroup>
         </Box> 

         <Box sx={{mt:2}}>
            <FormGroup sx={{alignItems:'center'}}>
               <FormControlLabel label="Random Cross Validation" control={<Checkbox/>} onClick={()=>setRandomCross(!checkRandomCross)}
               checked={requestState.test_random_cross_validation} onChange={(event)=>setRequestState({...requestState, test_random_cross_validation:event.target.checked})}/>
               {checkRandomCross ? (
               <FormControlLabel label="Input a value for the folds" control={<Input type="number" className='inputNumber' size="small"/>}
               value={requestState.test_random_cross_validation_folds} onChange={(event)=>setRequestState({...requestState,test_random_cross_validation_folds:event.target.value})}/>
               ): (<></>)}     
            </FormGroup>
         </Box>
 
      </Container>  
    );
}

export default TestSplitting;