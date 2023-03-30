import React,{useState}from 'react';
import AddForm from './AddForm.js';
import '../../styles/recommendation/RecForm.css'
import { Button, FormLabel, Container, Typography, Box } from '@mui/material';

function RecForm(){

    const[forms,setForms]=useState([]);
    const[formNumb,setFormNumb]=useState(0);

    const addModel=()=>{
        setFormNumb(formNumb+1);
        setForms([...forms,{id:formNumb,component:<AddForm />}]);    
    }
    
    const removeModel=(event)=>{
        setForms(
            forms.filter(
                (form)=> parseInt(event.target.id,10) !== form.id
            )
        );
    };

    const submitRecForm=(event)=>{
        let form=document.getElementById('recForm');
      if(forms.lenght>0){
        if(form.checkValidity()){
            document.getElementById(event.target.id).style='display:none';
            fetch('/api/v1/recommendationmodel-json', {
                method: 'POST',
                body: new FormData(form)
            }).then(res => res.json())
            .then(data =>{
                document.getElementById('recDownloadDF').setAttribute('href', `/api/v1/recommendationmodel/download/${data}`);
                document.getElementById('recLoading').setAttribute('hidden', true);
                document.getElementById('recResult').setAttribute('hidden',false);
            })
            document.getElementById('recLoading').setAttribute('hidden', false);
        }else{
            document.getElementById('recSubmitError').innerHTML='Fill required fields';
        } 
       }else{
        document.getElementById('recSubmitError').innerHTML='Add at least one model or fill required fields !'
        event.preventDefault();
       }
    }

    return(

        <Container>
            <Button type='button' variant='contained' sx={{position:'absolute'}} onClick={addModel}>Add Model</Button>
            <Typography variant='h4' sx={{textAlign:'right',mb:3}}>Add one or more recommendation model, and set their parameters</Typography>
            
            <form method='POST' encType="multipart/form-data" id='recForm'>

                <Box sx={{display:'flex',flexDirection:'row',flexWrap:'wrap'}}>
                {forms.map((form,index)=>{
                    return(<div key={index} id={'form'+form.id}>
                            <p id={form.id} onClick={removeModel} className='removeButt' />
                            {form.component}
                        </div>);
                })}  
                </Box>
       
            <Box sx={{textAlign:'center'}}>
                 <Button type='submit'onClick={submitRecForm} color='success' variant='contained'
                                sx={{
                                    mb:2,
                                    width:350,
                                    height:65,
                                    fontSize:'18px',
                                    borderRadius:'10px',
                                    }}>
                                    Process with this models</Button>
            </Box>     
        </form> 
{/* 
            <div id='recLoading' hidden>
               <div className="lds-ripple"><div></div><div></div></div>
                 <span className='load_info'> Data processing in progress</span>
             </div> 
                                
            <div id='recResult' hidden>
              <h1 className='completedTit'>Processing completed</h1>
               <p className='compl_content'>Your dataset has been successfully processed!
                  <a href='' className="download_link" id="recDownloadDF">Download ZIP</a>
               </p>
            </div>
         </div>
             */}
        </Container>
    );
}

export default RecForm;