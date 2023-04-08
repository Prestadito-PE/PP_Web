export interface User {
    strEmail:    string;
    strPassword: string;
    strRolId:    string;
}

export interface FormUser{
    strEmail: string;
    strPassword: string;
    strconfirmPassword: string;
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