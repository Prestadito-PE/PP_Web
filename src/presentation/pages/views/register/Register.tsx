import { Link } from 'react-router-dom';
import { Box, Grid } from "@mui/material"
import PersonIcon from '@mui/icons-material/Person';
import KeyIcon from '@mui/icons-material/Key';
import Logo from '../../../../assets/image/logo_prestadito.png';


export const Register = () => {



  return (
    <>
    <Grid container sx={{height:"100%"}}>
      <Grid item xs={12} md={6} className="container-green animation-rigth">
            <Grid container>
                        <div className="align-center">
                          <img src={Logo} alt={Logo} />
                        </div>                
                    <ul className="ul-auth">
                      <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</li>
                      <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</li>
                      <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</li>
                      <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                    </ul>
                    <Grid item xs={12} textAlign={'center'}>
                            <Link to="/auth/login" className='link'>Ingresar ahora</Link>
                        </Grid>
            </Grid>
        </Grid>


        <Grid item xs={12} md={6} sx={{
          padding:"3rem"
        }} className="animation-left">
            <Box component="form"
            autoComplete="off">
            <h3 className="title-font">
              BIENVENIDO A <span>PRESTADITO</span>
            </h3>
                <Grid maxHeight={"100%"} container>
                  
                          <Grid item xs={12} paddingX={5} marginY={1}>
                              <div className="input-container">
                                <PersonIcon className="icon" />
                                <input 
                                className="input-field"
                                placeholder="Email" />
                            </div>
                          </Grid>

                          <Grid item xs={12} paddingX={5} marginY={1}>
                            <div className="input-container">
                                <KeyIcon className="icon" />
                                <input 
                                type="pass"
                                className="input-field"
                                placeholder="Password" />
                            </div>
                          </Grid>

                          <Grid item xs={12} paddingX={5} marginY={1}>
                            <div className="input-container">
                                <KeyIcon className="icon" />
                                <input 
                                type="pass"
                                className="input-field"
                                placeholder="Re-Password" />
                            </div>
                          </Grid>

                          <Grid item xs={12} paddingX={5}>
                            <button className="btn-auth" type="button">Registrarse</button>
                          </Grid>
                          <Grid item xs={12} paddingX={5}>
                            <p className="text-sign">Si cuentas con usuario 
                            <Link to="/auth/login"> Ingresa aquí</Link>
                            </p>
                          </Grid>
                </Grid>
            </Box>  
        </Grid>
    </Grid>
    </>
  )
}
