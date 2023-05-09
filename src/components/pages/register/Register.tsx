import { Box,Grid } from "@mui/material"
import PersonIcon from '@mui/icons-material/Person';
import KeyIcon from '@mui/icons-material/Key';
import { DivInput } from "../../common/div/Divs";
import { SInput } from "../../common/input/Inputs";
import { TextLink } from "../../common/p/Ps";
import { Link } from "react-router-dom";
import { LinkAuth } from "../../common/a/As";
import { SUl } from "../../common/ul/Uls";
import { SButton } from "../../common/button/Buttons";
import { SH3 } from '../../common/h/Titles';
import { GridContent, GridForm } from "./RegisterComponents";
import { useForm } from "../../../hooks/useForm";
import { SpanErr } from "../../common/span/Spans";
import { FormUserServiceMapper  } from '../../interfaces/User/User.interface';
import { createUser } from "../../../services/security/user.service";
import LoadingPopup from "../../common/popup/LoadingPopup";



interface FormUser{
  strEmail:string;
  strPassword:string;
  strconfirmPassword:string;
}

const Register = () => {


  const initialValues: FormUser = {
    strEmail: '',
    strPassword: '',
    strconfirmPassword: '',
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
    } else if (values.strPassword.length < 6) {
      errors.strPassword = 'La contraseña debe tener al menos 6 caracteres';
    }

    if (values.strconfirmPassword !== values.strPassword) {
      console.log(values.strPassword, values.strconfirmPassword,values);
      errors.strconfirmPassword = 'Las contraseñas no coinciden';
    }
    return errors;
  }

  const onSubmit = async(values:{ [key: string]: any }) => {
    const UserVal=FormUserServiceMapper.map(values); 
    const response =await createUser(UserVal);
    console.log(response);
  };

  const { values, errors, isLoading, handleChange, handleSubmit } = useForm({
    initialValues,
    onSubmit,
    validate
  });

  return (
    <>
    {isLoading&&<LoadingPopup />}
    <Grid container sx={{height:"100%"}}>
      <GridContent item xs={12} md={6}>
            <Grid container>
                        <div className="align-center">
                          {/* <img src={Logo} alt={Logo} /> */}
                        </div>                
                    <SUl className="ul-auth">
                      <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</li>
                      <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</li>
                      <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</li>
                      <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                    </SUl>
                    <Grid item xs={12} textAlign={'center'}>
                            <LinkAuth to="/auth/login">Ingresar ahora</LinkAuth>
                        </Grid>
            </Grid>
        </GridContent>

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
                                <SInput 
                                type="text"
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
                                placeholder="Password" />
                            </DivInput>
                            {errors.strPassword && <SpanErr>{errors.strPassword}</SpanErr>}
                          </Grid>

                          <Grid item xs={12} paddingX={5} marginY={1}>
                            <DivInput valid={!errors.strconfirmPassword?true:false}>
                                <KeyIcon />
                                <SInput 
                                type="password"
                                name="strconfirmPassword"
                                value={values.strconfirmPassword}
                                onChange={handleChange}
                                placeholder="Re-Password" />
                            </DivInput  >
                            {errors.strconfirmPassword && <SpanErr>{errors.strconfirmPassword}</SpanErr>}
                          </Grid>

                          <Grid item xs={12} paddingX={5}>
                            <SButton type="submit" isActive={isLoading} disabled={isLoading}>{isLoading?'Enviando':'Registrarse'}</SButton>
                          </Grid>
                          <Grid item xs={12} paddingX={5}>
                            <TextLink>Si cuentas con usuario 
                            <Link to="/auth/login"> Ingresa aquí</Link>
                            </TextLink>
                          </Grid>
                </Grid>
            </Box>  
        </GridForm>
    </Grid>
    </>
  )
}

export default Register