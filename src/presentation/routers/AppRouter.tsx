import { Route, Routes } from "react-router"
import { BrowserRouter } from "react-router-dom"
import { AuthRouter } from "./AuthRouter"

export const AppRouter = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="auth/*" element={<AuthRouter />} />
            <Route path="*" element={<AuthRouter />} />
        </Routes>
    
    </BrowserRouter>
  )
}
