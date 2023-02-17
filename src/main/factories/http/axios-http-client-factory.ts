import { AxiosHttpClient } from '../../../../src/infra/http'

export const makeAxiosHttpClient = (): AxiosHttpClient => new AxiosHttpClient()
