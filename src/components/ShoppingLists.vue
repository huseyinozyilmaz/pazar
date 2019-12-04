<template>
  <div class="shopping-lists">
    <h1>Shopping Lists</h1>
    <div v-if="items"></div>
    <div v-else>
      <img src="@/assets/img/shopping-chart.svg" alt="Shopping Cart" />
      <div>
        <h2>You don't have any list</h2>
        <p>Create a list and add items to your trolley for a better shopping experience</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ShoppingLists",
  props: {
    items: Array
  }
};
</script>

<style scoped>
</style>
