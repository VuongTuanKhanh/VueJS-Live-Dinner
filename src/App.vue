<template>
  <div id="app">
    <div id="nav">
      <NavBar :tabs="tabs" />
    </div>
    <router-view />
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
export default {
  components: {
    NavBar
  },
  data() {
    return {
      tabs: ["Home", "Menu", "About", "Gallery", "Contact"]
    };
  }
};
</script>

<style>
#nav {
  width: 100%;
  margin: 0px;
  position: fixed;
  z-index: 99999;
}

#app {
  width: 100%;
  margin: 0px;
  height: 100%;
  position: relative;
}

#content {
  z-index: 1;
  width: 100%;
}

.text-center {
  text-align: center !important;
}

a {
  text-decoration: none;
}

body {
  color: #666666;
  font-size: 15px;
  font-family: "Rubik", sans-serif;
  line-height: 1.80857;
}
</style>
