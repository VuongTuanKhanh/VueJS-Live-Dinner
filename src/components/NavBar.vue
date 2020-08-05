<template>
  <header class="top-navbar">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container">
        <!-- Logo -->
        <router-link :to="{ name: 'Home' }" class="navbar-brand"
          ><img :src="require('@/assets/images/logo.png')" alt=""
        /></router-link>

        <div class="collapse navbar-collapse" id="navbars-rs-food">
          <ul class="navbar-nav ml-auto">
            <li
              v-for="tab in tabs"
              :key="tab"
              class="nav-item"
              @click="current_Tab = tab"
              :class="{ active: current_Tab == tab }"
            >
              <router-link :to="{ name: tab }" class="nav-link">{{
                tab
              }}</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "NavBar",
  props: {
    tabs: {
      type: Array,
      default() {
        return ["Home", "Menu", "About", "Gallery", "Contact"];
      }
    }
  },
  data() {
    return {
      current_Tab: this.tabs[0]
    };
  }
};
</script>

<style>
.top-navbar {
  position: relative;
}
.top-navbar .navbar {
  padding: 15px 0px;
  position: fixed;
  width: 100%;
  border-radius: 0px 0px 100px 100px;
  transition: height 0.3s ease-out, background 0.3s ease-out,
    box-shadow 0.3s ease-out;
  transform: translate3d(0, 0, 0);
  box-shadow: 0 8px 6px -6px rgba(0, 0, 0, 0.4);
  background: #f8f9fa !important;
}

.navbar > .container {
  display: -ms-flexbox;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  margin-left: 105px;
  margin-right: 105px;
  z-index: 100;
}

.navbar-light .navbar-brand {
  color: rgba(0, 0, 0, 0.9);
  z-index: 100;
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
  font-family: "Rubik", sans-serif;
  font-weight: 500;
  padding: 10px 20px;
  border-radius: 4px;
  text-transform: uppercase;
  text-decoration: none;
  z-index: 100;
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
