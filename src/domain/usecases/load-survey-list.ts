export interface LoadSurveyList {
  loadAll: () => Promise<LoadSurveyList.Model[]>
}

export namespace LoadSurveyList {
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
