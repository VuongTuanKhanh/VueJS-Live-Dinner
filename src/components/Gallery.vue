<template>
  <div class="gallery-box">
    <div class="gallery-container">
      <div class="row">
        <div class="col-lg-12">
          <div class="heading-title text-center">
            <h2>Gallery</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
            </p>
          </div>
        </div>
      </div>
      <div class="tz-gallery">
        <div class="row">
          <div
            class="col-sm-12 col-md-4 col-lg-4"
            v-for="(image, index) in images"
            :key="index"
          >
            <a class="lightbox" href="#">
              <img class="img-fluid" :src="image" alt="Gallery Images" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import image1 from "@/assets/images/gallery-img-01.jpg";
import image2 from "@/assets/images/gallery-img-02.jpg";
import image3 from "@/assets/images/gallery-img-03.jpg";
import image4 from "@/assets/images/gallery-img-04.jpg";
import image5 from "@/assets/images/gallery-img-05.jpg";
import image6 from "@/assets/images/gallery-img-06.jpg";
export default {
  name: "Gallery",
  data() {
    return {
      images: [image1, image2, image3, image4, image5, image6]
    };
  }
};
</script>

<style scoped>
p {
  font-size: 18px;
  font-weight: 200;
  margin: 0px;
}
h2 {
  text-align: center !important;
  color: #666666;
  font-size: 30px;
  font-family: "Rubik", sans-serif;
  line-height: 1.80857;
}

.col-lg-12 {
  position: relative;
  width: 100%;
  min-height: 1px;
  padding-right: 15px;
  padding-left: 15px;
}
.text-center {
  text-align: center !important;
}
.heading-title {
  margin-bottom: 50px;
}
.col-md-4,
.col-lg-4 {
  position: relative;
  width: 100%;
  min-height: 1px;
  padding-right: 15px;
  padding-left: 15px;
  max-width: 28%;
}
.img-fluid {
  max-width: 100%;
  height: auto;
}

.gallery-container {
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin: auto;
}
.row {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin: auto;
}
.gallery-box {
  padding: 70px 0px;
}
.tz-gallery {
  margin-top: 30px;
  width: 90%;
  margin: auto;
  padding-left: 100px;
}
.tz-gallery .lightbox img {
  width: 100%;
  transition: 0.2s ease-in-out;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.2);
  margin: auto;
}
.tz-gallery .lightbox img:hover {
  transform: scale(1.05);
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.3);
}
.tz-gallery .lightbox {
  border: 3px solid #d65106;
  display: inline-block;
  margin-bottom: 30px;
}
</style>
