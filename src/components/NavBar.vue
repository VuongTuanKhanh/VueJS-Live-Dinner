<template>
  <div>
    <header class="top-navbar">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container">
          <!-- Logo -->
          <router-link :to="{ name: 'Home' }" class="navbar-brand"
            ><img :src="require('@/assets/images/logo.png')" alt=""
          /></router-link>

          <div class="collapse navbar-collapse" id="navbars-rs-food">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item active">
                <router-link :to="{ name: 'Home' }" class="nav-link"
                  >Home</router-link
                >
              </li>
              <li class="nav-item">
                <router-link :to="{ name: 'Menu' }" class="nav-link"
                  >Menu</router-link
                >
              </li>
              <li class="nav-item">
                <router-link :to="{ name: 'About' }" class="nav-link"
                  >About</router-link
                >
              </li>
              <li class="nav-item">
                <router-link :to="{ name: 'Reservation' }" class="nav-link"
                  >Reservation</router-link
                >
              </li>
              <li class="nav-item">
                <router-link :to="{ name: 'Stuff' }" class="nav-link"
                  >Stuff</router-link
                >
              </li>
              <li class="nav-item">
                <router-link :to="{ name: 'Gallery' }" class="nav-link"
                  >Gallery</router-link
                >
              </li>
              <li class="nav-item">
                <router-link :to="{ name: 'Blog' }" class="nav-link"
                  >Blog</router-link
                >
              </li>
              <li class="nav-item">
                <router-link :to="{ name: 'Detail' }" class="nav-link"
                  >Detail</router-link
                >
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
.top-navbar {
  position: relative;
  z-index: 10;
}
.top-navbar .navbar {
  padding: 15px 0px;
  position: fixed;
  width: 100%;
  border-radius: 0px 0px 100px 100px;
  transition: height 0.3s ease-out, background 0.3s ease-out,
    box-shadow 0.3s ease-out;
  -webkit-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
  -webkit-box-shadow: 0 8px 6px -6px rgba(0, 0, 0, 0.4);
  box-shadow: 0 8px 6px -6px rgba(0, 0, 0, 0.4);
  z-index: 100;
}

.navbar > .container {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -ms-flex-align: center;
  align-items: center;
  -ms-flex-pack: justify;
  justify-content: space-between;
  margin-left: 105px;
  margin-right: 105px;
}

.navbar-light .navbar-brand {
  color: rgba(0, 0, 0, 0.9);
}
.navbar-brand {
  display: inline-block;
  padding-top: 0.3125rem;
  padding-bottom: 0.3125rem;
  margin-right: 1rem;
  font-size: 1.25rem;
  line-height: inherit;
  white-space: nowrap;
}

.ml-auto {
  display: flex;
}

li {
  list-style: none;
}

.top-navbar .navbar-light .navbar-nav .nav-link {
  color: #010101;
  font-size: 16px;
  font-weight: bold;
  padding: 10px 20px;
  border-radius: 4px;
  text-transform: uppercase;
  text-decoration: none;
}

.top-navbar .navbar-light .navbar-nav .nav-item .nav-link:hover {
  background: #d65106;
  color: #ffffff;
}
.top-navbar .navbar-light .navbar-nav .nav-item.active .nav-link {
  background: #d65106;
  color: #ffffff;
  border-radius: 4px;
  font-family: "Rubik", sans-serif;
}

.navbar-expand-lg .navbar-nav .dropdown-menu {
  border: none;
  border-radius: 0px;
  padding: 10px;
  box-shadow: 2px 5px 6px rgba(0, 0, 0, 0.5);
}
.navbar-expand-lg .navbar-nav .dropdown-menu a {
  padding: 10px 10px;
  text-transform: uppercase;
}

.navbar-expand-lg .navbar-nav .dropdown-menu a.dropdown-item:hover {
  background: #d65106;
  color: #ffffff;
}
.navbar-light .navbar-toggler:hover {
  background: #d65106;
}

img {
  vertical-align: middle;
  border-style: none;
}
</style>
