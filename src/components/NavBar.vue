<template>
  <div>
    <header class="top-navbar">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container">
          <!-- Logo -->
          <router-link :to="{ name: 'Home' }" class="navbar-brand"
            ><img :src="require('@/assets/images/logo.png')" alt=""
          /></router-link>

          <!-- Responsive NavBar-->
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbars-rs-food"
            aria-controls="navbars-rs-food"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbars-rs-food">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item active">
                <router-link :to="{ name: 'Home' }">Home</router-link>
              </li>
              <li class="nav-item">
                <router-link :to="{ name: 'Menu' }">Menu</router-link>
              </li>
              <li class="nav-item">
                <router-link :to="{ name: 'About' }">About</router-link>
              </li>
              <li class="nav-item dropdown">
                <router-link
                  class="nav-link dropdown-toggle"
                  to="#"
                  id="dropdown-a"
                  data-toggle="dropdown"
                  >Pages</router-link
                >
                <div class="dropdown-menu" aria-labelledby="dropdown-a">
                  <a class="dropdown-item" href="reservation.html"
                    >Reservation</a
                  >
                  <a class="dropdown-item" href="stuff.html">Stuff</a>
                  <a class="dropdown-item" href="gallery.html">Gallery</a>
                </div>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="dropdown-a"
                  data-toggle="dropdown"
                  >Blog</a
                >
                <div class="dropdown-menu" aria-labelledby="dropdown-a">
                  <a class="dropdown-item" href="blog.html">blog</a>
                  <a class="dropdown-item" href="blog-details.html"
                    >blog Single</a
                  >
                </div>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="contact.html">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped></style>
