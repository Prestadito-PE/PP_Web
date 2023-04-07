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

const Register = () => {
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
            autoComplete="off">
            <SH3>
              BIENVENIDO A <span>PRESTADITO</span>
            </SH3>
                <Grid maxHeight={"100%"} container>
                  
                          <Grid item xs={12} paddingX={5} marginY={1}>
                              <DivInput>
                                <PersonIcon />
                                <SInput 
                                type="email"
                                placeholder="Email" />
                            </DivInput>
                          </Grid>

                          <Grid item xs={12} paddingX={5} marginY={1}>
                            <DivInput>
                                <KeyIcon />
                                <SInput 
                                type="password"
                                placeholder="Password" />
                            </DivInput>
                          </Grid>

                          <Grid item xs={12} paddingX={5} marginY={1}>
                            <DivInput>
                                <KeyIcon />
                                <SInput 
                                type="password"
                                placeholder="Re-Password" />
                            </DivInput  >
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