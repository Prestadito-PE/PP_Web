import { LocalStorageAdapter } from '../../../../src/infra/cache'

export const makeLocalStorageAdapter = (): LocalStorageAdapter => new LocalStorageAdapter()
