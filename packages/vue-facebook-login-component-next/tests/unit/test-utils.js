/* global jest */
// import flushPromises from 'flush-promises'
import { flushPromises } from '@vue/test-utils'

export const flush = async () => {
  await flushPromises()
  jest.runAllTimers()
  await flushPromises()
}

export const mockSdk = Sdk => {
  Sdk.subscribe = jest.fn().mockResolvedValue({})
  Sdk.unsubscribe = jest.fn().mockResolvedValue()
  Sdk.getLoginStatus = jest.fn().mockResolvedValue({ status: 'unknown' })
  Sdk.login = jest.fn().mockResolvedValue({ status: 'connected' })
  Sdk.logout = jest.fn().mockResolvedValue()
}
