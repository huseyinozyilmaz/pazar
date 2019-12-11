<template>
  <div id="app">
    <!-- <div id="nav" v-if="!isSignedIn">
      <button class="btn" @click="onBackClicked"><ArrowBackIcon/></button>
    </div> -->
    <section class="pages">
      <router-view/>
    </section>
    <AppFooter v-if="!isHome"/>
  </div>
</template>

<script>
// import ArrowBackIcon from "@/icons/ArrowBackIcon.vue"
import AppFooter from "@/components/AppFooter.vue"

export default {
  components: {
    // ArrowBackIcon,
    AppFooter
  },
  methods: {
    onBackClicked() {
      this.$router.go(-1)
    }
  },
  computed: {
    isHome() {
      return this.$route.name === 'home'
    },
    isSignedIn() {
      return this.$route.name !== 'home' && this.$route.name !== 'passcode'
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
.pages {
  padding-bottom: 90px;
}
</style>
