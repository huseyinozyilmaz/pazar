<template>
  <div id="app">
    <section class="pages">
      <router-view/>
    </section>
    <AppFooter v-if="!isHome"/>
  </div>
</template>

<script>
import AppFooter from "@/components/AppFooter.vue"
export default {
  components: {
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
