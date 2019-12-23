<template>
  <div id="app">
    <b-navbar variant="dark">
      <b-navbar-nav>
        <img src="@/assets/logo3.png" height="60">
        <div id="nav">
          <router-link to="/">หน้าหลัก</router-link> | 
          <router-link to="/about">เพิ่มรายการ</router-link>  | 
          <router-link to="/product">สินค้า</router-link>
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
  color: #ffffff;
}

#nav a.router-link-exact-active {
  color: #ffffff;
}
#bgColor {
  height: 100hv;
  background-color: #191c2a;
}
</style>
