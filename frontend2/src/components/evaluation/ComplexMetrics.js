import { Box, Container, FormGroup, Typography,Input, Checkbox, FormControlLabel, Button, Card, Paper } from '@mui/material';
import { red } from '@mui/material/colors';
import React, { useEffect,useState} from 'react';
//import '../../styles/evaluation/ComplexMetrics.css';

function ComplexMetrics(props){

    const defaultFairCheck={
      biasBD:false,
      ucnBD:'',
      icnBD:'',

      biasBR:false,
      ucnBDR:'',
      icnBR:'',

      iMADrank:false,
      inputMADrank:'',

      iMADrat:false,
      inputMADrat:'',

      uMADrank:false,
      inputuMADrank:'',

      uMADrat:false,
      inputuMADrat:'',

      reo:false,
      inputReo:'',

      rsp:false,
      inputRSP:'',
    }
    


    
    const[fairCheck,setFairCheck]=useState(defaultFairCheck);
    const [fairBool, setFairBool]= useState(false)
    
    const [dsc, setDsc] = useState(false);
    const [biasBR, setBiasBr] = useState(false);


    const requestState= props.requestState;
    const setRequestState = props.setRequestState;
    
    props.requestState.fairness = fairCheck;

  
    return(
        <Container>
          <Typography className='titSect'variant='h2'
                            sx={{
                                textAlign:'center',
                                my:4,
                                }}>Complex Metrics</Typography>

          <Box className='optionWrapper'> 
          <Box className='metricOption'>
              <Typography className='metricTit'variant='h5'
                            sx={{
                                my:2,
                                }}>Accuracy</Typography>
              <Box className='optShow'>
                <FormControlLabel control={<Checkbox/>} label="DSC" className='checkComplex' onClick={()=>setDsc(!dsc)} 
                checked={requestState.DSC} onChange={(event)=>setRequestState({...requestState, dsc:event.target.checked})} />
                {dsc ? 
                  (<Input type="number" name="beta" id="beta" placeholder="input a value for beta" className='optHidden' 
                  value={requestState.dscInput} onChange={(event)=>setRequestState({...requestState,dscInput:event.target.value})} required/>)
                  :
                  (null)}
                <FormControlLabel control={<Checkbox/>} label="Extended F1" className='checkComplex' sx={{ml:4}}
                  checked={requestState.ExtendedF1} onChange={(event)=>setRequestState({...requestState, ExtendedF1:event.target.checked})} /> 
              </Box>
          </Box>

          <Box className='metricOption'>
              <Typography className='metricTit'variant='h5'
                            sx={{
                                my:2,
                                }}>Bias</Typography>

              <FormGroup sx={{display:'flex',flexDirection:'row'}}>
                <FormControlLabel control={<Checkbox/>} label="Extended PopREO" className='checkComplex' sx={{width:'210px'}}
                checked={requestState.ExtendedPopREO} onChange={(event)=>setRequestState({...requestState, ExtendedPopREO:event.target.checked})} />
                <FormControlLabel control={<Checkbox/>} label="Extended PopRSP" className='checkComplex' sx={{width:'210px'}}
                checked={requestState.ExtendedPopRSP} onChange={(event)=>setRequestState({...requestState, ExtendedPopRSP:event.target.checked})}/>
              </FormGroup>
                
          </Box>

          <Box id='fairSection' className='metricOption'>
            <Typography id='fairTit' className='metricTit'variant='h5'
                            sx={{
                                my:2,
                                }}>Fairness</Typography>

            <Button type='button' variant='contained' onClick={()=> setFairBool(!fairBool)} 
            sx={{mb:3}}>Open / Close Fairness section</Button>

            {fairBool ? (
              <Paper elevation={15}>
                    <Box className='clusterOpt' sx={{ml:3}}>
                      <FormControlLabel control={<Checkbox/>} label="Bias Disparity BD" className='clustCheck' sx={{mt:1}}
                      checked={fairCheck.biasBD} onChange={(event)=>setFairCheck({...fairCheck, biasBD:event.target.checked})}/>

                      <FormGroup className='optClusShow'>
                        <Typography className='userClustering'>User clustering name and file</Typography>
                        <Input type="text" placeholder="user clustering name" required={fairCheck.biasBD?true:false} value={fairCheck.ucnBD} onChange={(event)=>setFairCheck({...fairCheck, ucnBD:event.target.value})}/>
                        <Input type="file" sx={{my:2}} required={fairCheck.biasBD?true:false}/>

                        <Typography className='userClustering'>Item clustering name and file</Typography>
                        <Input type="text" placeholder="item clustering name" required={fairCheck.biasBD?true:false} value={fairCheck.icnBD} onChange={(event)=>setFairCheck({...fairCheck, icnBD:event.target.value})}/>
                        <Input type="file" className='cluFile' sx={{my:1}} required={fairCheck.biasBD?true:false}/>
                      </FormGroup>
                    </Box>

                    <Box className='clusterOpt' sx={{ml:3}}>              
                      <FormControlLabel control={<Checkbox/>} label="Bias Disparity BR" className='clustCheck'
                      checked={fairCheck.biasBR} onChange={(event)=>setFairCheck({...fairCheck, biasBR:event.target.checked})}/>
                      
                      <FormGroup className='optClusShow'>
                        <Typography className='userClustering'>User clustering name and file</Typography>
                        <Input type="text" placeholder="user clustering name" required={fairCheck.biasBR?true:false} value={fairCheck.ucnBR} onChange={(event)=>setFairCheck({...fairCheck, ucnBR:event.target.value})}/>
                        <Input type="file"className='cluFile' sx={{my:2}} required={fairCheck.biasBR?true:false}  />

                        <Typography className='itemClustering'>Item clustering name and file</Typography>
                        <Input type="text" placeholder="item clustering name" required={fairCheck.biasBR?true:false} value={fairCheck.icnBR} onChange={(event)=>setFairCheck({...fairCheck, icnBR:event.target.value})}/>
                        <Input type="file"  className='cluFile' sx={{my:2}} required={fairCheck.biasBR?true:false} />
                      </FormGroup>
                        
                    </Box>

                    <Box className='clusterOpt2' sx={{ml:3}}>
                    <FormControlLabel control={<Checkbox/>} label="Item Dranking " className='clustCheck'
                      checked={fairCheck.iMADrank} onChange={(event)=>setFairCheck({...fairCheck, iMADrank:event.target.checked})}/>
              
                      <FormGroup className='optClusShow'>
                        <Typography className='descClustering'>Clustering name and file</Typography>
                        <Input type="text" placeholder="clustering name" required={fairCheck.iMADrank?true:false} value={fairCheck.inputMADrank} onChange={(event)=>setFairCheck({...fairCheck, inputMADrank:event.target.value})}/>
                        <Input type="file" sx={{my:2}} required={fairCheck.iMADrank?true:false}/>
                      </FormGroup>
                    </Box>

                    <Box className='clusterOpt2' sx={{ml:3}}>
                      <FormControlLabel control={<Checkbox/>} label="Item MA Drating " className='clustCheck'
                      checked={fairCheck.iMADrat} onChange={(event)=>setFairCheck({...fairCheck, iMADrat:event.target.checked})}/>
               
                      <FormGroup className='optClusShow'>
                        <Typography className='descClustering'>Clustering name and file</Typography>
                        <Input type="text" placeholder="clustering name"  required={fairCheck.iMADrat?true:false} value={fairCheck.inputMADrat} onChange={(event)=>setFairCheck({...fairCheck, inputMADrat:event.target.value})}/>
                        <Input type="file" sx={{my:2}} required={fairCheck.iMADrat?true:false}/>
                      </FormGroup>
                    </Box>

                    <Box className='clusterOpt2' sx={{ml:3}}>
                      <FormControlLabel control={<Checkbox/>} label="User MA Dranking " className='clustCheck'
                      checked={fairCheck.uMADrank} onChange={(event)=>setFairCheck({...fairCheck, uMADrank:event.target.checked})}/>
               
                      <FormGroup className='optClusShow'>
                        <Typography className='descClustering'>Clustering name and file</Typography>
                        <Input type="text"  placeholder="clustering name" required={fairCheck.uMADrank?true:false} value={fairCheck.inputuMADrank} onChange={(event)=>setFairCheck({...fairCheck, inputuMADrank:event.target.value})}/>
                        <Input type="file" sx={{my:2}} required={fairCheck.uMADrank?true:false}/>
                      </FormGroup>
                    </Box>

                    <Box className='clusterOpt2' sx={{ml:3}}>
                      <FormControlLabel control={<Checkbox/>} label="User MA Drating " className='clustCheck'
                      checked={fairCheck.uMADrat} onChange={(event)=>setFairCheck({...fairCheck, uMADrat:event.target.checked})}/>
              
                      <FormGroup className='optClusShow'>
                        <Typography className='descClustering'>Clustering name and file</Typography>
                        <Input type="text" placeholder="clustering name" required={fairCheck.uMADrat?true:false} value={fairCheck.inputuMADrat} onChange={(event)=>setFairCheck({...fairCheck, inputuMADrat:event.target.value})}/>
                        <Input type="file" sx={{my:2}} required={fairCheck.uMADrat?true:false}/>
                      </FormGroup>
                    </Box>

                    <Box className='clusterOpt2' sx={{ml:3}}>
                    <FormControlLabel control={<Checkbox/>} label="REO " className='clustCheck'
                      checked={fairCheck.reo} onChange={(event)=>setFairCheck({...fairCheck, reo:event.target.checked})}/>
               
                      <FormGroup className='optClusShow'>
                        <Typography className='descClustering'>Clustering name and file</Typography>
                        <Input type="text" placeholder="clustering name" required={fairCheck.reo?true:false} value={fairCheck.inputReo} onChange={(event)=>setFairCheck({...fairCheck, inputReo:event.target.value})}/>
                        <Input type="file" sx={{my:2}} required={fairCheck.reo?true:false}/>
                      </FormGroup>
                    </Box>

                    <Box className='clusterOpt2' sx={{ml:3}}>
                      <FormControlLabel control={<Checkbox/>} label="RSP" className='clustCheck'
                      checked={fairCheck.rsp} onChange={(event)=>setFairCheck({...fairCheck, rsp:event.target.checked})}/>
               
                      <FormGroup className='optClusShow'>
                        <Typography className='descClustering'>Clustering name and file</Typography>
                        <Input type="text"  placeholder="clustering name" required={fairCheck.rsp?true:false} value={fairCheck.inputRSP} onChange={(event)=>setFairCheck({...fairCheck, inputRSP:event.target.value})}/>
                        <Input type="file" sx={{mb:2,mt:1}} required={fairCheck.rsp?true:false}/>
                      </FormGroup>
                    </Box>

              </Paper>
            ):(null)}
          </Box>

        <Box id='complNovelty' className='metricOption'>
            <Typography className='metricTit'variant='h5'
                            sx={{
                                my:2,
                                }}>Novelty</Typography>
            <FormGroup className='optShow' sx={{display:'flex',flexDirection:'row'}}>
                <FormControlLabel control={<Checkbox/>} label="Extended EFD" className='checkComplex' sx={{width:'180px'}}
                checked={requestState.ExtendedEFD} onChange={(event)=>setRequestState({...requestState, ExtendedEFD:event.target.checked})}/>
                <FormControlLabel control={<Checkbox/>} label="Extended EPC" className='checkComplex' sx={{width:'180px'}}
                checked={requestState.ExtendedEPC} onChange={(event)=>setRequestState({...requestState, ExtendedEPC:event.target.checked})}/>
            </FormGroup>
        </Box>

      </Box>
    </Container>
    );
}

export default ComplexMetrics;