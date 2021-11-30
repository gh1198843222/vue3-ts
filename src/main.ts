import Vue,{ createApp } from 'vue'
import App from './App.vue'
import router from './router'
import AntDesign from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'

createApp(App).use(router).use(AntDesign).mount('#app')


