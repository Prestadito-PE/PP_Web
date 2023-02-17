import { HttpClient, HttpStatusCode } from '@/data/protocols/http'
import { UnexpectedError, AccessDeniedError } from '@/domain/errors'
import { UserList } from '@/domain/usecases'

export class RemoteUserList implements UserList {
  constructor(
    private readonly url: string,
    private readonly httpClient: HttpClient<RemoteUserList.Model[]>
  ) { }

  async loadAll(): Promise<UserList.Model[]> {
    const httpResponse = await this.httpClient.request({
      url: this.url,
      method: 'get'
    })
    // const remoteSurveys = httpResponse.body || []
    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok: return []
      // case HttpStatusCode.ok: return remoteSurveys.map(remoteSurvey => ({
      //   ...remoteSurvey
      // }))
      case HttpStatusCode.noContent: return []
      case HttpStatusCode.forbidden: throw new AccessDeniedError()
      default: throw new UnexpectedError()
    }
  }
}

// export namespace RemoteLoadSurveyList {
//   export type Model = {
//     id: string
//     question: string
//     date: string
//     didAnswer: boolean
//   }
// }

export namespace RemoteUserList {
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

