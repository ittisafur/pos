<template>
	<div class="app-container">
		<toolbar></toolbar>
		<router-view></router-view>
		<!-- <app-footer></app-footer> -->
	</div>
</template>

<script>

import Toolbar from './toolbar'
import Product from '../components/Primary/Product'
import Category from '../components/Primary/Category'

export default{
	components:{
		Toolbar
	}
}

</script>

<style>
	
</style>