<template>
  <div class="profile">
    <h1>Profile</h1>
    <header><PersonIcon class="icon"/></header>
    <form class="form">
      <div>
        <label for="user-email">Your email address</label>
        <input type="email" class="form-control" placeholder="Enter your email address to start" v-model="user">
      </div>
      <div>
        <label for="user-contact">Your contact</label>
        <input type="email" class="form-control" placeholder="Email of your contact" v-model="contact">
      </div>
      <div>
        <label for="user-passcode">Passcode</label>
        <input type="password" class="form-control passcode" placeholder="Enter 4 digit pass code" v-model="passcode">
      </div>
    </form>
    <button class="btn btn-large" :disabled="!user" @click="onSave">Save</button>
  
  </div>
</template>

<script>
import PersonIcon from '@/icons/PersonIcon.vue'

export default {
  name: "profile",
  components: {
    PersonIcon
  },
  methods: {
    onSave() {
      this.$store.commit('SET_PIN', this.passcode)
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
    },
    contact: {
      get () {
        return this.$store.state.contact
      },
      set (value) {
        this.$store.commit('SET_CONTACT', value)
      }
    },
    passcode: {
      get () {
        return this.$store.state.pin
      },
      set (value) {
        this.$store.commit('SET_PIN', value)
      }
    }
  }
}

</script>

<style scoped>
.icon {
  max-height: 96px;
  max-width: 96px;
  fill: #555;
  border: 3px solid #999;
  border-radius: 50%;
  padding: 1rem;
}
.passcode {
  text-align: center;
}
</style>
