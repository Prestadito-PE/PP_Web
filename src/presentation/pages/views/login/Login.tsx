import { Box, Grid } from "@mui/material"
import bg_auth from "../../../../assets/image/auth/bg_auth.png";
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import PersonIcon from '@mui/icons-material/Person';
import Input from '@mui/material/Input';

export const Login = () => {

  return (
    <>
    <Grid container sx={{height:"100%"}}>
      <Grid item xs={12} md={6} sx={{
        padding:"3rem"
      }}>
        <Box component="form"
        autoComplete="off">
        <h3 className="title-font">
          WELCOME TO <span>PRESTADITO</span>
        </h3>
       
        <Grid container>
                  <Grid xs={12} paddingX={5} marginY={2}>
                  <TextField 
                  size="small" 
                  sx={{width:"100%"}}
                  label="Email" 
                  variant="outlined"
                  placeholder="Email"
                  color="info"
                  InputProps={{
                    startAdornment: <InputAdornment position="start"><PersonIcon /></InputAdornment>,
                  }} />
        </Grid>


                  <Grid xs={12} paddingX={5} marginY={2}>
asdads
                  </Grid>
        </Grid>
       
       

       
        </Box>  
      </Grid>

      <Grid item xs={12} md={6} sx={{
          backgroundSize:"cover",
          background: `linear-gradient(0deg, rgba(89, 177, 93, 0.8), rgba(89, 177, 93, 0.8)), url(${bg_auth})`,
          backdropFilter: "blur(2px)",
          padding:"3rem"
        }}>

      

      </Grid>
    </Grid>
    
    </>
  )
}
