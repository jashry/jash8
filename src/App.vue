<template>
  <div id="app">
    <Navs></Navs>
    <router-view/>
  </div>
</template>

<script>
import Navs from "./components/Navs";
export default {
  name: "App",
  mounted() {
    const dm = document.documentElement || document.body.parentElement;
    const dmw = dm.clientWidth;
    if (dmw <= 375) {
      dm.style.fontSize = "16px";
    } else {
      dm.style.fontSize = "20px";
    }
  },
  components: {
    Navs
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
a {
  text-decoration: none;
  color: #333;
}
</style>
