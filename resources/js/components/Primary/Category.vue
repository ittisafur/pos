<template>
	<div>
		<div class="container">
			<div class="row">
				<div class="col s3">
					<h1>Category</h1>		
				</div>
				<div class="col s9">
					<router-link to="/home">
						<button class="btnspace waves-effect waves-light btn-small">Back to Home</button>
					</router-link>
				
					<router-link to="/category/add">
						<button class="btnspace waves-effect waves-light btn-small">Add Category</button>
					</router-link>
				</div>
			</div>
			
			<div class="row">
				<div class="col-md-12">
					<table class="table table-condensed" >
					    <thead>
					      <tr>
					        <th>Serial Number</th>
					        <th>Category</th>
					        <th>Category Stock</th>
					        <th>Edit</th>
					        <th>Delete</th>
					      </tr>
					    </thead>
					    <tbody v-for="(category, i) in categories" :key="category.id">
					      <tr>
					        <td>{{i+1}}</td>
					        <td>{{category.name}}</td>
					        <td>{{category.cat_stock}}</td>
					        <td>
					        	<router-link :to="`category/edit/${category.id}`">
				        			<i class="far fa-edit"></i>
					        	</router-link>
					        </td>
					        <td>
					        	<a href="#" @click.prevent="deleteCategory(category.id)">
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
export default {
	data(){
		return {
			categories: []
		}
	},
	created(){
		this.fetchCategory()
	},
	methods:{
		fetchCategory(){
			axios.get('/api/category')
			.then(res => this.categories = res.data )	
		},
		deleteCategory(id){
			if(confirm('Are You Sure ?')){
				axios.delete(`/api/category/${id}`)
				.then( res => {
					alert('You have deleted the category')
					this.$router.push('/home')
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