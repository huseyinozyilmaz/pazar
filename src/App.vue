<template>
  <div id="app">
    <div id="nav">
      <button v-if="!isHome" class="btn" @click="onBackClicked"><ArrowBackIcon/></button>
      <!-- <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> -->

    </div>
    <router-view/>
  </div>
</template>

<script>
import ArrowBackIcon from "@/icons/ArrowBackIcon.vue"

export default {
  components: {
    ArrowBackIcon
  },
  methods: {
    onBackClicked() {
      this.$router.go(-1)
    }
  },
  computed: {
    isHome() {
      return this.$route.name === 'home'
    }
  }
};
</script>

<style>


#nav {
  padding: 10px;
  text-align: left
}
#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
