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
      <Introduction>
        <div
          style="margin-top: 50px; font-family: 'Rubik', sans-serif;
  font-size: 30px;
  color: #010101;
  font-weight: 500;"
        >
          <p>
            Sed tincidunt, neque at egestas imperdiet, nulla sapien blandit
            nunc, sit amet pulvinar orci nibh ut massa. Proin nec lectus sed
            nunc placerat semper. Duis hendrerit elit nec sapien porttitor, ut
            pretium ipsum feugiat. Aenean volutpat porta nisi in gravida.
            Curabitur pulvinar ligula sed facilisis bibendum. Nullam vitae nulla
            elit.
          </p>
          <p>
            Integer purus velit, eleifend eu magna volutpat, porttitor blandit
            lectus. Aenean risus odio, efficitur quis erat eget, mattis
            tristique arcu. Fusce in ante enim. Integer consectetur elit nec
            laoreet rutrum. Mauris porta turpis nec tellus accumsan
            pellentesque. Morbi non quam tempus, convallis urna in, cursus
            mauris.
          </p>
        </div>
      </Introduction>
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
import Introduction from "@/components/Introduction.vue";
import SpecialMenu from "@/components/SpecialMenu.vue";
import Quote from "@/components/Quote.vue";
import ContactBar from "@/components/ContactBar.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: "About",
  components: {
    Slider,
    Introduction,
    SpecialMenu,
    Quote,
    ContactBar,
    Footer
  },
  data() {
    return {
      welcome_text: "About",
      restaurant_name: "Yamifood Restaurant",
      btn_text: "Reservation",
      intro_text_1: "About us and Our Journey",
      intro_text_2: ""
    };
  }
};
</script>

<style scoped></style>
