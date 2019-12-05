<template>
  <div class="home">
    <Welcome />
    <p>
      <input type="text" placeholder="Enter your email address to start" v-model="email">
    </p>
    
    <button class="btn btn-large" @click="onAddList">Start</button>
    <ShoppingLists />
    <button @click="onAddList">Add List</button>
  </div>
</template>

<script>
import ShoppingLists from "@/components/ShoppingLists.vue";
import Welcome from "@/components/Welcome.vue";

export default {
  name: "home",
  components: {
    ShoppingLists,
    Welcome
  },
  data() {
    return {
      email: 'email@huseyin.org'
    }
  },
  methods: {
    onAddList(){
      //this.$router.push({ name:'CreateList'})
      alert(btoa(this.email))
      atob(this.email)
    }
  }
};
</script>
