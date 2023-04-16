import { DeviceType } from "../../../utils/DeviceType";

export interface User {
    strEmail:    string;
    strPassword: string;
    strRolId:    string;
}


export interface Login{
  strEmail: string;
  strPassword: string;
  strDeviceName: string;
}


export interface ResponseLogin{
  strId:string;
  strToken:string;
}




export class FormUserServiceMapper {
    static map(formValues: { [key: string]: any }): User {
      return {
        strEmail: formValues.strEmail,
        strPassword: formValues.strPassword,
        strRolId: '1',
      };
    }
}

export class FormLoginServiceMapper {
  static map(formValues: { [key: string]: any }): Login {
    return {
      strEmail: formValues.strEmail,
      strPassword: formValues.strPassword,
      strDeviceName: DeviceType(),
    };
  }
}