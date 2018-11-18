import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Product from '../components/Primary/Product'
import AddProduct from '../components/Product/AddProduct'
import EditProduct from '../components/Product/EditProduct'
import Category from '../components/Primary/Category'
import AddCategory from '../components/Category/AddCategory'
import EditCategory from '../components/Category/EditCategory'
import Sale from '../components/Primary/Sale'
import Customer from '../components/Primary/Customer'
import AddCustomer from '../components/Customer/AddCustomer'
import EditCustomer from '../components/Customer/EditCustomer'

const routes = [

	{ path: '/home', component: Product },
	{ path: '/product/add', component: AddProduct },
	{ path: '/product/edit/:id', component: EditProduct },

	{ path: '/category', component: Category },
	{ path: '/category/add', component: AddCategory },
	{ path: '/category/edit/:id', component: EditCategory },

	{ path: '/sales', component: Sale },

	{ path: '/customer', component: Customer },
	{ path: '/customer/add', component: AddCustomer },
	{ path: '/customer/edit/:id', component: EditCustomer }
];

const router = new VueRouter({
	routes,
	hashbang : false,
	mode : 'history'
})

export default router