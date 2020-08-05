<template>
  <div class="menu-box">
    <div class="special-menu-container">
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
        <div class="col-9">
          <!-- All -->
          <div class="tab-content" v-show="selectedTab == 'All'">
            <div
              class="tab-pane fade show active"
              id="v-pills-home"
              role="tabpanel"
              aria-labelledby="v-pills-home-tab"
            >
              <div
                class="row"
                v-for="category in categories"
                :key="category.name"
              >
                <div
                  class="col-lg-4 col-md-6 special-grid drinks"
                  v-for="dish in category.dishes"
                  :key="dish.name"
                  @mouseover="isHovering = dish.name"
                  @mouseleave="isHovering = ''"
                >
                  <div class="gallery-single fix">
                    <img :src="dish.image" class="img-fluid" alt="Image" />
                    <div
                      :class="
                        isHovering == dish.name ? 'why-text-1' : 'why-text'
                      "
                    >
                      <h4>{{ dish.name }}</h4>
                      <p>{{ dish.description }}</p>
                      <h5>{{ dish.price }}</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- The Rest -->
          <div
            class="tab-content"
            v-for="category in categories"
            :key="category.name"
            v-show="selectedTab == category.name"
          >
            <div
              class="tab-pane fade show active"
              id="v-pills-home"
              role="tabpanel"
              aria-labelledby="v-pills-home-tab"
            >
              <div class="row">
                <div
                  class="col-lg-4 col-md-6 special-grid drinks"
                  v-for="dish in category.dishes"
                  :key="dish.name"
                  @mouseover="isHovering = dish.name"
                  @mouseleave="isHovering = ''"
                >
                  <div class="gallery-single fix">
                    <img :src="dish.image" class="img-fluid" alt="Image" />
                    <div
                      :class="
                        isHovering == dish.name ? 'why-text-1' : 'why-text'
                      "
                    >
                      <h4>{{ dish.name }}</h4>
                      <p>{{ dish.description }}</p>
                      <h5>{{ dish.price }}</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import image1 from "@/assets/images/img-01.jpg";
import image2 from "@/assets/images/img-02.jpg";
import image3 from "@/assets/images/img-03.jpg";
import image4 from "@/assets/images/img-04.jpg";
import image5 from "@/assets/images/img-05.jpg";
import image6 from "@/assets/images/img-06.jpg";
import image7 from "@/assets/images/img-07.jpg";
import image8 from "@/assets/images/img-08.jpg";
import image9 from "@/assets/images/img-09.jpg";

export default {
  name: "SpecialMenu",
  data() {
    return {
      selectedTab: "All",
      isHovering: "",
      categories: [
        {
          name: "Drinks",
          dishes: [
            {
              image: image1,
              name: "Special Drink 1",
              description: "Sed id magna vitae eros sagittis euismod.",
              price: "$10.79"
            },
            {
              image: image2,
              name: "Special Drink 2",
              description: "Sed id magna vitae eros sagittis euismod.",
              price: "$10.79"
            },
            {
              image: image3,
              name: "Special Drink 3",
              description: "Sed id magna vitae eros sagittis euismod.",
              price: "$10.79"
            }
          ]
        },
        {
          name: "Lunch",
          dishes: [
            {
              image: image4,
              name: "Special Lunch 1",
              description: "Sed id magna vitae eros sagittis euismod.",
              price: "$10.79"
            },
            {
              image: image5,
              name: "Special Lunch 2",
              description: "Sed id magna vitae eros sagittis euismod.",
              price: "$10.79"
            },
            {
              image: image6,
              name: "Special Lunch 3",
              description: "Sed id magna vitae eros sagittis euismod.",
              price: "$10.79"
            }
          ]
        },
        {
          name: "Dinner",
          dishes: [
            {
              image: image7,
              name: "Special Dinner 1",
              description: "Sed id magna vitae eros sagittis euismod.",
              price: "$10.79"
            },
            {
              image: image8,
              name: "Special Dinner 2",
              description: "Sed id magna vitae eros sagittis euismod.",
              price: "$10.79"
            },
            {
              image: image9,
              name: "Special Dinner 3",
              description: "Sed id magna vitae eros sagittis euismod.",
              price: "$10.79"
            }
          ]
        }
      ],
      links: [
        {
          id: "All",

          ariaControl: "v-pills-home",
          title: "All"
        },
        {
          id: "Drinks",

          ariaControl: "v-pills-profile",
          title: "Drinks"
        },
        {
          id: "Lunch",

          ariaControl: "v-pills-messages",
          title: "Lunch"
        },
        {
          id: "Dinner",

          ariaControl: "v-pills-settings",
          title: "Dinner"
        }
      ]
    };
  }
};
</script>

<style scoped>
.why-text-1 h4 {
  color: #ffffff;
  font-size: 16px;
  font-weight: 700;
  font-family: "Rubik", sans-serif;
}
.why-text-1 p {
  color: #ffffff;
  font-size: 13px;
  border-bottom: 1px dashed #010101;
  margin: 0px;
  padding-bottom: 15px;
  margin-top: 0px;
  margin-bottom: 15px;
}
.why-text-1 h5 {
  font-size: 18px;
  font-weight: 600;
  color: #ffffff;
}
.why-text-1 {
  position: absolute;
  left: 0;
  bottom: 0%;
  right: 0;
  height: 100%;
  background: rgba(207, 166, 113, 0.9);
  padding: 12px 12px;
  transition: all 0.3s ease;
}

.why-text {
  position: absolute;
  left: 0;
  bottom: -115%;
  right: 0;
  height: 100%;
  background: rgba(207, 166, 113, 0.9);
  padding: 12px 12px;
  transition: all 0.3s ease;
}

.row {
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: 10px;
}
.img-fluid {
  max-width: 100%;
  height: auto;
}

.col-md-6 {
  position: relative;
  min-height: 1px;
  padding-right: 15px;
  padding-left: 15px;
  max-width: 27%;
}

.gallery-single {
  position: relative;
  overflow: hidden;
  box-shadow: 0 0 10px #ccc;
  margin-bottom: 30px;
}

.col-9 {
  flex: 0 0 75%;
  max-width: 75%;
}

.special-menu-container {
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: 130px;
  margin-left: 130px;
}

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
  max-width: 18%;
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
