import {BrowserRouter, Route, Routes} from "react-router-dom";
import AuthRouter from "./AuthRouter";
import { useEffect, useState } from "react";
import { useAppSelector } from "../../redux/hooks";
import { PublicRouter } from "./PublicRouter";
import { PrivateRouter } from "./PrivateRouter";
import { Home } from "../pages/home/Home";

export const AppRouter = () => {
 
  const [session,setSession] =useState(false);
  const selector = useAppSelector((state)=>state.sessionReducer)

  useEffect(() => {
      if(selector.strId?.length>0 && selector.strToken?.length>0){
        setSession(true);
      }else{
        setSession(false);
    }
  }, [selector])
  
  return (
    <BrowserRouter>
        <Routes>
            <Route path="auth/*" element={
              <PublicRouter userState={session}>
                  <AuthRouter />
              </PublicRouter>
            } />
            <Route path="/*" element={
                <PrivateRouter userState={session}>
                    <Home />
                </PrivateRouter>
              }
            />
        </Routes>
    </BrowserRouter>
  )
}
