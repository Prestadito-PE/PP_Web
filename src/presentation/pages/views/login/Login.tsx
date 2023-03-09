import { Link } from 'react-router-dom';
import { Box, Grid } from "@mui/material"
import PersonIcon from '@mui/icons-material/Person';
import KeyIcon from '@mui/icons-material/Key';
import Logo from '../../../../assets/image/logo_prestadito.png';
import { useForm } from '../../../hooks/useForm';
import { authLogin } from '@/presentation/interfaces/Login.interface';
import { AxiosRequestConfig } from 'axios';
import { useEffect } from 'react';

interface formLogin{
  strEmail:string;
  strPassword:string;
}

const initialForm:formLogin={
  strEmail:"",
  strPassword:""
}


const validationForm=(formObj:formLogin)=>{
  let errors:formLogin|null={
    strEmail:"",
    strPassword:""
  };
  let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;

  if(!formObj.strEmail.trim()){
    errors.strEmail="El campo 'Email' es requerido";
  }else if(!regexEmail.test(formObj.strEmail.trim())){
    errors.strEmail="El campo 'Email' es invalido";
  }
  if(!formObj.strPassword.trim()){
    errors.strPassword="El campo 'Password' es requerido";
  }
  return errors;
}

const url =`https://qas-gateway.azurewebsites.net/security/api/users/login`;


export const Login = () => {
  const {
    form,
    errors,
    response,
    handleChange,
    handleBur,
    handleSubmit
  }=useForm(initialForm,validationForm)

  const configAxios:AxiosRequestConfig = {
    headers:{
      "Content-Type":"application/json"
    },
    baseURL:url,
    data:form,
    method:"POST"
  }
  

  useEffect(() => {
      console.log(response);
  }, [response])
  
  

  return (
    <>
    <Grid container sx={{height:"100%"}}>
        <Grid item xs={12} md={6} sx={{
          padding:"3rem"
        }} className="animation-rigth">
            <Box component="form"
            autoComplete="off"
            onSubmit={(e)=>handleSubmit(e,configAxios)}>
            <h3 className="title-font">
              BIENVENIDO A <span>PRESTADITO</span>
            </h3>
                <Grid maxHeight={"100%"} container>
                          <Grid item xs={12} paddingX={5} marginY={1}>
                          <div className={errors.strEmail?"input-container input-error":"input-container"}>
                            <PersonIcon className="icon" />
                            <input 
                            type="email"
                            // className="input-field"
                            name='strEmail'
                            className="input-field"
                            placeholder="Email" 
                            value={form.strEmail}
                            onChange={({target})=>handleChange(target.value,'strEmail')}
                            onBlur={({target})=>handleBur(target.value,'strEmail')}
                            />
                            
                          </div>
                          {errors.strEmail && <span className='span-validate'>{errors.strEmail}</span>}
                          </Grid>
                          <Grid item xs={12} paddingX={5} marginY={1}>
                          <div className={errors.strPassword?"input-container input-error":"input-container"}>
                            <KeyIcon className="icon" />
                            <input 
                            type="password"
                            name='strPassword'
                            className="input-field"
                            placeholder="Password" 
                            value={form.strPassword}
                            onChange={({target})=>handleChange(target.value,'strPassword')}
                            onBlur={({target})=>handleBur(target.value,'strPassword')}
                            />
                          </div>
                          {errors.strPassword && <span className='span-validate'>{errors.strPassword}</span>}
                          </Grid>
                          <Grid item xs={12} paddingX={5}>
                          <button className="btn-auth" type="submit">Iniciar sesión</button>
                          </Grid>
                          <Grid item xs={12} paddingX={5}>
                          <p className="text-sign">No tienes una cuenta? 
                          <Link to="/auth/register"> Regístrate ahora</Link>
                          </p>
                          </Grid>
                </Grid>
            </Box>  
        </Grid>

        <Grid item xs={12} md={6} className="container-green animation-left">
            <Grid container>
                        <div className="align-center">
                          <img src={Logo} alt={Logo} />
                        </div>                
                    <ul className="ul-auth">
                      <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</li>
                      <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</li>
                      <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                      <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</li>
                    </ul>
                        <Grid item xs={12} textAlign={'center'}>
                            <Link to="/auth/register" className='link'>Regístrate ahora</Link>
                        </Grid>
            </Grid>
        </Grid>
    </Grid>
    </>
  )
}
