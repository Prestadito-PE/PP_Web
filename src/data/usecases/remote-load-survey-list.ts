import { HttpClient, HttpStatusCode } from '../protocols/http'
import { UnexpectedError, AccessDeniedError } from '../../domain/errors'
import { LoadSurveyList } from '@/domain/usecases'

export class RemoteLoadSurveyList implements LoadSurveyList {
  constructor(
    private readonly url: string,
    private readonly httpClient: HttpClient<RemoteLoadSurveyList.Model[]>
  ) { }

  async loadAll(): Promise<LoadSurveyList.Model[]> {
    const httpResponse = await this.httpClient.request({
      url: this.url,
      method: 'get'
    })
    const remoteSurveys = httpResponse.body || []
    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok: return remoteSurveys
      case HttpStatusCode.noContent: return []
      case HttpStatusCode.forbidden: throw new AccessDeniedError()
      default: throw new UnexpectedError()
    }
  }
}

export namespace RemoteLoadSurveyList {
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
