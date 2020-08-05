<template>
  <div>
    <div id="content">
      <Slider
        :welcome_text="welcome_text"
        :restaurant_name="restaurant_name"
        :btn_text="btn_text"
        :intro_text_1="intro_text_1"
        :intro_text_2="intro_text_2"
      />
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
  },
  data() {
    return {
      welcome_text: "Gallery",
      restaurant_name: "Yamifood Restaurant",
      btn_text: "Reservation",
      intro_text_1: "Take a good look at our services",
      intro_text_2: "Experience these stunning dishes is a must of your life"
    };
  }
};
</script>

<style scoped></style>
