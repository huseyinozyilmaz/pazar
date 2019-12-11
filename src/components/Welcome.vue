<template>
  <div class="welcome">
    <p><img src="@/assets/img/logo.svg" class="app-icon" alt="Pazar Icon" /></p>
    <p><img src="@/assets/img/pazar.png" alt="Pazar Logo" /></p>
    <h4>{{msg}}</h4>
    <button class="btn btn-large" @click="onGetStarted">Get Started</button>
  </div>
</template>

<script>
export default {
  name: "welcome",
  data() {
    return {
      msg: "Create and share your groceries shopping lists"
    }
  },
  methods: {
    onGetStarted() {
      this.$router.push({ name: 'shopping-lists'})
    }
  }
};
</script>

<style scoped>
.welcome {
  margin-top: 5rem;
}
.welcome button {
  margin-top: 25px;
}
.app-icon {
  width: 25%;
}
</style>