<template>
  <div>
    <div id="content">
      <Slider />
      <Form
        @AddNewMessage="receiveMessage"
        :title="title"
        :btn_text="btn_text"
      />
      <div>
        <ul v-for="(message, index) in messages" :key="index">
          <li>
            <b>Name:</b> {{ message.name }}
            <br />
            <b>Email:</b> {{ message.email }}
            <br />
            <b>Message:</b> {{ message.message }}
          </li>
        </ul>
      </div>
      <ContactBar />
      <Footer />
    </div>
    <router-view />
  </div>
</template>

<script>
import Slider from "@/components/Slider.vue";
import ContactBar from "@/components/ContactBar.vue";
import Footer from "@/components/Footer.vue";
import Form from "@/components/Form.vue";
export default {
  name: "Menu",
  components: {
    Slider,
    ContactBar,
    Footer,
    Form
  },
  data() {
    return {
      title: "Contact",
      btn_text: "Send Message",
      messages: []
    };
  },
  methods: {
    receiveMessage(message) {
      this.messages.push(message);
      console.log(this.messages[0]);
    }
  }
};
</script>

<style scoped>
.contact-box {
  padding: 70px 0px;
}
</style>
