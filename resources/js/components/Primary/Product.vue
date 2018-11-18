<template>
	<div>
		<div class="container">
			<div class="row">
				<div class="col s3">
					<h1>Product</h1>
				</div>
				<div class="col s9">

					<router-link to="/product/add">
						<button class="btnspace waves-effect waves-light btn-small">Add Product</button>
					</router-link>

					<router-link to="/category/add">
						<button class="btnspace waves-effect waves-light btn-small">Add Category</button>
					</router-link>	
					<router-link to="/customer/add">
						<button class="btnspace waves-effect waves-light btn-small">Add Customer</button>
					</router-link>		
				</div>
			</div>
			<div class="row">
				<div class="col-md-12">
					<table class="table table-condensed" >
					    <thead>
					      <tr>
					        <th>Serial Number</th>
					        <th>Product</th>
					        <th>Buy Price</th>
					        <th>Sale Price</th>
					        <th>Stock</th>
					        <th>Edit</th>
					        <th>Delete</th>
					      </tr>
					    </thead>
					    <tbody>
					      <tr v-for="(Item, i) in Products" :key="Item.id">
					        <td>{{i+1}}</td>
					        <td>{{Item.name}}</td>
					        <td>{{Item.buy_price}}</td>
					        <td>{{Item.sales_price}}</td>
					        <td>{{Item.stock}}</td>
					        <td>
					        	<router-link :to="`/product/edit/${Item.id}`">
				        			<i class="far fa-edit"></i>
					        	</router-link>
					        </td>
					        <td>
					        	<a @click.prevent="deleteProducts(Item.id)">
					        		<i class="far fa-trash-alt"></i>
					        	</a>
					        </td>
					      </tr>
					    </tbody>
					</table>
				</div>
			</div>
		</div>
		
		
	</div>
</template>

<script>
// import GetProduct from '../Product/GetProduct.vue'
export default {
	data(){
		return {
			Products: [],
		}		
	},
	created(){	
		this.fetchProducts()
	},
	components:{
		
	},
	methods:{
		fetchProducts(){
			axios.get('/api/products')
			.then(res =>{this.Products = res.data})
		},
		deleteProducts(id){
			if(confirm("Are you Sure")){
				axios.delete(`api/products/${id}`)
				.then(res => {
					this.fetchProducts()
				})
				.catch(err => console.log(err))
			}
		}
	}
}
</script>

<style scoped>
	.btnspace{
		margin: 55px 0px 10px 10px;
	}
	h1{
		font-size: 3.5rem;
	}
</style>