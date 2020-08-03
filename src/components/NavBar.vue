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
                  <router-link
                    :to="{ name: 'Reservation' }"
                    class="dropdown-item"
                    >Reservation</router-link
                  >
                  <router-link :to="{ name: 'Stuff' }" class="dropdown-item"
                    >Stuff</router-link
                  >
                  <router-link :to="{ name: 'Gallery' }" class="dropdown-item"
                    >Gallery</router-link
                  >
                </div>
              </li>
              <li class="nav-item dropdown">
                <router-link
                  to="#"
                  class="nav-link dropdown-toggle"
                  id="dropdown-a"
                  data-toggle="dropdown"
                  >Blog</router-link
                >
                <div class="dropdown-menu" aria-labelledby="dropdown-a">
                  <router-link :to="{ name: 'Blog' }" class="dropdown-item"
                    >Blog</router-link
                  >
                  <router-link :to="{ name: 'Detail' }" class="dropdown-item"
                    >blog Single</router-link
                  >
                </div>
              </li>
              <li class="nav-item">
                <router-link :to="{ name: 'Contact' }" class="nav-link"
                  >Contact</router-link
                >
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

<style>
</style>
