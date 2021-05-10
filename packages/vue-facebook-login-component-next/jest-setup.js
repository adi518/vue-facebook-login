import '@testing-library/jest-dom'
import { h } from 'vue'

global.h = h

console.info = jest.fn() // suppress Vue.js production tip logs
