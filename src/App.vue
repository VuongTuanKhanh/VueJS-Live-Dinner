<template>
  <div id="app">
    <div id="nav">
      <NavBar />
    </div>
    <div id="content">
      <Slider />
    </div>
    <router-view />
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import Slider from "@/components/Slider.vue";
export default {
  components: {
    NavBar,
    Slider
  }
};
</script>

<style>
#nav {
  width: 100%;
  margin: 0px;
  height: 100%;
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

a {
  text-decoration: none;
}

</style>
