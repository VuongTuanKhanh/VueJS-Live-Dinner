<template>
  <div
    class="qt-box qt-background"
    :style="{
      backgroundImage: 'url(' + require('@/assets/images/qt-bg.jpg') + ')'
    }"
  >
    <div class="quote-container">
      <div class="quote-row">
        <div class="col-md-8 ml-auto mr-auto text-center">
          <p class="lead">
            " If you're not the one cooking, stay out of the way and compliment
            the chef. "
          </p>
        </div>
        <div class="col-md-8 ml-auto mr-auto text-center">
          <p class="author">
            Micheal James
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.qt-background p.author {
  font-family: "Rubik", sans-serif;
  font-size: 28px;
  font-weight: 600;
}

.quote-container {
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}
.text-center {
  text-align: center !important;
}
.ml-auto {
  margin-left: auto !important;
}
.mr-auto {
  margin-right: auto !important;
}
.col-md-8 {
  position: relative;
  width: 100%;
  min-height: 1px;
  padding-right: 15px;
  padding-left: 15px;
}

.quote-row {
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
  color: #666666;
  font-size: 15px;
  font-family: "Rubik", sans-serif;
  line-height: 1.80857;
}

.qt-background {
  background-size: cover;
  background-repeat: no-repeat;
  padding: 100px 0;
  background-attachment: fixed;
  background-position: center center;
  width: 100%;
}
.qt-background p {
  font-size: 35px;
  font-weight: 300;
  line-height: 44px;
  color: #fff;
  font-family: "Rubik", sans-serif;
  margin-bottom: 20px;
  margin: auto;
  max-width: 730px;
}

.qt-background span {
  color: #fff;
  font-size: 28px;
  font-weight: 600;
}
</style>
