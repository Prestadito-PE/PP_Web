import { Box, Grid } from "@mui/material"
import PersonIcon from '@mui/icons-material/Person';
import KeyIcon from '@mui/icons-material/Key';
import { Link, useNavigate } from "react-router-dom";
import {GridForm,GridContent} from "./LoginComponents";
import { SH3 } from "../../common/h/Titles";
import { DivInput } from "../../common/div/Divs";
import { SInput } from "../../common/input/Inputs";
import { SButton } from "../../common/button/Buttons";
import { TextLink } from "../../common/p/Ps";
import { SUl } from "../../common/ul/Uls";
import { LinkAuth } from "../../common/a/As";
import { FormLoginServiceMapper } from "../../interfaces/User/User.interface";
import { LoginUser } from "../../../services/security/security.service";
import { useForm } from "../../../hooks/useForm";
import { SpanErr } from "../../common/span/Spans";
import { useAppDispatch } from "../../../redux/hooks";
import { loginSession } from '../../../redux/slices/session.slice';

interface FormUser{
  strEmail:string;
  strPassword:string;
}

const Login = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const initialValues: FormUser = {
    strEmail: '',
    strPassword: ''
  };

  const validate=(values:{ [key: string]: any } )=>{
    const errors: { [key: string]: string } = {};
    if (!values.strEmail) {
      errors.strEmail = 'El email es obligatorio';
    } else if (!/\S+@\S+\.\S+/.test(values.strEmail)) {
      errors.strEmail = 'El email no es válido';
    }

    if (!values.strPassword) {
      errors.strPassword = 'La contraseña es obligatoria';
    } else if (values.strPassword.length < 3) {
      errors.strPassword = 'La contraseña debe tener al menos 6 caracteres';
    }
    return errors;
  }

  const onSubmit = async(values:{ [key: string]: any }) => {
    const UserVal=FormLoginServiceMapper.map(values); 
    const response =await LoginUser(UserVal);
    try{
      if(!response.error && response.item?.strToken){
        dispatch(loginSession(response.item));
        navigate("/home");
      }
    }catch(err){
      console.log(err);
    }
  };


  const { values, errors, isLoading, handleChange, handleSubmit } = useForm({
    initialValues,
    onSubmit,
    validate
  });


  return (
    <>
    <Grid container sx={{height:"100%"}}>
        <GridForm item xs={12} md={6}>
            <Box component="form"
            onSubmit={handleSubmit}
            autoComplete="off">
            <SH3>
              BIENVENIDO A <span>PRESTADITO</span>
            </SH3>
                <Grid maxHeight={"100%"} container>
                          <Grid item xs={12} paddingX={5} marginY={1}>
                          <DivInput valid={!errors.strEmail?true:false}>
                            <PersonIcon />
                            <SInput width="100%"
                            type="email"
                            name="strEmail"
                            value={values.strEmail}
                            onChange={handleChange}
                            placeholder="Email" />
                          </DivInput>
                          {errors.strEmail && <SpanErr>{errors.strEmail}</SpanErr>}
                          </Grid>
                          <Grid item xs={12} paddingX={5} marginY={1}>
                          <DivInput valid={!errors.strPassword?true:false}>
                            <KeyIcon />
                            <SInput 
                                type="password"
                                name="strPassword"
                                value={values.strPassword}
                                onChange={handleChange}
                                placeholder="Password"
                            />
                          </DivInput>
                          {errors.strPassword && <SpanErr>{errors.strPassword}</SpanErr>}
                          </Grid>
                          <Grid item xs={12} paddingX={5}>
                          <SButton type="submit" isActive={isLoading} disabled={isLoading}>{isLoading?'Enviando':'Iniciar sesión'}</SButton>
                          </Grid>
                          <Grid item xs={12} paddingX={5}>
                          <TextLink>No tienes una cuenta? 
                          <Link to="/auth/register"> Regístrate ahora</Link>
                          </TextLink>
                          </Grid>
                </Grid>
            </Box>  
        </GridForm>

        <GridContent item xs={12} md={6}>
            <Grid container>
                        <div className="align-center">
                          {/* <img src={Logo} alt={Logo} /> */}
                        </div>                
                    <SUl>
                      <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</li>
                      <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</li>
                      <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                      <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</li>
                    </SUl>
                        <Grid item xs={12} textAlign={'center'}>
                            <LinkAuth to="/auth/register">Regístrate ahora</LinkAuth>
                        </Grid>
            </Grid>
        </GridContent>
    </Grid>
    </>
  )
}

export default Login