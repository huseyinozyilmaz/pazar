<template>
  <div class="home">
    <Welcome />
    <p>
      <input type="text" class="form-control" placeholder="Enter your email address to start" v-model="user">
    </p>
    <button class="btn btn-large" :disabled="!user" @click="onStartClick">Start</button>
  </div>
</template>

<script>
import Welcome from "@/components/Welcome.vue";

export default {
  name: "home",
  components: {
    Welcome
  },
  methods: {
    onStartClick() {
      if(this.user) {
        this.$router.push({ name:'passcode'})
      }
    }
  },
  computed: {
    user: {
      get () {
        return this.$store.state.user
      },
      set (value) {
        this.$store.commit('SET_USER', value)
      }
    }
  }
};
</script>
