<template>
  <div class="confirmation">
    <h1>Confirmation</h1>
    <header>
      <CheckmarkIcon v-if="success" class="icon-large success"/>
      <CloseIcon v-else class="icon-large failure" />
    </header>
    <section>
      <p>{{message}}</p>
    </section>
    <button class="btn btn-large" @click="onNext">Ok</button>
  </div>
</template>

<script>
import CloseIcon from "@/icons/CloseIcon.vue";
import CheckmarkIcon from "@/icons/CheckmarkIcon.vue";
export default {
  name: "Confirmation",
  data() {
    return {
      success: JSON.parse(this.$route.query.success),
      message: this.$route.query.message,
      next: this.$route.query.next
    }
  },
  components: {
    CloseIcon,
    CheckmarkIcon
  },
  methods: {
    onNext() {
      this.$router.push({ name: this.next })
    }
  }
}
</script>

<style scoped>
section {
  margin: 6% 2%;
}
.success {
  fill: #3D9970;
  border-color: #3D9970; 
}
.failure {
  fill: #FF4136;
  border-color: #FF4136; 
}
</style>