import { FormControlLabel, FormGroup, Checkbox } from '@mui/material';
import React from 'react';
import '../../styles/evaluation/SimpleMetrics.css';

function SimpleMetrics(){
    
    return(
        <>
        <h2 className='titSect_Simp'>Simple Metrics</h2>
        <div className='content'>

        <div className='metricOption'>
                  <FormGroup>
                    <h1 className='Tit_Simp_Card'>Accuracy</h1>
                    <div className='check_cont_simp'>
                    <FormControlLabel control={<Checkbox/>} label="AUC" className='check_label'/>
                    <FormControlLabel control={<Checkbox/>} label="GAUC" className='check_label'/>
                    <FormControlLabel control={<Checkbox/>} label="LAUC" className='check_label'/>
                    <FormControlLabel control={<Checkbox/>} label="F1" className='check_label'/>  
                    <FormControlLabel control={<Checkbox/>} label="HR" className='check_label'/>
                    <FormControlLabel control={<Checkbox/>} label="MAP" className='check_label'/>
                    <FormControlLabel control={<Checkbox/>} label="MAR" className='check_label'/>
                    <FormControlLabel control={<Checkbox/>} label="MRR" className='check_label'/>
                    <FormControlLabel control={<Checkbox/>} label="nDCG" className='check_label'/>
                    <FormControlLabel control={<Checkbox/>} label="Precision" className='check_label'/>
                    <FormControlLabel control={<Checkbox/>} label="AUC" className='check_label'/>
                    <FormControlLabel control={<Checkbox/>} label="Recall" className='check_label'/>  
                     </div>               
                  </FormGroup>
                </div>
   
                <div className='metricOption'>
                  <FormGroup>
                    <h1 className='Tit_Simp_Card'>Simple Bias</h1>
                    <div className='check_cont_simp'>
                    <FormControlLabel control={<Checkbox/>} label="ACLT" className='check_label'/>
                    <FormControlLabel control={<Checkbox/>} label="APLT" className='check_label'/>
                    <FormControlLabel control={<Checkbox/>} label="ARP" className='check_label'/>
                    <FormControlLabel control={<Checkbox/>} label="PopREO" className='check_label'/>  
                    <FormControlLabel control={<Checkbox/>} label="PopRSP" className='check_label'/>
                    </div>    
                  </FormGroup>
                </div>
                <div className='metricOption'>
                    <FormGroup>
                      <h1 className='Tit_Simp_Card'>Coverage</h1>
                      <div className='check_cont_simp'>
                      <FormControlLabel control={<Checkbox/>} label="Item Coverage" className='check_label'/>
                      <FormControlLabel control={<Checkbox/>} label="Num Retrieved" className='check_label'/>
                      <FormControlLabel control={<Checkbox/>} label="User Coverage" className='check_label'/>
                      <FormControlLabel control={<Checkbox/>} label="User Coverage ATN" className='check_label'/>  
                      </div>
                    </FormGroup>
                    
                </div>

                <div className='metricOption'>
                    <FormGroup>
                      <h1 className='Tit_Simp_Card'>Diversity</h1>
                      <div className='check_cont_simp'>
                      <FormControlLabel control={<Checkbox/>} label="Gini" className='check_label'/>
                      <FormControlLabel control={<Checkbox/>} label="Shannon Entropy" className='check_label'/>
                      <FormControlLabel control={<Checkbox/>} label="S Recall" className='check_label'/>
                      </div>
                    </FormGroup>
                </div>
                
                <div className='metricOption'>
                   <FormGroup>
                      <h1 className='Tit_Simp_Card'>Rating</h1>
                      <div className='check_cont_simp'>
                      <FormControlLabel control={<Checkbox/>} label="MAE" className='check_label'/>
                      <FormControlLabel control={<Checkbox/>} label="MSE " className='check_label'/>
                      <FormControlLabel control={<Checkbox/>} label="RMSE" className='check_label'/> 
                      </div>
                    </FormGroup>
                    
                </div>

                <div className='metricOption'>
                    <FormGroup>
                      <h1 className='Tit_Simp_Card'>Novelty</h1>
                      <div className='check_cont_simp'>
                      <FormControlLabel control={<Checkbox/>} label="EFD" className='check_label'/>
                      <FormControlLabel control={<Checkbox/>} label="EPC" className='check_label'/>
                    </div>
                    </FormGroup>
                    
                </div>
            

          </div>
          
        </>
    );
}

export default SimpleMetrics;