<template>
  <div class="slider-container">
    <div class="menu">
      <label for="slide-dot-1"></label>
      <label for="slide-dot-2"></label>
      <label for="slide-dot-3"></label>
    </div>

    <div v-for="slide in Slides" :key="slide.id">
      <input
        type="radio"
        name="slides"
        :checked="current_Slide == slide.id"
        @click="current_Slide = slide.id"
        :id="slide.id"
      />
      <div class="slide">
        <img :src="slide.image" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
import image1 from "@/assets/images/slider-01.jpg";
import image2 from "@/assets/images/slider-02.jpg";
import image3 from "@/assets/images/slider-03.jpg";

export default {
  data() {
    return {
      current_Slide: "slide-dot-1",
      Slides: [
        {
          id: "slide-dot-1",
          image: image1
        },
        {
          id: "slide-dot-2",
          image: image2
        },
        {
          id: "slide-dot-3",
          image: image3
        }
      ]
    };
  },
  mounte() {
    this.interval = setInterval(
      function() {
        //let slides = document.getElementsByClassName("slides");
      }.bind(this),
      3000
    );
  }
};
</script>

<style>
.slider-container {
  height: 730px;
  width: 100%;
  position: relative;
  overflow: hidden;
  text-align: center;
}

.menu {
  position: absolute;
  left: 0;
  z-index: 9999999;
  width: 100%;
  bottom: 0;
}

.menu label {
  cursor: pointer;
  display: inline-block;
  width: 16px;
  height: 16px;
  background: #fff;
  border-radius: 50px;
  margin: 0 0.2em 1em;
  transition: all 0.3s ease;
}

.menu label:hover {
  background: red;
}

.slide {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 100%;
  z-index: 10;
  background-size: cover;
  background-position: 50% 50%;
  transition: left 0s 0.75s;
}

[id^="slide"]:checked + .slide {
  left: 0;
  z-index: 100;
  transition: left 0.65s ease-out;
}

.slide img {
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  left: 0px;
  top: -84.664px;
  z-index: -1;
  max-width: none;
}
</style>
