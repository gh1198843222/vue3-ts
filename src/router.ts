import { createRouter, createWebHistory } from 'vue-router'


export const routes = [{
  path: '/',
  redirect:'/app/list'
}, {
  path: "/app",
  component: () => import('./views/index.vue'),
  meta:{},
  children: [{
    path: 'list',
    meta:{name:'列表'},
    component:()=> import('./views/list.vue')
  },{
    path: 'form',
    meta:{name:'表单'},
    component:()=> import('./views/list.vue')
  },{
    path: 'detail',
    meta:{name:'详情'},
    component:()=> import('./views/list.vue')
  }]
}]

const router = createRouter({
  history: createWebHistory(process.env.VUE_APP_BASE_URL),
  routes
})


export default router