import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Product from '../components/Primary/Product'
import AddProduct from '../components/Product/AddProduct'
import EditProduct from '../components/Product/EditProduct'
import Category from '../components/Primary/Category'
import Sale from '../components/Primary/Sale'
import Customer from '../components/Primary/Customer'

const routes = [
	{ path: '/home', component: Product },
	{ path: '/product/add', component: AddProduct },
	{ path: '/product/edit/:id', component: EditProduct },
	{ path: '/category', component: Category },
	{ path: '/sales', component: Sale },
	{ path: '/customer', component: Customer }
];

const router = new VueRouter({
	routes,
	hashbang : false,
	mode : 'history'
})

export default router