import { Login, ResponseLogin } from "../../types/interfaces/User.interface";
import { Response } from "../../types/response.interface";
import { post } from '../api';
import config from "../config";


  export const LoginUser = async (user: Login): Promise<Response<ResponseLogin>> => {
    const response = await post<ResponseLogin>(`${config.endpoints.securtiy.sessions.login}`, user);
    return response;
  };

