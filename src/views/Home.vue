<template>
  <div class="home">
    <p>
      <img src="@/assets/img/logo.svg" alt="Pazar Logo" style="width:50%;">
    </p>
    
    <img src="@/assets/img/pazar.png" alt="Pazar Logo" >

    <h4>Create and share your groceries shopping lists</h4>
    <p>
      <input type="text" placeholder="Enter your email address to start" v-model="email">
    </p>
    
    <button class="btn btn-large" @click="onAddList">Start</button>
    <ShoppingLists />
    <button @click="onAddList">Add List</button>
  </div>
</template>

<script>
// @ is an alias to /src
import ShoppingLists from "@/components/ShoppingLists.vue";

export default {
  name: "home",
  components: {
    ShoppingLists
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
