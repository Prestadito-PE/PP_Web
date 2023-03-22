import { AccountModel } from '@/domain/models'

export interface AddAccount {
  add: (params: AddAccount.Params) => Promise<AddAccount.Model>
}

export namespace AddAccount {
  export type Params = {
    strEmail:string
    strPassword:string
    strPasswordConfirmation: string
  }

  export type Model = AccountModel

  
}
