<template>
  <div class="menu-box">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="heading-title text-center">
            <h2>Special Menu</h2>
            <p>
              Enjoy your Day with our Special Menu
            </p>
          </div>
        </div>
      </div>
      <div class="row inner-menu-box">
        <div class="col-3">
          <div
            class="nav flex-column nav-pills"
            id="v-pills-tab"
            role="tablist"
            aria-orientation="vertical"
          >
            <div
              v-for="link in links"
              :key="link.id"
              role="tab"
              class="nav-link"
              :aria-controls="link.ariaControl"
              :aria-selected="link.ariaSelected"
              @mouseover="link.isHovering = true"
              @mouseout="link.isHovering = false"
              @click="selectedTab = link.id"
              :class="{
                hover: link.isHovering,
                active: selectedTab == link.id
              }"
            >
              {{ link.title }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SpecialMenu",
  data() {
    return {
      selectedTab: "All",
      links: [
        {
          id: "All",
          isHovering: false,
          ariaControl: "v-pills-home",
          title: "All"
        },
        {
          id: "Drinks",
          isHovering: false,
          ariaControl: "v-pills-profile",
          title: "Drinks"
        },
        {
          id: "Lunch",
          isHovering: false,
          ariaControl: "v-pills-messages",
          title: "Lunch"
        },
        {
          id: "Dinner",
          isHovering: false,
          ariaControl: "v-pills-settings",
          title: "Dinner"
        }
      ]
    };
  }
};
</script>

<style scoped>
.inner-menu-box .nav-pills .nav-link.hover {
  background: #d65106;
  color: white;
}

.inner-menu-box .nav-pills .nav-link.active {
  background: #d65106;
}
.inner-menu-box .nav-pills .nav-link {
  font-size: 18px;
}
.nav-pills .nav-link.active,
.nav-pills .show > .nav-link {
  color: #fff;
  background-color: #007bff;
}
.nav-pills .nav-link {
  border-radius: 0.25rem;
}
.nav-link {
  display: block;
  padding: 0.5rem 1rem;
}
.nav {
  display: flex;
  flex-wrap: wrap;
  padding-left: 0;
  margin-bottom: 0;
  list-style: none;
}
.flex-column {
  flex-direction: column !important;
}
.col-3 {
  flex: 0 0 25%;
  max-width: 25%;
}
.col-lg-12 {
  position: relative;
  width: 100%;
  min-height: 1px;
  padding-right: 15px;
  padding-left: 15px;
}
.heading-title {
  margin-bottom: 50px;
}
.heading-title h2 {
  color: #010101;
  font-size: 28px;
  font-family: "Rubik", sans-serif;
  font-weight: 600;
}
.heading-title p {
  font-size: 18px;
  font-weight: 200;
  margin: 0px;
}
</style>
