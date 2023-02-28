import "../../../assets/styles/auth.css";
import Box from '@mui/material/Box';
import { useState } from "react"
import { Login } from "../views/login/Login"
import { Register } from "../views/register/Register"
import { createTheme } from "@mui/material";

export const MainAuth = () => {

    const theme=createTheme({
        breakpoints:{
            values:{
                xs:0,
                sm:540,
                md:720,
                lg:960,
                xl:1140
            }
        }
    })

    const [page, setPage] = useState(0) 

  return (
    <>
    
        <Box
        sx={{
            width:"100%",
            height:"100vh",
            display:"flex",
            justifyContent:"center",
            alignItems:"center"
            
        }}
        >
            <Box
            sx={{
                width:{
                    xs:"100%",
                    sm:"80%",
                    md:"65%",
                    lg:"50%"

                },
                height:"35rem",
                borderRadius:"20px",
                filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",

                backgroundColor:"#ffffff"
            }}
            >
            {
                    page===0
                    ?<Login />
                    :<Register />
            }


            </Box>


        </Box>



    </>
        

    
  )
}
