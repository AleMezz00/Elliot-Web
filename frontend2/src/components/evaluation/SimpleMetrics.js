import { FormControlLabel, FormGroup, Checkbox, Container, Typography, Card, Box, Paper } from '@mui/material';
import React from 'react';
//import '../../styles/evaluation/SimpleMetrics.css';

function SimpleMetrics(props){

  const evform= props.dataEv;
  const setEvForm= props.setDataEv;
    
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
              <FormControlLabel control={<Checkbox/>} label="AUC" className='check_label' checked={evform.auc} onChange={(event)=>setEvForm({...evform, auc:event.target.checked})}/>
              <FormControlLabel control={<Checkbox/>} label="GAUC" className='check_label'checked={evform.gauc} onChange={(event)=>setEvForm({...evform, gauc:event.target.checked})}/>
              <FormControlLabel control={<Checkbox/>} label="LAUC" className='check_label'checked={evform.lauc} onChange={(event)=>setEvForm({...evform, lauc:event.target.checked})}/>
              <FormControlLabel control={<Checkbox/>} label="F1" className='check_label'checked={evform.f1} onChange={(event)=>setEvForm({...evform, f1:event.target.checked})}/>  
              <FormControlLabel control={<Checkbox/>} label="HR" className='check_label'checked={evform.hr} onChange={(event)=>setEvForm({...evform, hr:event.target.checked})}/>
              <FormControlLabel control={<Checkbox/>} label="MAP" className='check_label'checked={evform.map} onChange={(event)=>setEvForm({...evform, map:event.target.checked})}/>
              <FormControlLabel control={<Checkbox/>} label="MAR" className='check_label'checked={evform.mar} onChange={(event)=>setEvForm({...evform, mar:event.target.checked})}/>
              <FormControlLabel control={<Checkbox/>} label="MRR" className='check_label'checked={evform.mrr} onChange={(event)=>setEvForm({...evform, mrr:event.target.checked})}/>
              <FormControlLabel control={<Checkbox/>} label="nDCG" className='check_label'checked={evform.nDCG} onChange={(event)=>setEvForm({...evform, nDCG:event.target.checked})}/>
              <FormControlLabel control={<Checkbox/>} label="Precision" className='check_label'checked={evform.precision} onChange={(event)=>setEvForm({...evform, precision:event.target.checked})}/>
              <FormControlLabel control={<Checkbox/>} label="Recall" className='check_label'checked={evform.recall} onChange={(event)=>setEvForm({...evform, recall:event.target.checked})}/>     
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
              <FormControlLabel control={<Checkbox/>} label="ACLT" className='check_label' checked={evform.aclt} onChange={(event)=>setEvForm({...evform, aclt:event.target.checked})}/>
              <FormControlLabel control={<Checkbox/>} label="APLT" className='check_label'checked={evform.aplt} onChange={(event)=>setEvForm({...evform, aplt:event.target.checked})}/>
              <FormControlLabel control={<Checkbox/>} label="ARP" className='check_label'checked={evform.arp} onChange={(event)=>setEvForm({...evform, arp:event.target.checked})}/>
              <FormControlLabel control={<Checkbox/>} label="PopREO" className='check_label'checked={evform.popREO} onChange={(event)=>setEvForm({...evform, popREO:event.target.checked})}/>  
              <FormControlLabel control={<Checkbox/>} label="PopRSP" className='check_label'checked={evform.popRSP} onChange={(event)=>setEvForm({...evform, popRSP:event.target.checked})}/> 
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
              <FormControlLabel control={<Checkbox/>} label="Item Coverage" className='check_label'checked={evform.itCov} onChange={(event)=>setEvForm({...evform, itCov:event.target.checked})}/>
              <FormControlLabel control={<Checkbox/>} label="Num Retrieved" className='check_label'checked={evform.numRet} onChange={(event)=>setEvForm({...evform, numRet:event.target.checked})}/>
              <FormControlLabel control={<Checkbox/>} label="User Coverage" className='check_label'checked={evform.usCov} onChange={(event)=>setEvForm({...evform, usCov:event.target.checked})}/>
              <FormControlLabel control={<Checkbox/>} label="User Coverage ATN" className='check_label'checked={evform.usCovATN} onChange={(event)=>setEvForm({...evform, usCovATN:event.target.checked})}/> 
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
              <FormControlLabel control={<Checkbox/>} label="Gini" className='check_label'checked={evform.gini} onChange={(event)=>setEvForm({...evform, gini:event.target.checked})}/>
              <FormControlLabel control={<Checkbox/>} label="Shannon Entropy" className='check_label'checked={evform.shann} onChange={(event)=>setEvForm({...evform, shann:event.target.checked})}/>
              <FormControlLabel control={<Checkbox/>} label="S Recall" className='check_label'checked={evform.sRec} onChange={(event)=>setEvForm({...evform, sRec:event.target.checked})}/>
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
                <FormControlLabel control={<Checkbox/>} label="MAE" className='check_label'checked={evform.mae} onChange={(event)=>setEvForm({...evform, mae:event.target.checked})}/>
                <FormControlLabel control={<Checkbox/>} label="MSE " className='check_label'checked={evform.mse} onChange={(event)=>setEvForm({...evform, mse:event.target.checked})}/>
                <FormControlLabel control={<Checkbox/>} label="RMSE" className='check_label'checked={evform.rmse} onChange={(event)=>setEvForm({...evform, rmse:event.target.checked})}/>
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
                <FormControlLabel control={<Checkbox/>} label="EFD" className='check_label'checked={evform.efd} onChange={(event)=>setEvForm({...evform, efd:event.target.checked})}/>
                <FormControlLabel control={<Checkbox/>} label="EPC" className='check_label'checked={evform.epc} onChange={(event)=>setEvForm({...evform, epc:event.target.checked})}/> 
                </Box>      
              </FormGroup>      
          </Paper>    
          
                
        </Box>
               
      </Container>
    );
}

export default SimpleMetrics;