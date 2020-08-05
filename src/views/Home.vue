<template>
  <div id="content">
    <Slider />
    <Introduction />
    <Quote />
    <SpecialMenu />
    <Gallery />
    <ContactBar />
    <Footer />
  </div>
</template>

<script>
import Slider from "@/components/Slider.vue";
import Introduction from "@/components/Introduction.vue";
import Quote from "@/components/Quote.vue";
import SpecialMenu from "@/components/SpecialMenu.vue";
import Gallery from "@/components/Gallery.vue";
import ContactBar from "@/components/ContactBar.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: "Home",
  components: {
    Slider,
    Introduction,
    Quote,
    SpecialMenu,
    Gallery,
    ContactBar,
    Footer
  }
};
</script>
