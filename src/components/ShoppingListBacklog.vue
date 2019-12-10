<template>
  <div class="shopping-lists">
    <div v-if="shoppingLists"></div>
    <div v-else>
      <img src="@/assets/img/shopping-chart.svg" alt="Shopping Cart" />
      <div>
        <h2>You don't have any list</h2>
        <p class="msg">Create a list and add items to your trolley for a better shopping experience</p>
        <button class="btn btn-large" @click="onCreateList">Create List</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ShoppingListBacklog",
  props: {
    shoppingLists: Array
  },
  methods: {
    onCreateList() {
      this.$router.push({ name: "new-shopping-list" });
    }
  }
};
</script>

<style scoped>
.msg {
  padding: 6px;
}
</style>
