import { Box, Grid } from "@mui/material"
import PersonIcon from '@mui/icons-material/Person';
import KeyIcon from '@mui/icons-material/Key';
import { Link } from "react-router-dom";
import {GridForm,GridContent} from "./LoginComponents";
import { SH3 } from "../../common/h/Titles";
import { DivInput } from "../../common/div/Divs";
import { SInput } from "../../common/input/Inputs";
import { SButton } from "../../common/button/Buttons";
import { TextLink } from "../../common/p/Ps";
import { SUl } from "../../common/ul/Uls";
import { LinkAuth } from "../../common/a/As";


const Login = () => {
  return (
    <>
    <Grid container sx={{height:"100%"}}>
        <GridForm item xs={12} md={6}>
            <Box component="form"
            autoComplete="off">
            <SH3>
              BIENVENIDO A <span>PRESTADITO</span>
            </SH3>
                <Grid maxHeight={"100%"} container>
                          <Grid item xs={12} paddingX={5} marginY={1}>
                          <DivInput>
                            <PersonIcon />
                            <SInput width="100%"
                            type="email"
                            // className="input-field"
                            placeholder="Email" 
                            // value={form.strEmail}
                            // onChange={({target})=>handleChange(target.value,'strEmail')}
                            // onBlur={({target})=>handleBur(target.value,'strEmail')}
                            />
                            
                          </DivInput>
                          {/* {errors.strEmail && <span className='span-validate'>{errors.strEmail}</span>} */}
                          </Grid>
                          <Grid item xs={12} paddingX={5} marginY={1}>
                          <DivInput>
                            <KeyIcon />
                            <SInput 
                            type="password"
                            placeholder="Password" 
                            // value={form.strPassword}
                            // onChange={({target})=>handleChange(target.value,'strPassword')}
                            // onBlur={({target})=>handleBur(target.value,'strPassword')}
                            />
                          </DivInput>
                          {/* {errors.strPassword && <span className='span-validate'>{errors.strPassword}</span>} */}
                          </Grid>
                          <Grid item xs={12} paddingX={5}>
                          <SButton type="submit">Iniciar sesión</SButton>
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