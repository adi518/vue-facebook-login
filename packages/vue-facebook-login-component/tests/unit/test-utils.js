/* global jest */
import flushPromises from 'flush-promises'

export const flush = async () => {
  await flushPromises()
  jest.runAllTimers()
  await flushPromises()
}
