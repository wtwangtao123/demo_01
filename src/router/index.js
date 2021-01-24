import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import PageA from "../views/page_a/PageA";
import PageC from "../views/page_c/PageC";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      meta:{
        keepAlive: false
      }
    },
    {
      path:'/demo',
      name:'PageA',
      component: PageA,
      meta:{
        keepAlive: true
      }
    },
    {
      path: '/demo2/:id',
      name: 'PageC',
      component: PageC,
      props:true,
      meta:{
        keepAlive: false
      }
    },
    {
      path: '/list',
      name: 'UserList',
      component: () => import('@/views/list/list'),
      meta: { title: '用户列表', icon: 'documentation', affix: true }
    },
    {
      path: '/edit',
      name: 'UserEdit',
      component: () => import('@/views/edit/edit'),
      meta: { title: '用户编辑', icon: 'documentation', affix: true }
    },
    {
      path: '/detail',
      name: 'UserDetail',
      component: () => import('@/views/detail/detail'),
      meta: { title: '用户编辑', icon: 'documentation', affix: true }
    }
  ]
})



