<template>
  <div id="app">
    <b-navbar variant="dark">
      <b-navbar-nav>
        <img src="@/assets/logo3.png" height="60">
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
  color: #191c2a;
  height: 100vh;
  background-color: #191c2a;
}

#nav {
  padding: 20px;
}

#nav a {
  font-weight: bold;
  color: #191c2a;
}

#nav a.router-link-exact-active {
  color: #ffffff;
}
#bgColor {
  height: 100hv;
  background-color: #191c2a;
}
</style>
