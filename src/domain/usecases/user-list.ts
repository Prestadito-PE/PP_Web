export interface UserList {
  loadAll: () => Promise<UserList.Model[]>
}

export namespace UserList {
  export type Model = {
    id: string
    strDOI: string
    objRol: Parameter,
    blnRegisterComplete: boolean,
    objStatus: Parameter,
    strEmail: string,
    blnActive: boolean
  }

  export type Parameter = {
    strCode: string,
    strDescription: string
  }
}
