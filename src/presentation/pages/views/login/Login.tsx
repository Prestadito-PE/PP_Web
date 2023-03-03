import { Link } from 'react-router-dom';
import { Box, Grid } from "@mui/material"
import PersonIcon from '@mui/icons-material/Person';
import KeyIcon from '@mui/icons-material/Key';
import Logo from '../../../../assets/image/logo_prestadito.png';


export const Login = () => {

  return (
    <>
    <Grid container sx={{height:"100%"}}>
        <Grid item xs={12} md={6} sx={{
          padding:"3rem"
        }} className="animation-rigth">
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
                          <Grid item xs={12} paddingX={5}>
                          <button className="btn-auth" type="button">Iniciar sesión</button>
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
                      <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</li>
                      <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
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
