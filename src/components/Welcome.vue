<template>
  <div class="welcome">
    <p><img src="@/assets/img/logo.svg" class="app-icon" alt="Pazar Icon" /></p>
    <p><img src="@/assets/img/pazar.png" alt="Pazar Logo" /></p>
    <h4>{{msg}}</h4>
  </div>
</template>

<script>
export default {
  name: "welcome",
  data() {
    return {
      msg: "Create and share your groceries shopping lists"
    };
  }
};
</script>

<style scoped>
.welcome {
  margin-bottom: 4rem;
}
.app-icon {
  width: 25%;
}
</style>