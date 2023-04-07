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

interface FormValues {
  email: string;
  password: string;
  confirmPassword: string;
}


const Register = () => {

  const initialValues: FormValues = {
    email: '',
    password: '',
    confirmPassword: '',
  };


  const { values, errors, handleChange, handleSubmit } = useForm({
    initialValues,
    onSubmit:(values)=>{
      console.log(values);
    },
    validate:(values)=>{
      const errors: { [key: string]: string } = {};

      if (!values.email) {
        errors.email = 'El email es obligatorio';
      } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = 'El email no es válido';
      }
  
      if (!values.password) {
        errors.password = 'La contraseña es obligatoria';
      } else if (values.password.length < 6) {
        errors.password = 'La contraseña debe tener al menos 6 caracteres';
      }
  
      if (values.password !== values.confirmPassword) {
        errors.confirmPassword = 'Las contraseñas no coinciden';
      }
  
      return errors;
    }
  });

  return (
    <>
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
                              <DivInput valid={!errors.email?true:false}>
                                <PersonIcon />
                                <SInput 
                                type="text"
                                name="email"
                                value={values.email}
                                onChange={handleChange}
                                placeholder="Email" />
                              </DivInput>
                              {errors.email && <SpanErr>{errors.email}</SpanErr>}
                          </Grid>

                          <Grid item xs={12} paddingX={5} marginY={1}>
                            <DivInput valid={!errors.password?true:false}>
                                <KeyIcon />
                                <SInput 
                                type="password"
                                name="password"
                                value={values.password}
                                onChange={handleChange}
                                placeholder="Password" />
                            </DivInput>
                            {errors.password && <SpanErr>{errors.password}</SpanErr>}
                          </Grid>

                          <Grid item xs={12} paddingX={5} marginY={1}>
                            <DivInput valid={!errors.confirmPassword?true:false}>
                                <KeyIcon />
                                <SInput 
                                type="password"
                                name="confirmPassword"
                                value={values.confirmPassword}
                                onChange={handleChange}
                                placeholder="Re-Password" />
                            </DivInput  >
                            {errors.confirmPassword && <SpanErr>{errors.confirmPassword}</SpanErr>}
                          </Grid>

                          <Grid item xs={12} paddingX={5}>
                            <SButton type="submit">Registrarse</SButton>
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