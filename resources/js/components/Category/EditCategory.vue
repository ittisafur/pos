<template>
	<div>
		<div class="container">
		  <div class="row">
		    <form class="col s12 mt-3">
		      <div class="row">
		        <div class="input-field col s12">
		          <input id="name" type="text" class="validate" v-model="category.name">
		          <label for="name">Category Name</label>
		        </div>
		      </div>
		      <div class="row">
		        <div class="input-field col s12">
		          <input id="stock" type="number" class="validate" v-model="category.cat_stock">
		          <label for="stock">Stock</label>
		        </div>
		      </div>
		      <div class="row">
		        <div class="col s3">
		          <button @click.prevent="updateCategory" class="mc-1 waves-effect waves-light btn-small">Submit</button>    
		        </div>
		      </div>
		    </form>
		  </div>
		</div>
	</div>
</template>

<script>
	export default{
		created(){
			axios.get(`/api/category/${this.$route.params.id}`)
			.then(res => {
				this.category = res.data;
			})
		},
		data(){
			return{
				category:{}
			}
		},
		methods:{
			updateCategory(){
				axios.put(`/api/category/${this.$route.params.id}`, this.category)
				.then(res => {
					alert(`Updated ID ${this.$route.params.id}`)
					if (confirm('Return to Home')) {
						this.$router.push('/home')
					}
				})
			}
		}
	}
</script>

<style>
	
</style>