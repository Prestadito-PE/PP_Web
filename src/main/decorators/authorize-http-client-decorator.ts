import { HttpClient, HttpRequest, HttpResponse } from '@/data/protocols/http'
import { GetStorage } from '@/data/protocols/cache'

export class AuthorizeHttpClientDecorator implements HttpClient {
  constructor(
    private readonly getStorage: GetStorage,
    private readonly httpClient: HttpClient
  ) { }

  async request(data: HttpRequest): Promise<HttpResponse> {
    // const account = this.getStorage.get('account')
    // if (account?.accessToken) {
    //   Object.assign(data, {
    //     headers: Object.assign(data.headers || {}, {
    //       'x-access-token': account.accessToken
    //     })
    //   })
    // }
    Object.assign(data, {
      headers: Object.assign(data.headers || {}, {
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZjM0ODRhZmUxMTcwZjI5ZTJiMjg3MCIsInN0ckRPSSI6IiIsInN0ckNvZGVSb2wiOiJBRE0iLCJzdHJEZXNjcmlwdGlvblJvbCI6IkFkbWluaXN0cmFkb3IiLCJzdHJFbWFpbCI6Imp1bmlvcmF2aWxhMUBnbWFpbC5jb20iLCJuYmYiOjE2NzcxODI5MjcsImV4cCI6MTY3NzE4MzIyNywiaWF0IjoxNjc3MTgzMjI3LCJpc3MiOiJodHRwczovL2xvY2FsaG9zdDo1MDAxLyIsImF1ZCI6Imh0dHBzOi8vbG9jYWxob3N0OjUwMDEvIn0.qJc_MQZ4IeixXqZfh9jdnW58iNCBRSd-MH19rsu27yY'
      })
    })
    const httpResponse = await this.httpClient.request(data)
    return httpResponse
  }
}
