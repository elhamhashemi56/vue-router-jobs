<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <!-- <router-link to="/about">About</router-link> -->
    <router-link :to="{name:'About'}">About</router-link> |
    <router-link :to="{name:'Jobs'}">Jobs</router-link> |
    <a href="/about">about</a>
  </nav>

  <button @click="backward">Go Back</button>
  <button @click="redirect">Redirect</button>
  <button @click="forward">Go Forward</button>

  <router-view/>
</template>

<script>
export default {
  methods:{
    backward(){
      this.$router.go(-1)
    },
    redirect(){
      this.$router.push({name:'Home'})
    },
    forward(){
      this.$router.go(1)
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: white;
  background-color: red;
  padding: 7px;
  border-radius: 5px;
  text-decoration: none;
}
button{
  margin: 5px;
}
</style>
