import { Route, Routes, Navigate } from "react-router-dom";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import { ContainerAuth } from "../layout/ContainerAuth/ContainerAuth";
// import LoadingPopup from "../common/popup/LoadingPopup";
const AuthRouter = () => {
  return (
    <ContainerAuth>
        <div className="cont-auth">
        <Routes>
                <Route path="login" element={<Login />}/>
                <Route path="register" element={<Register />}/>
                <Route path="*" element={<Navigate to="/login" replace/>}/>
        </Routes>
        </div>
        {/* <LoadingPopup /> */}
    </ContainerAuth>

  )
}

export default AuthRouter