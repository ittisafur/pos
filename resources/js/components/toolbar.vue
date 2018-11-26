<template>
  <div>
    <nav>
      <div class="nav-wrapper">
        <router-link to="/home">
          <a class="sm-font brand-logo">Point of Sales ( POS )</a>
        </router-link>
        
        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <li><router-link to="/category">Category</router-link></li>
          <li><router-link to="/sales">Sales</router-link></li>
          <li><router-link to="/customer">Customer</router-link></li>
        </ul>
      </div>
    </nav>
    
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>
.brand-logo{
  margin-left: 15px;
}
.sm-font{
  font-size: 22px;
}
</style>