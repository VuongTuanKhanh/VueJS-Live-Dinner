<template>
  <div
    class="sub-header all-page-title page-breadcrumb"
    :style="{
      backgroundImage: 'url(' + require('@/assets/images/all-bg.jpg') + ')'
    }"
  >
    <div class="container text-center">
      <div class="row">
        <div class="col-lg-12">
          <h1>Special Menu</h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SubHeader"
};
</script>

<style scoped>
.sub-header {
  width: 100%;
  height: 100px;
  margin: auto;
}
.page-breadcrumb {
  padding: 250px 0 150px;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background-position: 0 0;
  position: absolute;
}
.container {
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
</style>
