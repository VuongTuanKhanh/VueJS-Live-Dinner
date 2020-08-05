<template>
  <div>
    <div id="content">
      <Slider />
      <ContactBar />
      <Footer />
    </div>
    <router-view />
  </div>
</template>

<script>
import Slider from "@/components/Slider.vue";
import ContactBar from "@/components/ContactBar.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: "Menu",
  components: {
    Slider,
    ContactBar,
    Footer
  }
};
</script>

<style scoped></style>
