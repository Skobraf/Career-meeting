<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style>
ul {
  list-style: none;
}
a {
  text-decoration: none;
  color: white;
}
#app {
  height: 650px;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  max-width: 400px;
  margin: 0 auto;
  color: #ffffff;
  background-color: #160D28;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
