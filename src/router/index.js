import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		name: 'Home',
		component: () => import('../views/Home')
	},
	{
		path: '/lab1',
		name: 'lab1',
		component: () => import('../views/Lab1')
	},
	{
		path: '/lab2',
		name: 'lab2',
		component: () => import('../views/Lab2')
	},
	{
		path: '/lab3',
		name: 'lab3',
		component: () => import('../views/Lab3')
	},
	{
		path: '/lab4',
		name: 'lab4',
		component: () => import('../views/Lab4')
	},
	{
		path: '/lab5',
		name: 'lab5',
		component: () => import('../views/Lab5')
	},
	{
		path: '/lab6',
		name: 'lab6',
		component: () => import('../views/Lab6')
	},
	{
		path: '/lab7',
		name: 'lab7',
		component: () => import('../views/Lab7')
	},
	{
		path: '/lab8',
		name: 'lab8',
		component: () => import('../views/Lab8')
	},
	{
		path: '/lab9',
		name: 'lab9',
		component: () => import('../views/Lab9')
	},
	{
		path: '/lab10',
		name: 'lab10',
		component: () => import('../views/Lab10')
	},
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
