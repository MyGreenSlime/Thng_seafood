<template>
  <div id="app">
    <b-navbar type="dark" variant="dark">
      <b-navbar-nav>
        <div id="nav">
          <router-link to="/">Home</router-link> | 
          <router-link to="/about">About</router-link>  | 
          <router-link to="/profile">profile</router-link> | 
          <router-link to="/profile/address">address</router-link> | 
          <router-link to="/profile/address/10">address detail</router-link> | 
          <router-link to="/cart">cart</router-link> | 
          <router-link to="/product">product</router-link> | 
          <router-link to="/product/1">product detail</router-link> | 
          <router-link to="/product/categories/5">product cate</router-link> | 
          <router-link to="/checkout">checkout</router-link>
        </div>
      </b-navbar-nav>
    </b-navbar>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #ffffff;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
