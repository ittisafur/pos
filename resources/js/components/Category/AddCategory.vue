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
		          <button @click.prevent="addCategory" class="mc-1 waves-effect waves-light btn-small">Submit</button>    
		        </div>
		      </div>
		    </form>
		  </div>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return {
				category:{}
			}
		},
		methods:{
			addCategory(){
				axios.post('/api/category', {
					name: this.category.name,
					cat_stock: this.category.cat_stock
				})
				.then(res => {
					alert('Created');
					this.$router.push('/home')
				})
			}
		}
	}
</script>

<style>
	
</style>