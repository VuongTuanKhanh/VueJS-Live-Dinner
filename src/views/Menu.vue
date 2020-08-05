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
  },
  data() {
    return {
      welcome_text: "Menu",
      restaurant_name: "Yamifood Restaurant",
      btn_text: "Reservation",
      intro_text_1: "Welcome to the heaven of flavor",
      intro_text_2: "Bring you up to the sky"
    };
  }
};
</script>

<style scoped></style>
