import { makeApiUrl, makeAxiosHttpClient } from '@/main/factories/http'
import { RemoteAuthentication } from '../../../../src/data/usecases'
import { Authentication } from '@/domain/usecases'

export const authenticationFactory=():Authentication=>
    new RemoteAuthentication(makeApiUrl('/security/api/users/login'), makeAxiosHttpClient())

    // security/api/users/login
