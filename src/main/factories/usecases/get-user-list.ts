// import { makeApiUrl } from '../http'
import { makeAuthorizeHttpClientDecorator } from '../decorators'
import { RemoteLoadSurveyList } from '../../../../src/data/usecases'
import { LoadSurveyList } from '@/domain/usecases'

export const makeRemoteLoadSurveyList = (): LoadSurveyList =>
  new RemoteLoadSurveyList('http://localhost:1001/api/security/users/active', makeAuthorizeHttpClientDecorator())