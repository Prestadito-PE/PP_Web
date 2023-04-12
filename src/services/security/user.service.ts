import { User } from "../../types/interfaces/User.interface";
import { Response } from "../../types/response.interface";
import { get, del, post, put } from '../api';
import config from "../config";

export const getUsers = async (): Promise<Response<User[]>> => {
    const response = await get<User[]>(`${config.endpoints.securtiy.users.get}`);
    return response;
  };
  export const getUserById = async (id: string): Promise<Response<User>> => {
    const response = await get<User>(`${config.endpoints.securtiy.users.get}/${id}`);
    return response;
  };
  
  export const createUser = async (user: User): Promise<Response<User>> => {
    const response = await post<User>(`${config.endpoints.securtiy.users.register}`, user);
    return response;
  };
  
  export const updateUser = async (id: string, user: User): Promise<Response<User>> => {
    const response = await put<User>(`${config.endpoints.securtiy.users.update}/${id}`, user);
    return response;
  };

  export const disableUser = async (id: string, user: User): Promise<Response<User>> => {
    const response = await put<User>(`${config.endpoints.securtiy.users.disable}/${id}`, user);
    return response;
  };
  
  export const deleteUser = async (id: string): Promise<Response<null>> => {
    const response = await del<null>(`${config.endpoints.securtiy.users.delete}/${id}`);
    return response;
  };



