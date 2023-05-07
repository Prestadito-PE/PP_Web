import { Navigate } from "react-router-dom"

type PrivateRouterProps = {
  userState: boolean;
  children: React.ReactNode;
}

export const PrivateRouter = ({ userState, children }: PrivateRouterProps) => {
  return userState
    ? children
    : <Navigate to="/" />
}
