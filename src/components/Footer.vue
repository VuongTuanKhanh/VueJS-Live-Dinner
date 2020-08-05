<template>
  <footer
    class="footer-area"
    :style="{
      backgroundImage: 'url(' + require('@/assets/images/footer-bg.jpg') + ')'
    }"
  >
    <div class="container">
      <div class="row">
        <div class="col-lg-3 col-md-6">
          <h3>{{ title }}</h3>
          <p>
            {{ text }}
          </p>
        </div>
        <div class="col-lg-3 col-md-6">
          <h3>{{ btn_text }}</h3>
          <div class="subscribe_form">
            <form class="subscribe_form">
              <input
                name="EMAIL"
                id="subs-email"
                class="form_input"
                placeholder="Email Address..."
                type="email"
              />
              <button type="submit" class="submit">{{ btn_text }}</button>
              <div class="clearfix"></div>
            </form>
          </div>
        </div>
        <div class="col-lg-3 col-md-6">
          <h3>{{ contact_title }}</h3>
          <p class="lead">{{ address }}</p>
          <p class="lead">
            <a href="#">{{ phone }}</a>
          </p>
          <p>
            <a href="#">{{ gmail }}</a>
          </p>
        </div>
        <div class="col-lg-3 col-md-6">
          <h3>{{ hour_title }}</h3>
          <p><span class="text-color">Monday: </span>Closed</p>
          <p><span class="text-color">Tue-Wed :</span> 9:Am - 10PM</p>
          <p><span class="text-color">Thu-Fri :</span> 9:Am - 10PM</p>
          <p><span class="text-color">Sat-Sun :</span> 5:PM - 10PM</p>
        </div>
      </div>
    </div>

    <div class="copyright">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <p class="company-name">
              {{ right_title }}
              <a href="#">{{ restaurant_name }}</a>
              <br />
              Design By: <b>Archius Vương</b>
            </p>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  props: {
    title: {
      type: String,
      default: "About Us"
    },
    text: {
      type: String,
      default:
        "Integer cursus scelerisque ipsum id efficitur. Donec a dui fringilla, gravida lorem ac, semper magna. Aenean rhoncus ac lectus a interdum. Vivamus semper posuere dui."
    },
    btn_text: {
      type: String,
      default: "Subscribe"
    },
    contact_title: {
      type: String,
      default: "Contact information"
    },
    address: {
      type: String,
      default: "132 Suong Nguyet Anh, Chau Doc District"
    },
    phone: {
      type: String,
      default: "(+84) 587.601.494"
    },
    gmail: {
      type: String,
      default: "info@gmail.com"
    },
    hour_title: {
      type: String,
      default: "Opening hours"
    },
    right_title: {
      type: String,
      default: "All Rights Reserved. © 2020"
    },
    restaurant_name: {
      type: String,
      default: "Live Dinner Restaurant"
    }
  }
};
</script>

<style scoped>
.container {
  width: 80%;
  padding-right: 15px;
  padding-left: 15px;
  margin: auto;
}

.col-lg-12 {
  margin: auto;
  width: 100%;
}

.row {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin: auto;
}

.col-lg-3,
.col-md-6 {
  position: relative;
  max-width: 22.5%;
  width: 19.5%;
  min-height: 1px;
  padding-right: 15px;
  padding-left: 15px;
}

.footer-area {
  padding-top: 50px;
  padding-bottom: 0px;
}
.bg-f {
  background-attachment: scroll;
  background-clip: initial;
  background-color: rgba(0, 0, 0, 0);
  background-origin: initial;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
}
.bg-f::before {
  background: #010101;
  content: "";
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 1;
  opacity: 0.8;
}

.footer-area .container {
  position: relative;
  z-index: 1;
}
.footer-area h3 {
  color: #ffffff;
  text-transform: uppercase;
  font-size: 18px;
  font-weight: 500;
  border-bottom: 2px solid rgba(207, 166, 113, 0.5);
  margin-bottom: 10px;
}
.footer-area p {
  font-size: 15px;
  color: rgba(255, 255, 255, 0.8);
  margin: 0;
  padding-bottom: 10px;
}

.arrow-right {
  position: relative;
}
.arrow-right::before {
  content: "\f101";
  font-family: "FontAwesome";
  position: absolute;
  right: 0px;
  top: 0;
  color: #fff;
  font-size: 60px;
  line-height: 60px;
}

.footer-area p.lead {
  font-size: 19px;
  color: #ffffff;
  margin-bottom: 0px;
}
.footer-area p.lead a {
  color: #ffffff;
  margin-bottom: 15px;
}
.footer-area p.lead a:hover {
  color: #d65106;
}
.footer-area p a {
  font-size: 18px;
  color: #ffffff;
}
.footer-area p a:hover {
  color: #d65106;
}

.subscribe_form {
  display: block;
  text-align: center;
  padding: 5px 0;
}

.subscribe_form .form_input {
  display: block;
  background-color: rgba(0, 0, 0, 0.9);
  border: 1px solid #ffffff;
  color: #fff;
  font-size: 14px;
  line-height: 50px;
  padding: 0 10px;
  float: left;
  font-weight: 300;
  width: 92.7%;
  transition: all 0.5s ease-in-out;
}

.subscribe_form .submit {
  background-color: #d65106;
  color: #fff;
  font-size: 16px;
  font-weight: 500;
  line-height: 50px;
  display: inline-block;
  padding: 0 10px;
  width: 100%;
  border: none;
  cursor: pointer;
  transition: all 0.5s ease-in-out;
}
.subscribe_form .submit:hover {
  background: #010101;
}

.f-social {
  padding-bottom: 10px;
  margin: 0px;
  margin-top: 20px;
}
.f-social li a {
  font-size: 18px;
  color: rgba(214, 81, 6);
  width: 38px;
  height: 38px;
  display: block;
  text-align: center;
  line-height: 38px;
  background: #ffffff;
  border-radius: 4px;
}

.copyright {
  margin-top: 20px;
  position: relative;
  display: block;
  background-color: #010101;
  border-top: 1px solid rgba(207, 166, 113);
  padding: 30px 0;
  z-index: 1;
}

.copyright .company-name {
  font-size: 16px;
  text-align: center;
}
.copyright .company-name a {
  font-size: 16px;
}
</style>
