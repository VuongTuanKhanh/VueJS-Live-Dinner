<template>
  <div>
    <img :src="image" alt="" />
  </div>
</template>

<script>
import image from "@/assets/images/contact-bar.jpg";
export default {
  data() {
    return {
      image
    };
  }
};
</script>

<style scoped>
img {
    width: 100%;
}
</style>
