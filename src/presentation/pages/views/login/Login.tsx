import { Box, Grid } from "@mui/material"

import bg_auth from "../../../../assets/image/auth/bg_auth.png";

export const Login = () => {

  return (
    <>
    <Grid container sx={{height:"100%"}}>
      <Grid item xs={12} md={6} sx={{
        padding:"3rem"
      }}>
        <Box>
        <h3 className="title-font">WELCOME TO <span>PRESTADITO</span></h3>
        </Box>  
      </Grid>

      <Grid item xs={12} md={6} sx={{
          backgroundSize:"cover",
          background: `linear-gradient(0deg, rgba(89, 177, 93, 0.8), rgba(89, 177, 93, 0.8)), url(${bg_auth})`,
          backdropFilter: "blur(2px)",
          padding:"3rem"
        }}>

      asdfaf

      </Grid>
    </Grid>
    
    </>
  )
}
