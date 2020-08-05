<template>
  <div id="app">
    <div id="nav">
      <NavBar />
    </div>
    <div id="content">
      <Slider />
      <Introduction />
      <Quote />
      <SpecialMenu />
      <Gallery />
      <ContactBar />
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import Slider from "@/components/Slider.vue";
import Introduction from "@/components/Introduction.vue";
import Quote from "@/components/Quote.vue";
import SpecialMenu from "@/components/SpecialMenu.vue";
import Gallery from "@/components/Gallery.vue";
import ContactBar from "@/components/ContactBar.vue";
export default {
  components: {
    NavBar,
    Slider,
    Introduction,
    Quote,
    SpecialMenu,
    Gallery,
    ContactBar
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
