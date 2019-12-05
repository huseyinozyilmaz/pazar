<template>
  <div class="shopping-lists">
    <div v-if="shoppingLists"></div>
    <div v-else>
      <img src="@/assets/img/shopping-chart.svg" alt="Shopping Cart" />
      <div>
        <h2>You don't have any list</h2>
        <p>Create a list and add items to your trolley for a better shopping experience</p>
        <button class="btn btn-large">Create List</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ShoppingListBacklog",
  props: {
    shoppingLists: Array
  }
};
</script>

<style scoped>
</style>
