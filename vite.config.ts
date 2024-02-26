import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import tailwindcss from 'tailwindcss'
// import autoprefixer from 'autoprefixer'
// import postcsspxtorem from 'postcss-pxtorem'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/dist',
  // server: {
  //   proxy: {
  //     '/api': {
  //       target: 'http://localhost:5000', // 设置代理目标
  //       changeOrigin: true, // 是否改变请求源地址
  //       rewrite: (path) => path.replace(/^\/api/, '') // 将 /api 替换为空字符串
  //     }
  //   }
  // },
  plugins: [
    vue(),
    AutoImport({
      imports: ['vue', 'vue-router'],
      dts: './auto-import.d.ts',
      eslintrc: {
        enabled: false, // 第一次true 生成文件
        filepath: './.eslintrc-auto-import.json',
        globalsPropValue: true
      }
    })
  ],
  css: {
    postcss: {
      plugins: [
        tailwindcss()
        // autoprefixer({
        //   overrideBrowserslist: [
        //     'Android 4.1',
        //     'iOS 7.1',
        //     'Chrome > 31',
        //     'ff > 31',
        //     'ie >= 8',
        //     'last 10 versions' // 所有主流浏览器最近10版本用
        //   ],
        //   grid: true
        // }),
        // postcsspxtorem({
        //   rootValue: 192, // 设计稿宽度的1/ 10 例如设计稿按照 1920设计 此处就为192
        //   propList: ['*', '!border'], // 除 border 外所有px 转 rem
        //   selectorBlackList: ['.el-'] // 过滤掉.el-开头的class，不进行rem转换
        // })
      ]
    }
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
      '*': ''
    }
  }
})
