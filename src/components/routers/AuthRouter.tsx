import { Route, Routes } from "react-router-dom";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import { ContainerAuth } from "../layout/ContainerAuth/ContainerAuth";

const AuthRouter = () => {
  return (
    <ContainerAuth>
        <div className="cont-auth">
        <Routes>
                <Route path="login" element={<Login />}/>
                <Route path="register" element={<Register />}/>
        </Routes>
        </div>
    </ContainerAuth>
  )
}

export default AuthRouter