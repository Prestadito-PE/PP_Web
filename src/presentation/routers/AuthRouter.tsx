import "../../assets/styles/auth.css";
import Box from '@mui/material/Box';
import { Route, Routes } from "react-router"
import { Login } from "../pages/views/login/Login"
import { Register } from "../pages/views/register/Register"
import { createTheme } from "@mui/material";

export const AuthRouter = () => {

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
                height:"32rem",
                borderRadius:"20px",
                filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",

                backgroundColor:"#ffffff"
            }}
            >
                
            <Routes>
                <Route path="login" element={<Login />}/>
                <Route path="register" element={<Register />}/>
                <Route path="*" element={<Login />}/>
            </Routes>

            </Box>
        </Box>



    </>
        

    
  )
}
