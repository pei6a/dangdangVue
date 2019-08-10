import Vue from 'vue'
// import App from 'module';
import Router from 'vue-router'
import Home from 'components/pei/home/index.vue'
import Miao from 'components/pei/miao/miao.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta:{
        miaofooter:false,
        homeFooter:true,
        auth:false
      }
    },
    {
      path: '/miao',
      name: 'miao',
      component: Miao,
      meta:{
        miaofooter:true,
        auth:false
      }
    },
    {
      path: '/pinmiao',
      name: 'pinmiao',
      meta:{
        miaofooter:true,
        auth:false
      },
      component:()=>import('../components/pei/pinmiao')
    },
    {
      path: '/pintuan',
      name: 'pintuan',
      meta:{
        miaofooter:true,
        auth:false
      },
      component:()=>import('../components/pei/pintuan')
    },
    {
      path: '/grabble',
      name: 'grabble',
      meta:{
        miaofooter:false,
        auth:false
      },
      component:()=>import('../components/pei/grabble')
    },
    // {
    //   path:'/',
    //   redirect:'/dd_category'
    // },
    {
      path: '/dd_category',
      name: 'ctgPage',
      meta:{
        title:'商品分类',
        homeFooter:true,
      },
      component: ()=>import('components/ctgPage/index.vue')
    },
    {
      path: '/dd_category/cid',
      name: 'ctgDetailPage',
      meta:{
        title:'商品详情',
        homeFooter:true,
        
      },
      component: () => import('components/ctgDetailPage/index.vue'),
    },
    {
      path:'/filter',
      name:'filterCid',
      meta:{
        title:'筛选',
        
      },
      component:resolve=>require(['../components/select/index.vue'],resolve)
    },
    {
      path:'/cart',
      name:'cart',
      meta:{
        title:'购物车',
        
      },
      component:resolve=>require(['../components/cart/index.vue'],resolve)
    },
    {
      path:'/login',
      name:'login',
      meta:{
        title:'login',
        
      },
      component:resolve=>require(['../components/login/index.vue'],resolve)
    }
  ]
})
