<template>
  <div class="passcode">
    <Welcome />
    <form autocomplete="off">
      <input type="password" class="passcode-digit" @keypress="isNumber($event)" @keyup.delete="onDelete($event)" @keyup.esc="reset" v-model="d1" autofocus ref="d" />
      <input type="password" class="passcode-digit" @keypress="isNumber($event)" @keyup.delete="onDelete($event)" @keyup.esc="reset" v-model="d2"/>
      <input type="password" class="passcode-digit" @keypress="isNumber($event)" @keyup.delete="onDelete($event)" @keyup.esc="reset" v-model="d3"/>
      <input type="password" class="passcode-digit" @keypress="isNumber($event)" @keyup.delete="onDelete($event)" @keyup.esc="reset" v-model="d4"/>
    </form>
    <button class="btn btn-large" @click="onGoClicked" ref="go">Go</button>
  </div>
</template>

<script>
import Welcome from "@/components/Welcome.vue";

export default {
  name: "passcode",
  data() {
    return {
      d1: '',
      d2: '',
      d3: '',
      d4: ''
    }
  },
  components: {
    Welcome
  },
  methods: {
    onGoClicked() {
      if (this.d1 && this.d2 && this.d3 && this.d4) {
        this.$store.commit('SET_PIN', this.d1 + this.d2 + this.d3 + this.d4)
        this.$router.push({ name:'shopping-lists'})
      }
    },
    isNumber: function(evt) {
      evt = (evt) ? evt : window.event;
      var charCode = (evt.which) ? evt.which : evt.keyCode;
      if (evt.target.value || evt.target.value.length > 0) {
        evt.preventDefault();
      }
      else if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        evt.preventDefault();
      } else {
        if(evt.target.nextElementSibling) {
          evt.target.nextElementSibling.focus()
        }
        return true;
      }
    },
    onDelete(evt) {
      if (evt.target.previousElementSibling) {
        evt.target.previousElementSibling.focus()
      }
    },
    reset() {
      this.d1 = ''
      this.d2 = ''
      this.d3 = ''
      this.d4 = ''
      this.$refs.d.focus();
    }
  },
  mounted() {
    this.$refs.d.focus();
  }
};
</script>
<style scoped>
form {
  margin-bottom: 25px;
}
.passcode-digit {
  width: 50px;
  margin-right: 10px;
  font-size: 2rem;
  padding: 5px 0;
  text-align: center
}
</style>