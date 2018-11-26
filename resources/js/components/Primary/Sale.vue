<template>
	<div>
		<div class="container">
			<div class="row">
				<div class="col s3">
					<h1>Sales</h1>
				</div>
				<div class="col s9">
					<router-link to="/customer">
						<button class="btnspace waves-effect waves-light btn-small">View Customers</button>
					</router-link>		
				</div>
			</div>
			<div class="row">
				<div class="col s4">
					<input type="text" id="myInput" v-model="search" class="validate" placeholder="Search for Products..">
					<ul class="collection">
						<li class="sale-li" v-for="product in filterSearch" :key="product.id">
							<a class="collection-item">{{product.name}}</a>
						</li>
					</ul>
				</div>
				<div class="col s8">
					
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data(){
		return{
			products: [],
			search:''
		}
	},
	created(){
		this.fetchProducts()
	},
	computed:{
		filterSearch(){
			return this.products.filter((product)=>{
				return product.name.match(this.search)
			})
		}
	},
	methods:{
		fetchProducts(){
			axios.get('/api/products')
			.then(res => this.products = res.data)
		}
	}
}
</script>

<style>
	.btnspace{
		margin: 55px 0px 10px 10px;
	}
	h1{
		font-size: 3.5rem;
	}
	.sale-li > a{
		cursor: pointer;
	}
</style>