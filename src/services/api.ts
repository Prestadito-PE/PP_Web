import axios from 'axios';
import { Response } from '../types/response.interface';
import config from './config';

const instance = axios.create({
  baseURL: config.apiBaseUrl,
});



export const get = async <T>(url: string): Promise<Response<T>> => {
  try {
    const response = await instance.get<Response<T>>(url);

    if(response.status>=300)
      return {...response.data,errorMessage:((response.status>=400 && response.status<500)?"client error":"server error")};
    else
      return response.data;
  } catch (err) {
    return { 
      error: true, 
      errorMessage: `${err}`,
      item:null, 
      items:null,
      totalItems:0 };
  }
};

export const post = async <T>(url: string, data?: unknown): Promise<Response<T>> => {
  try {
    const response = await instance.post<Response<T>>(url, data);
    if(response.status>=300)
      return {...response.data,errorMessage:((response.status>=400 && response.status<500)?"client error":"server error")};
    else
      return response.data;
  } catch (err) {
      return { 
        error: true, 
        errorMessage: `${err}`,
        item:null, 
        items:null,
        totalItems:0 };
  }
};

export const put = async <T>(url: string, data?: unknown): Promise<Response<T>> => {
  try {
    const response = await instance.put<Response<T>>(url, data);
    if(response.status>=300)
      return {...response.data,errorMessage:((response.status>=400 && response.status<500)?"client error":"server error")};
    else
      return response.data;
  } catch (err) {
    return { 
      error: true, 
      errorMessage: `${err}`,
      item:null, 
      items:null,
      totalItems:0 };
  }
};

export const del = async <T>(url: string): Promise<Response<T>> => {
  try {
    const response = await instance.delete<Response<T>>(url);
    if(response.status>=300)
      return {...response.data,errorMessage:((response.status>=400 && response.status<500)?"client error":"server error")};
    else
      return response.data;
  } catch (err) {
    return { 
      error: true, 
      errorMessage: `${err}`,
      item:null, 
      items:null,
      totalItems:0 };
  }
};
