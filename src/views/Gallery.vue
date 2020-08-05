<template>
  <div>
    <div id="content">
      <Slider />
      <Gallery />
      <ContactBar />
      <Footer />
    </div>
    <router-view />
  </div>
</template>

<script>
import Slider from "@/components/Slider.vue";
import Gallery from "@/components/Gallery.vue";
import ContactBar from "@/components/ContactBar.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: "Menu",
  components: {
    Slider,
    Gallery,
    ContactBar,
    Footer
  }
};
</script>

<style scoped></style>
