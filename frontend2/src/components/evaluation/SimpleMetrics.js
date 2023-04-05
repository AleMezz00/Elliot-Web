import { FormControlLabel, FormGroup, Checkbox, Container, Typography, Card, Box, Paper } from '@mui/material';
import React from 'react';
//import '../../styles/evaluation/SimpleMetrics.css';

function SimpleMetrics(props){

  const requestState= props.requestState;
  const setrequestState= props.setRequestState;
    
    return(

      <Container>
        <Typography variant='h2'
                            sx={{
                                textAlign:'center',
                                my:4,
                                color:'rgb(0, 179, 255)',
                                textShadow:".05em .05em 0 rgb(60, 70, 75)"
                                }}>Simple Metrics</Typography>

        <Box sx={{display:'flex', flexWrap:'wrap'}}>

          <Paper className='metricOption' elevation={16} sx={{mt:2,ml:5, width:'320px'}}>
            <FormGroup>
              <Typography className='Tit_Simp_Card' variant='h5'
                            sx={{
                                textAlign:'center',
                                my:2,
                                color:'rgb(0, 179, 255)',
                                textShadow:".05em .05em 0 rgb(60, 70, 75)"
                                }}>Accuracy</Typography>

              <Box sx={{display:'flex', flexWrap:'wrap',ml:2, mb:2}}>
              <FormControlLabel control={<Checkbox/>} label="AUC" className='check_label' checked={requestState.auc} onChange={(event)=>setrequestState({...requestState, auc:event.target.checked})}/>
              <FormControlLabel control={<Checkbox/>} label="GAUC" className='check_label'checked={requestState.gauc} onChange={(event)=>setrequestState({...requestState, gauc:event.target.checked})}/>
              <FormControlLabel control={<Checkbox/>} label="LAUC" className='check_label'checked={requestState.lauc} onChange={(event)=>setrequestState({...requestState, lauc:event.target.checked})}/>
              <FormControlLabel control={<Checkbox/>} label="F1" className='check_label'checked={requestState.f1} onChange={(event)=>setrequestState({...requestState, f1:event.target.checked})}/>  
              <FormControlLabel control={<Checkbox/>} label="HR" className='check_label'checked={requestState.hr} onChange={(event)=>setrequestState({...requestState, hr:event.target.checked})}/>
              <FormControlLabel control={<Checkbox/>} label="MAP" className='check_label'checked={requestState.map} onChange={(event)=>setrequestState({...requestState, map:event.target.checked})}/>
              <FormControlLabel control={<Checkbox/>} label="MAR" className='check_label'checked={requestState.mar} onChange={(event)=>setrequestState({...requestState, mar:event.target.checked})}/>
              <FormControlLabel control={<Checkbox/>} label="MRR" className='check_label'checked={requestState.mrr} onChange={(event)=>setrequestState({...requestState, mrr:event.target.checked})}/>
              <FormControlLabel control={<Checkbox/>} label="nDCG" className='check_label'checked={requestState.nDCG} onChange={(event)=>setrequestState({...requestState, nDCG:event.target.checked})}/>
              <FormControlLabel control={<Checkbox/>} label="Precision" className='check_label'checked={requestState.precision} onChange={(event)=>setrequestState({...requestState, precision:event.target.checked})}/>
              <FormControlLabel control={<Checkbox/>} label="Recall" className='check_label'checked={requestState.recall} onChange={(event)=>setrequestState({...requestState, recall:event.target.checked})}/>     
               </Box>          
            </FormGroup>
          </Paper>

          <Paper className='metricOption' elevation={16} sx={{mt:2,ml:3, width:'320px'}}>
            <FormGroup>
              <Typography className='Tit_Simp_Card' variant='h5'
                            sx={{
                                textAlign:'center',
                                my:2,
                                color:'rgb(0, 179, 255)',
                                textShadow:".05em .05em 0 rgb(60, 70, 75)"
                                }}>Simple Bias</Typography> 
              <Box sx={{display:'flex', flexWrap:'wrap',ml:4, mb:2}}>            
              <FormControlLabel control={<Checkbox/>} label="ACLT" className='check_label' checked={requestState.aclt} onChange={(event)=>setrequestState({...requestState, aclt:event.target.checked})}/>
              <FormControlLabel control={<Checkbox/>} label="APLT" className='check_label'checked={requestState.aplt} onChange={(event)=>setrequestState({...requestState, aplt:event.target.checked})}/>
              <FormControlLabel control={<Checkbox/>} label="ARP" className='check_label'checked={requestState.arp} onChange={(event)=>setrequestState({...requestState, arp:event.target.checked})}/>
              <FormControlLabel control={<Checkbox/>} label="PopREO" className='check_label'checked={requestState.popREO} onChange={(event)=>setrequestState({...requestState, popREO:event.target.checked})}/>  
              <FormControlLabel control={<Checkbox/>} label="PopRSP" className='check_label'checked={requestState.popRSP} onChange={(event)=>setrequestState({...requestState, popRSP:event.target.checked})}/> 
              </Box>        
            </FormGroup>
          </Paper>

          <Paper className='metricOption' elevation={16} sx={{mt:2,ml:3, width:'320px'}}>
            <FormGroup>
              <Typography className='Tit_Simp_Card' variant='h5'
                            sx={{
                                textAlign:'center',
                                my:2,
                                color:'rgb(0, 179, 255)',
                                textShadow:".05em .05em 0 rgb(60, 70, 75)"
                                }}>Coverage</Typography>
              <Box sx={{display:'flex', flexWrap:'wrap',ml:2, mb:2}}>
              <FormControlLabel control={<Checkbox/>} label="Item Coverage" className='check_label'checked={requestState.itCov} onChange={(event)=>setrequestState({...requestState, itCov:event.target.checked})}/>
              <FormControlLabel control={<Checkbox/>} label="Num Retrieved" className='check_label'checked={requestState.numRet} onChange={(event)=>setrequestState({...requestState, numRet:event.target.checked})}/>
              <FormControlLabel control={<Checkbox/>} label="User Coverage" className='check_label'checked={requestState.usCov} onChange={(event)=>setrequestState({...requestState, usCov:event.target.checked})}/>
              <FormControlLabel control={<Checkbox/>} label="User Coverage ATN" className='check_label'checked={requestState.usCovATN} onChange={(event)=>setrequestState({...requestState, usCovATN:event.target.checked})}/> 
              </Box> 
            </FormGroup>
          </Paper>

          <Paper className='metricOption' elevation={16} sx={{mt:2,ml:5, width:'320px'}}>
            <FormGroup>
              <Typography className='Tit_Simp_Card' variant='h5'
                            sx={{
                                textAlign:'center',
                                my:2,
                                color:'rgb(0, 179, 255)',
                                textShadow:".05em .05em 0 rgb(60, 70, 75)"
                                }}>Diversity</Typography>
              <Box sx={{display:'flex', flexWrap:'wrap',ml:5, mb:2}}>
              <FormControlLabel control={<Checkbox/>} label="Gini" className='check_label'checked={requestState.gini} onChange={(event)=>setrequestState({...requestState, gini:event.target.checked})}/>
              <FormControlLabel control={<Checkbox/>} label="Shannon Entropy" className='check_label'checked={requestState.shann} onChange={(event)=>setrequestState({...requestState, shann:event.target.checked})}/>
              <FormControlLabel control={<Checkbox/>} label="S Recall" className='check_label'checked={requestState.sRec} onChange={(event)=>setrequestState({...requestState, sRec:event.target.checked})}/>
              </Box>
            </FormGroup>
          </Paper>
    
          <Paper className='metricOption' elevation={16} sx={{mt:2,ml:3, width:'320px'}}>
              <FormGroup>
                <Typography className='Tit_Simp_Card' variant='h5'
                            sx={{
                                textAlign:'center',
                                my:2,
                                color:'rgb(0, 179, 255)',
                                textShadow:".05em .05em 0 rgb(60, 70, 75)"
                                }}>Rating</Typography>
                <Box sx={{display:'flex', flexWrap:'wrap',ml:4, mb:2}}>
                <FormControlLabel control={<Checkbox/>} label="MAE" className='check_label'checked={requestState.mae} onChange={(event)=>setrequestState({...requestState, mae:event.target.checked})}/>
                <FormControlLabel control={<Checkbox/>} label="MSE " className='check_label'checked={requestState.mse} onChange={(event)=>setrequestState({...requestState, mse:event.target.checked})}/>
                <FormControlLabel control={<Checkbox/>} label="RMSE" className='check_label'checked={requestState.rmse} onChange={(event)=>setrequestState({...requestState, rmse:event.target.checked})}/>
                </Box> 
              </FormGroup>
              
          </Paper>

          <Paper className='metricOption' elevation={16} sx={{mt:2,ml:3, width:'320px'}}>
              <FormGroup>
                <Typography className='Tit_Simp_Card' variant='h5'
                            sx={{
                                textAlign:'center',
                                my:2,
                                color:'rgb(0, 179, 255)',
                                textShadow:".05em .05em 0 rgb(60, 70, 75)"
                                }}>Novelty</Typography>
                <Box sx={{display:'flex', flexWrap:'wrap',ml:11, mb:2}}>
                <FormControlLabel control={<Checkbox/>} label="EFD" className='check_label'checked={requestState.efd} onChange={(event)=>setrequestState({...requestState, efd:event.target.checked})}/>
                <FormControlLabel control={<Checkbox/>} label="EPC" className='check_label'checked={requestState.epc} onChange={(event)=>setrequestState({...requestState, epc:event.target.checked})}/> 
                </Box>      
              </FormGroup>      
          </Paper>    
          
                
        </Box>
               
      </Container>
    );
}

export default SimpleMetrics;