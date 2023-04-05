import { Checkbox, FormControlLabel, FormGroup, Select, Typography,Box, MenuItem, Input, Container, Card, Paper, } from '@mui/material';
import React,{useState} from 'react';
import Models from  '../../json/models2.json';

function AddForm(props){

    const[moduleOptions,setModuleOptions]=useState([]);
    const[moduleParameters,setModuleParameters]=useState([]);
    const[kChecked,setkChecked]=useState(false);

    const [module,setModule]=useState('');
    const [parameter,setPar]=useState('');

    const setModuleTypes=(event)=>{
        let options=[];
        let selected=event.target.value;
        setModule(selected)
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
        setPar(type);
        moduleOptions.map(option=>{
            if(option.id===type){
                parameters=option.parameters;
            }
            return console.log(parameters)
        })
        setModuleParameters(parameters);
    }

    return(
        <Container>
        <Paper elevation={20} sx={{borderRadius:'20px', height:'670px', width:'420px',ml:8,mb:3}}>
            <Box sx={{textAlign:'center',mt:1}} >
                <Typography variant='h6' >Select Recommendation Model</Typography>
                
                <Select name="loading_rec_model" id="loading_rec_model" onChange={setModuleTypes} value={module} label='select one' required>
                    {Models.map(model =>{
                        return(<MenuItem key={model.id} value={model.id}>{model.id}</MenuItem>);
                    })}
                </Select>

                <Select name="loading_model" id="loading_model" onChange={setTypeParameters} value={parameter} label='select the parameter'required>
                    {moduleOptions.map(option=>{
                        return(<MenuItem key={option.id} value={option.id}>{option.name}</MenuItem>);
                    })
                    }
                </Select>     
            </Box>

            <Box sx={{textAlign:'center'}}>
                <Typography variant='h6' sx={{mt:1}}> Test File</Typography>
                <Input  type='file' id="test_file" name="test_file" required />

                <Typography variant='h6' sx={{mt:1}}>Train file</Typography>
                <Input type='file' id="train_file" name="train_file" required />
            </Box>

            <Box sx={{mt:1}}>
            <FormGroup sx={{alignItems:'center'}}> 
                    <FormControlLabel label="Top K" control={<Checkbox/>} onChange={()=>setkChecked(!kChecked)}/>
                    {kChecked ? (
                        <FormControlLabel label=" Input a top K value" control={<input type="number"/>}/>
                    ): (<></>)}     
                </FormGroup>
            </Box>

            <Box sx={{textAlign:'center', mt:1}}>
                <Typography variant='h5'> <strong>Parameters</strong></Typography>

                {moduleParameters.map((value,index)=>{
                    return(<>
                    <Box >
                      <Typography forhtml={value} >{value}</Typography>
                      <Input type='text' key={index} id={value} name={value}/><br/>
                      </Box>
                    </>
                    );
                })}
            </Box>

            <Box sx={{textAlign:'center'}}>
                <FormControlLabel control={<Checkbox/>} label=' Save weights' id='save_weights'/>

                <Typography variant='h6'> Validation metric</Typography>
                <Input type='text' id='validation_metric' name='validation_metric' palceholder='Input a value for validation metric' className='textInput' />    
            
                <Typography variant='h6'>Validation Rate</Typography>
                <Input type='number' id='validation_rate' name='validation_rate' palceholder='Input a value for validation rate' className='textInput' />
            
                <Typography variant='h6'>Hyper opt alg</Typography>
                <Input type='text' id='hyper_opt_alg' name='hyper_opt_alg' palceholder='Input a value for hyper opt alg' className='textInput' />
            
                <Typography variant='h6'>Hyper max evals</Typography>
                <Input type='text' id='hyper_max_evals' name='hyper_max_evals' palceholder='Input a value for hyper max evals' className='textInput' />    

            </Box>
        </Paper>   
     </Container>
    );
}

export default AddForm;