import { Login } from "../../types/interfaces/User.interface";
import { Response } from "../../types/response.interface";
import { post } from '../api';
import config from "../config";


  export const LoginUser = async (user: Login): Promise<Response<Login>> => {
    const response = await post<Login>(`${config.endpoints.securtiy.sessions.login}`, user);
    return response;
  };

