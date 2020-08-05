<template>
  <div>
    <div id="content">
      <Slider />
      <SpecialMenu />
      <Quote />
      <ContactBar />
      <Footer />
    </div>
    <router-view />
  </div>
</template>

<script>
import Slider from "@/components/Slider.vue";
import SpecialMenu from "@/components/SpecialMenu.vue";
import Quote from "@/components/Quote.vue";
import ContactBar from "@/components/ContactBar.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: "Menu",
  components: {
    Slider,
    SpecialMenu,
    Quote,
    ContactBar,
    Footer
  }
};
</script>

<style scoped></style>
