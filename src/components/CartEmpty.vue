<template>
  <footer style="padding:20% 15%;">
    <p>Your cart is ready to be filled. You can add any item from the shop. Or you can manually add anything if you cannot find them in the shop</p>
    <button class="btn btn-large" @click="onStartShopping">Start shopping</button>
  </footer>
</template>

<script>
export default {
  methods: {
    onStartShopping() {
      this.$router.push({ name: "shop" });
    }
  }
};
</script>
