import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/page/Home'
import Login from '@/page/Login'
import Register from '@/page/Register'
import Forget from '@/page/Forget'
import Contect from '@/page/Contect'
import Service from '@/page/Service'
import StatisticalChart from '@/page/StatisticalChart'
import MoleculeStucture from '@/page/MoleculeStucture'
import SearchResult from '@/page/SearchResult'
import ClinicalResult from '@/page/ClinicalResult'
import ClinicalDetail from '@/page/ClinicalDetail'
import MoleculeStuctureDe from '@/page/MoleculeStuctureDe'
import MoleculeSubStuctureDe from '@/page/MoleculeSubStuctureDe'
import Fdaresult from '@/szk/Fdaresult'
import zgzcresult from '@/szk/zgzcresult'
import Fhxresult from '@/szk/Fhxresult'
import Fdacresult from '@/szk/Fdacresult'
import FdapResult from '@/szk/FdapResult'
import CiResult from '@/szk/CiResult'
import detail from '@/page/detail'
import AdvancedSearch from '@/szk/AdvancedSearch'
import AdvancedSearchfhx from '@/szk/AdvancedSearch-fhx'
import AdvancedSearchfda from '@/szk/AdvancedSearch-fda'
import AdvancedSearchfdac from '@/szk/AdvancedSearch-fdac'
import AdvancedSearchfdap from '@/szk/AdvancedSearch-fdap'
import AdvancedSearchci from '@/szk/AdvancedSearch-ci'
Vue.use(Router)

const router = new Router({
  routes: [
    {
		path: '/',
		name: 'Home',
		component: Home,
		meta: { requiresAuth: false } 
    },{
		path: '/home',
		name: 'Home',
		component: Home,
		meta: { requiresAuth: false } 
    },{
		path: '/login',
		name: 'Login',
		component: Login
    },{
		path: '/register',
		name: 'Register',
		component: Register
    },{
		path: '/forget',
		name: 'Forget',
		component: Forget
    },{
		path: '/contect',
		name: 'Contect',
		component: Contect,
		meta: { requiresAuth: false } 
    },{
		path: '/service',
		name: 'Service',
		component: Service,
		meta: { requiresAuth: false } 
    },{
		path: '/statisticalChart/:id',
		name: 'StatisticalChart',
		component: StatisticalChart,
		meta: { requiresAuth: true } 
    },{
		path: '/moleculeStucture',
		name: 'MoleculeStucture',
		component: MoleculeStucture,
		meta: { requiresAuth: false } 
    },{
		path: '/searchResult/:id',
		name: 'SearchResult',
		component: SearchResult,
		meta: { requiresAuth: true }
    },{
		path: '/clinicalResult/:id',
		name: 'ClinicalResult',
		component: ClinicalResult,
		meta: { requiresAuth: true } 
    },{
		path: '/ClinicalDetail/:id',
		name: 'ClinicalDetail',
		component: ClinicalDetail,
		meta: { requiresAuth: true } 
    },{
		path: '/moleculeStuctureDe',
		name: 'MoleculeStuctureDe',
		component: MoleculeStuctureDe,
		meta: { requiresAuth: true } 
	},
	{
		path: '/detail/:id',
		name: 'detail',
		component: detail,
		meta: { requiresAuth: true } 
	},
	{
		path: '/moleculeSubStuctureDe/:id',
		name: 'MoleculeSubStuctureDe',
		component: MoleculeSubStuctureDe,
		meta: { requiresAuth: true } 
	},
	{
		path: '/fdar',
		name: 'fdar',
		component:Fdaresult  ,
		meta: { requiresAuth: true } 
	},
	{
		path: '/fhxr',
		name: 'fhx',
		component:Fhxresult  ,
		meta: { requiresAuth: true } 
	},
	{
		path: '/fdacr',
		name: 'fdac',
		component:Fdacresult  ,
		meta: { requiresAuth: true } 
	},
	{
		path: '/fdapr',
		name: 'fdap',
		component:FdapResult  ,
		meta: { requiresAuth: true } 
	},
	{
		path: '/sfzy',
		name: 'AdvancedSearch',
		component:AdvancedSearch  ,
		meta: { requiresAuth: true } 
	},
	{
		path: '/sfhx',
		name: 'AdvancedSearchfhx',
		component:AdvancedSearchfhx  ,
		meta: { requiresAuth: true } 
	},
	{
		path: '/sfda',
		name: 'AdvancedSearchfda',
		component:AdvancedSearchfda  ,
		meta: { requiresAuth: true } 
	},
	{
		path: '/sfdac',
		name: 'AdvancedSearchfdac',
		component:AdvancedSearchfdac  ,
		meta: { requiresAuth: true } 
	},
	{
		path: '/sfdap',
		name: 'AdvancedSearchfdap',
		component:AdvancedSearchfdap  ,
		meta: { requiresAuth: true } 
	},
	{
		path: '/sci',
		name: 'AdvancedSearchci',
		component:AdvancedSearchci  ,
		meta: { requiresAuth: true } 
	},

	{
		path: '/fzyr',
		name: 'zgzc',
		component:zgzcresult  ,
		meta: { requiresAuth: true } 
	},
	{
		path: '/cir',
		name: 'CiResult',
		component:CiResult  ,
		meta: { requiresAuth: true } 
	},

	{ 
    	path: '*', 
    	redirect: '/home',
		meta: { requiresAuth: false } 
	}
  ]
});

// 判断是否需要登录权限 以及是否登录
// router.beforeEach((to, from, next) => {
// 	if (to.matched.some(res => res.meta.requiresAuth)) {// 判断是否需要登录权限
// 		if (localStorage.getItem('username')) {// 判断是否登录
// 			next()
// 		} else {// 没登录则跳转到登录界面
// 			next({
// 				path: '/login',
// 				query: {redirect: to.fullPath}
// 			})
// 		}
// 	} else {
// 		next()
// 	}
// })

export default router
