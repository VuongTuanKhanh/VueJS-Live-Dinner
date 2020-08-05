<template>
  <div class="slider-container">
    <div class="menu">
      <label for="slide-dot-1"></label>
      <label for="slide-dot-2"></label>
      <label for="slide-dot-3"></label>
    </div>

    <div v-for="(slide, index) in Slides" :key="slide.id">
      <input
        type="radio"
        name="slides"
        :checked="current_Slide == index"
        @click="current_Slide = index"
        :id="slide.id"
        class="slide_show"
      />
      <div class="slide">
        <img :src="slide.image" alt="" />
      </div>
      <div class="overlay-background"></div>
    </div>
    <div class="container" id="slide-content">
      <div class="row">
        <div class="col-md-12">
          <h1 class="m-b-20">
            <strong
              >{{ welcome_text }}<br />
              {{ restaurant_name }}</strong
            >
          </h1>
          <p class="m-b-40">
            {{ intro_text_1 }}
            <br />
            {{ intro_text_2 }}
          </p>
          <p>
            <router-link
              :to="{ name: 'Reservation' }"
              class="btn btn-lg btn-circle btn-outline-new-white"
              >{{ btn_text }}</router-link
            >
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import image1 from "@/assets/images/slider-01.jpg";
import image2 from "@/assets/images/slider-02.jpg";
import image3 from "@/assets/images/slider-03.jpg";

export default {
  props: {
    welcome_text: {
      type: String,
      default: "Welcome To"
    },
    restaurant_name: {
      type: String,
      default: "Yamifood Restaurant"
    },
    btn_text: {
      type: String,
      default: "Reservation"
    },
    intro_text_1: {
      type: String,
      default: "See how your users experience your website in realtime or view"
    },
    intro_text_2: {
      type: String,
      default: "trends to see any changes in performance over time."
    }
  },
  data() {
    return {
      current_Slide: 0,
      Slides: [
        {
          index: 0,
          id: "slide-dot-1",
          image: image1
        },
        {
          index: 1,
          id: "slide-dot-2",
          image: image2
        },
        {
          index: 2,
          id: "slide-dot-3",
          image: image3
        }
      ]
    };
  },
  mounted() {
    this.interval = setInterval(
      function() {
        let slides = document.getElementsByClassName("slide_show");
        this.current_Slide += 1;
        if (this.current_Slide > 2) {
          this.current_Slide = 0;
        }
        slides[this.current_Slide].click();
      }.bind(this),
      3000
    );
  }
};
</script>

<style>
#slide-content p {
  font-size: 25px;
  color: #fff;
}

#slide-content h1 strong {
  font-weight: bolder;
}

#slide-content h1 {
  font-family: "Rubik", sans-serif;
  font-weight: 500;
  font-size: 64px;
  color: #fff;
  line-height: 120% !important;
}

#slide-content .col-md-12 {
  position: relative;
  width: 100%;
  min-height: 1px;
  padding-right: 15px;
  padding-left: 15px;
  text-align: left !important;
}

#slide-content {
  height: 100%;
  position: absolute;
  z-index: 100;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: 150px;
  margin-top: 100px;
}

strong {
  font-weight: bolder;
  font-size: 64px;
}

#slide-content > .row {
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
}

.btn {
  text-transform: uppercase;
  padding: 19px 36px;
}
.btn {
  display: inline-block;
  font-weight: 600;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  border: 2px solid transparent;
  padding: 12px 30px;
  font-size: 16px;
  line-height: 1.5;
  border-radius: 0.1875rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
.btn-outline-new-white {
  color: #fff;
  background-color: #d65106;
  background-image: none;
  border-color: #d65106;
}
.btn-outline-new-white:hover {
  color: #ffffff;
  background-color: #333333;
  border-color: #333333;
}

.cover-slides h1 {
  font-family: "Rubik", sans-serif;
  font-weight: 500;
  font-size: 64px;
  color: #fff;
}
.cover-slides p {
  font-size: 18px;
  color: #fff;
}
.slides-pagination a {
  border: 2px solid #ffffff;
}
.slides-pagination a.current {
  background: #d65106;
  border: 2px solid #d65106;
}

.container h1 {
  color: white;
}

.overlay-background {
  background: #333;
  position: absolute;
  height: 100%;
  width: 100%;
  left: 0;
  top: 0;
  opacity: 0.25;
  z-index: 100;
}

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
  z-index: 1;
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
