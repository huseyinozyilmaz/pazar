<template>
  <div class="profile">
    <h1>Profile</h1>
    <header>
      <PersonIcon class="icon-large" />
    </header>
    <form class="form">
      <h2 class="section-header">Your details</h2>
      <div>
        <label for="user-name">Your name</label>
        <input
          type="text"
          class="form-control"
          placeholder="Enter your name"
          v-model="profile.name"
        />
      </div>
      <div>
        <label for="user-email">Your email address</label>
        <input
          type="email"
          class="form-control"
          placeholder="Enter your email address to start"
          v-model="profile.email"
        />
      </div>
      <div>
        <label for="user-passcode">Passcode</label>
        <input
          type="password"
          class="form-control passcode"
          placeholder="Enter a pass code"
          v-model="profile.pin"
        />
      </div>
      <section class="contact">
        <h2 class="section-header">Contact details</h2>
        <p class="subtitle">Add details of the person you share your shopping lists</p>
        <div>
          <label for="user-contact-name">Contact name</label>
          <input
            type="text"
            class="form-control"
            placeholder="Name of your contact"
            v-model="profile.contact.name"
          />
        </div>
        <div>
          <label for="user-contact-email">Contact email</label>
          <input
            type="email"
            class="form-control"
            placeholder="Email of your contact"
            v-model="profile.contact.email"
          />
        </div>
      </section>
    </form>
    <button class="btn btn-large" :disabled="invalid()" @click="onSave">Save</button>
  </div>
</template>

<script>
import PersonIcon from "@/icons/PersonIcon.vue";

export default {
  name: "profile",
  components: {
    PersonIcon
  },
  methods: {
    onSave() {
      this.$store.commit("SET_PROFILE", this.$store.state.profile);
      this.$router.push({ name: "shopping-lists" });
    },
    invalid() {
      return !(
        this.$store.state.profile.name &&
        this.$store.state.profile.email &&
        this.$store.state.profile.pin &&
        this.$store.state.profile.contact.name &&
        this.$store.state.profile.contact.email
      );
    }
  },
  computed: {
    profile: {
      get() {
        return this.$store.state.profile;
      },
      set(value) {
        this.$store.commit("SET_PROFILE", value);
      }
    }
  }
};
</script>

<style scoped>
.section-header {
  font-size: 0.8rem;
  font-weight: 600;
  text-transform: uppercase;
  text-align: left;
  color:tomato;
  padding-bottom: 3px;
  letter-spacing: 1px;
  border-bottom: 1px solid rgba(255, 99, 71, 0.2);
  margin-bottom: 20px 0;
}
.passcode {
  text-align: center;
}
.contact {
  margin-top: 50px;
}
.contact .title {
  margin-bottom: 0;
  padding-bottom: 0;
}
.contact .subtitle {
  margin-top: 0;
  font-size: small;
  text-align: left;
  opacity: 0.5;
}
</style>
