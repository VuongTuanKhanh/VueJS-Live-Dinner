<template>
  <div id="content">
    <Slider
      :welcome_text="welcome_text"
      :restaurant_name="restaurant_name"
      :btn_text="btn_text"
      :intro_text_1="intro_text_1"
      :intro_text_2="intro_text_2"
    />
    <Introduction
      :welcome_text="welcome_text"
      :restaurant_name="restaurant_name"
      title="Little Story"
      :text_1="text_1"
      :text_2="text_2"
    />
    <Quote :text="text" author="Micheal James" />
    <SpecialMenu />
    <Gallery />
    <ContactBar />
    <Footer
      :footer_title="footer_title"
      :footer_text="footer_text"
      :footer_btn_text="footer_btn_text"
      :contact_title="contact_title"
      :address="address"
      :phone="phone"
      :gmail="gmail"
      :hour_title="hour_title"
      :right_title="right_title"
    />
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
  },
  data() {
    return {
      welcome_text: "Welcome To",
      restaurant_name: "Yamifood Restaurant",
      btn_text: "Reservation",
      intro_text_1:
        "See how your users experience your website in realtime or view",
      intro_text_2: "trends to see any changes in performance over time.",
      title: "Little Story",
      text:
        "If you're not the one cooking, stay out of the way and compliment the chef",
      text_1:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque auctor suscipit feugiat. Ut at pellentesque ante, sed convallis arcu. Nullam facilisis, eros in eleifend luctus, odio ante sodales augue, eget lacinia lectus erat et sem.",
      text_2:
        "Sed semper orci sit amet porta placerat. Etiam quis finibus eros. Sed aliquam metus lorem, a pellentesque tellus pretium a. Nulla placerat elit in justo vestibulum, et maximus sem pulvinar.",
      footer_title: "About Us",
      footer_text:
        "Integer cursus scelerisque ipsum id efficitur. Donec a dui fringilla, gravida lorem ac, semper magna. Aenean rhoncus ac lectus a interdum. Vivamus semper posuere dui.",
      footer_btn_text: "Subscribe",
      contact_title: "Contact information",
      address: "132 Suong Nguyet Anh, Chau Doc District",
      phone: "(+84) 587.601.494",
      gmail: "info@gmail.com",
      hour_title: "Opening hours",
      right_title: "All Rights Reserved. © 2020"
    };
  }
};
</script>
