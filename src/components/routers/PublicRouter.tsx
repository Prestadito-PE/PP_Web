import { Navigate } from "react-router-dom"

type PublicRouterProps = {
  userState: boolean;
  children: React.ReactNode;
}

export const PublicRouter = ({ userState, children }: PublicRouterProps) => {
  return !userState
    ? children
    : <Navigate to="/" replace />;
}
