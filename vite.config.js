import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
//
import path from 'path'
const {resolve} = path
// https://vitejs.dev/config/
export default defineConfig({
  resolve:{
    alias:{
      '@':resolve(__dirname,'src'),
      'comps':resolve(__dirname,'src/components')
    },
  },
  plugins: [vue()]
})
