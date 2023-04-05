import { Box, ButtonGroup, Paper, Typography,Button, Input } from '@mui/material';
import React from 'react';


function Cutoffs(props){

  const requestState= props.requestState;
  const setRequestState = props.setRequestState;
    
        const cutoffAdd=(event)=>{
            let nCutoffs=document.getElementById('n_k').value;
          if(nCutoffs>0){
            const box= document.getElementById('cutoffField');
            while(box.firstChild){box.removeChild(box.lastChild);}
            for(let i=0;i<nCutoffs;i++){
                let number=i+1;
                const field=document.createElement('input');
                const placeholder='cutoff '+number+' value';
                const space=document.createElement('br');
                field.setAttribute('type','number');
                field.setAttribute('name','c_value');
                field.className='c_value';
                field.setAttribute('placeholder',placeholder);
                field.required=true;
                box.appendChild(field);
                box.appendChild(space);
            }
          }
        }

        const cutoffReset=()=>{
            const box=document.getElementById('cutoffField');
            while(box.firstChild){box.removeChild(box.lastChild)};
            document.getElementById('n_k').value='';
        }


    return(
          <Paper elevation={20} sx={{borderRadius:'20px', height:'600px', width:'600px',mt:5, ml:34.7}}>
            <Typography variant='h2'
                            sx={{
                                textAlign:'center',
                                mb:2,
                                color:'rgb(0, 179, 255)',
                                textShadow:".05em .05em 0 rgb(60, 70, 75)"
                                }}>Cutoffs</Typography>

            <Typography variant='h5' sx={{textAlign:'center', mb:2}}>Set a number of cutoffs</Typography>
            <Box sx={{textAlign:'center', mb:3}}>
              <Input type='number' id='n_k' name='n_k' min='1' placeholder='Input number of cutoffs'
                  className='nInput' value={requestState.cutoffs} onChange={(event)=>setRequestState({...requestState, cutoffs:event.target.value})}/>
            </Box>

          

            <Box sx={{textAlign:'center'}}>
              <ButtonGroup size='large'>
                <Button type='button' variant='contained' onClick={cutoffAdd}  
                                sx={{
                                mx:8,
                                width:150,
                                height:40,
                                fontSize:'13px',
                                borderRadius:'20px',
                                color: 'white',
                                bgcolor: 'rgb(17, 201, 17)',
                                '&:hover':{
                                  bgcolor: 'rgb(17, 201, 17)',
                                  color: 'white',
                                }
                                }}>Add field</Button>
                <Button type='button' variant='contained' onClick={cutoffReset} 
                                sx={{
                                mx:8,
                                width:150,
                                height:40,
                                fontSize:'13px',
                                borderRadius:'20px',
                                color: 'white',
                                bgcolor: 'rgb(201, 54, 17)',
                                '&:hover':{
                                  bgcolor: 'rgb(201, 54, 17)',
                                  color: 'white',
                                }
                                }}>Reset fields</Button> 
            </ButtonGroup>
            </Box>     
            
              <Box sx={{textAlign:'center', mt:3}}>
             <Box id='cutoffField' className='cutoffsEnabled' /> 
            </Box>
                  
            
          </Paper>
    );
}

export default Cutoffs;