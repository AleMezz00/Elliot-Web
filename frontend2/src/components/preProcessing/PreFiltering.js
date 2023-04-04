import React, {useState, useEffect} from 'react';

import { Box, Checkbox, Container, FilledInput, FormControlLabel, FormGroup, FormLabel, Input, Typography} from '@mui/material';


function PreFiltering(props){

   const requestState = props.requestState;
   const setRequestState = props.setRequestState;

   const[checkGlobal, setcheckGlobal] = useState(false);
    const[checkUserK, setUserK] = useState(false);
    const[checkItemK, setItemK] = useState(false);
    const[checkIterativeK, setIterativeK] = useState(false);
    const[checkNround, setNround] = useState(false);
    const[checkCold, setCold] = useState(false);

    return(
      <Container>
            <Typography variant='h2'  
               sx={{
                  textAlign:'center',
                  color:'rgb(0, 179, 255)',
                  mt:2, mb:3,
                  textShadow:".05em .05em 0 rgb(60, 70, 75)"
                  }}>
               Pre-filtering
            </Typography>

         <Box sx={{mt:1}}>
            <FormGroup sx={{alignItems:'center'}}>
               <FormControlLabel label="Global Threshold" control={<Checkbox/>} checked={requestState.global_treshold}  onClick={()=>setcheckGlobal(!checkGlobal)}
               onChange={(event)=>{setRequestState({...requestState,global_threshold:event.target.checked})}}/>
               {checkGlobal ? (
               <FormControlLabel label="  Input a value of a Global Threshold" control={<Input type="number" className='inputNumber' size="small"/>}
               value={requestState.global_threshold_treshold} onChange={(event)=>{setRequestState({...requestState,global_threshold_treshold:event.target.value})}}/>
               ): (<></>)}     
            </FormGroup>
         </Box>

         <Box sx={{textAlign:'center', mt:1}}>   
            <FormControlLabel  label="User Average" control={<Checkbox/>} checked={requestState.user_average} onChange={(event)=>{setRequestState({...requestState,user_average:event.target.checked})}}/>           
         </Box>

         <Box sx={{mt:1}}>  
            <FormGroup sx={{alignItems:'center'}}>
               <FormControlLabel label="User K-Core" control={<Checkbox/>} checked={requestState.user_k_core}  
               onChange={(event)=>{setRequestState({...requestState,user_k_core:event.target.checked})}} onClick={()=>setUserK(!checkUserK)}/>
               {checkUserK ? (
               <FormControlLabel label=" Input a value of Core " control={<Input type="number" className='inputNumber' size="small"/>}
               value={requestState.user_k_core_core} onChange={(event)=>{setRequestState({...requestState,user_k_core_core:event.target.value})}}/>
               ): (<></>)}     
            </FormGroup>        
         </Box>

         <Box sx={{mt:1}}>
            <FormGroup sx={{alignItems:'center'}}>
               <FormControlLabel label=" Item K-Core" control={<Checkbox/>}  onClick={()=>setItemK(!checkItemK)}
               checked={requestState.item_k_core} onChange={(event)=>{setRequestState({...requestState,item_k_core:event.target.checked})}} />
                {checkItemK ? (
                <FormControlLabel label="  Input a value of Core" control={<Input type="number" className='inputNumber' size="small"/>}
                value={requestState.item_k_core_core} onChange={(event)=>{setRequestState({...requestState,item_k_core_core:event.target.value})}} />
                ): (<></>)}     
            </FormGroup>
         </Box>

         <Box sx={{mt:1}}>
            <FormGroup sx={{alignItems:'center'}}>
               <FormControlLabel label=" Iterative K-Core" control={<Checkbox/>}  onClick={()=>setIterativeK(!checkIterativeK)}
               checked={requestState.iterative_k_core} onChange={(event)=>{setRequestState({...requestState,iterative_k_core:event.target.checked})}}/>
               {checkIterativeK ? (
               <FormControlLabel label="  Input a value of Core" control={<Input type="number" className='inputNumber' size="small"/>}
               value={requestState.iterative_k_core_core} onChange={(event)=>{setRequestState({...requestState,iterative_k_core_core:event.target.value})}}/>
               ): (<></>)}     
            </FormGroup>
         </Box>

         <Box sx={{mt:1}}>
            <FormGroup sx={{alignItems:'center'}}>
               <FormControlLabel label=" N round K-core" control={<Checkbox/>} checked={requestState.n_rounds_k_core}   onClick={()=>setNround(!checkNround)}
               onChange={(event)=>{setRequestState({...requestState,n_rounds_k_core:event.target.checked})}}/>
               {checkNround ? (
                  <FormGroup>
                     <FormControlLabel label="  Input a value of a core" control={<Input type="number" className='inputNumber' size="small"/>}
                     value={requestState.n_rounds_k_core_core} onChange={(event)=>{setRequestState({...requestState,n_rounds_k_core_core:event.target.value})}}/>
                     <FormControlLabel label="  Input a value of a round" control={<Input type="number" className='inputNumber' size="small"/>}
                     value={requestState.n_rounds_k_core_rounds} onChange={(event)=>{setRequestState({...requestState,n_rounds_k_core_rounds:event.target.value})}}/>  
                  </FormGroup>
                  ): (<></>)}     
            </FormGroup>
         </Box>

         <Box sx={{mt:1}}>
            <FormGroup sx={{alignItems:'center'}}>
               <FormControlLabel label=" Cold User" control={<Checkbox/>} onClick={()=>setCold(!checkCold)}
               checked={requestState.cold_users} onChange={(event)=>{setRequestState({...requestState,cold_users:event.target.checked})}}/>
               {checkCold ? (
               <FormControlLabel label=" Input a value of threshold for cold user" control={<Input type="number" className='inputNumber' size="small"/>}
               value={requestState.cold_users_threshold} onChange={(event)=>{setRequestState({...requestState,cold_users_threshold:event.target.value})}}/>
               ): (<></>)}     
            </FormGroup>
         </Box>

      </Container>  
    );
}

export default PreFiltering;