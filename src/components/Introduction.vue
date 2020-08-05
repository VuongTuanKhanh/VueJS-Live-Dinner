<template>
  <div
    class="about-section-box"
    :style="{
      backgroundImage: 'url(' + require('@/assets/images/about-bg.jpg') + ')'
    }"
  >
    <div class="about-container">
      <div class="about-row">
        <div class="col-lg-6 col-md-6 col-sm-12 text-center">
          <div class="inner-column">
            <h1>
              {{ welcome_text }} <span>{{ restaurant_name }}</span>
            </h1>
            <h4>{{ title }}</h4>
            <p>
              {{ text_1 }}
            </p>
            <p>
              {{ text_2 }}
            </p>
            <a class="btn btn-lg btn-circle btn-outline-new-white" href="#">{{
              btn_Text
            }}</a>
          </div>
        </div>
        <div class="col-lg-6 col-md-6 col-sm-12">
          <img :src="image" alt="" class="img-fluid" />
        </div>
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
import image from "@/assets/images/about-img.jpg";

export default {
  name: "Introduction",
  props: {
    welcome_text: {
      type: String,
      default: "Welcome To"
    },
    restaurant_name: {
      type: String,
      default: "Live Dinner Restaurant"
    },
    title: {
      type: String,
      default: "Little Story"
    },
    text_1: {
      type: String,
      default:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque auctor suscipit feugiat. Ut at pellentesque ante, sed convallis arcu. Nullam facilisis, eros in eleifend luctus, odio ante sodales augue, eget lacinia lectus erat et sem."
    },
    text_2: {
      type: String,
      default:
        "Sed semper orci sit amet porta placerat. Etiam quis finibus eros. Sed aliquam metus lorem, a pellentesque tellus pretium a. Nulla placerat elit in justo vestibulum, et maximus sem pulvinar."
    },
    btn_Text: {
      type: String,
      default: "Reservation"
    }
  },
  data() {
    return {
      image
    };
  }
};
</script>

<style scoped>
.about-section-box {
  padding: 70px 0px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: bottom center;
}
.about-section-box .img-fluid {
  box-shadow: 20px 20px 0px #d65106;
}
.inner-column {
  text-align: left;
}
.inner-column h1 {
  font-family: "Rubik", sans-serif;
  font-size: 30px;
  color: #010101;
  font-weight: 500;
}
.inner-column h1 span {
  color: #d65106;
}
.inner-column h4 {
  font-size: 16px;
  font-weight: 1000;
}
.inner-column p {
  font-size: 18px;
  color: #222222;
  font-weight: 400;
}
.inner-column .btn-outline-new-white {
  color: #fff;
}
.inner-column .btn-outline-new-white:hover {
  color: #ffffff;
}
.about-container {
  right: 0;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: 105px;
  margin-left: 105px;
}
.about-row {
  display: flex;
  flex-wrap: wrap;
  margin-right: 15px;
  margin-left: 15px;
}
.text-center {
  text-align: center !important;
}
.col-lg-6,
.col-md-6,
.col-sm-12 {
  position: relative;
  width: 45%;
  min-height: 1px;
  padding-right: 15px;
  padding-left: 15px;
}
.img-fluid {
  max-width: 100%;
}
</style>
