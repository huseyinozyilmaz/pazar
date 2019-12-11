<template>
  <div class="profile">
    <h1>Profile</h1>
    <p>
      <input type="text" class="form-control" placeholder="Enter your email address to start" v-model="user">
    </p>
    <button class="btn btn-large" :disabled="!user" @click="onStartClick">Start</button>
  
  </div>
</template>

<script>
export default {
  name: "profile",
  data() {
    return {
      
    }
  },
  methods: {
    onGetStarted() {
      this.$router.push({ name: 'shopping-lists'})
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
}

</script>