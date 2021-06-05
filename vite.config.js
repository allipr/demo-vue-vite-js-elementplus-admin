import {
  defineConfig
} from 'vite'
import vue from '@vitejs/plugin-vue'
//path
import path from 'path'
const {
  resolve
} = path
//mock
import {
  viteMockServe
} from 'vite-plugin-mock'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      'comps': resolve(__dirname, 'src/components'),
      'apis': resolve(__dirname, 'src/apis'),
      'layouts': resolve(__dirname, 'src/layouts'),
      'views': resolve(__dirname, 'src/views'),
      'utils': resolve(__dirname, 'src/utils'),
      'routes': resolve(__dirname, 'src/routes'),
      'styles': resolve(__dirname, 'src/styles'),
      'plugins': resolve(__dirname, 'src/plugins'),
    },
  },
  plugins: [vue(), viteMockServe({
    supportTs: false
  })]
})