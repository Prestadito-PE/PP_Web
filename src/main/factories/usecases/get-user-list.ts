// import { makeApiUrl } from '../http'
import { makeAuthorizeHttpClientDecorator } from '../decorators'
import { RemoteLoadSurveyList } from '../../../../src/data/usecases'
import { LoadSurveyList } from '@/domain/usecases'

export const makeRemoteLoadSurveyList = (): LoadSurveyList =>
  new RemoteLoadSurveyList('https://localhost:7082/api/security/users', makeAuthorizeHttpClientDecorator())