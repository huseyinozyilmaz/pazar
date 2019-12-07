<template>
  <div class="shop-section-header">
    <img :src="url" />
    <h2>{{ section }}</h2>
  </div>
</template>

<script>
export default {
  name: "ShopSectionHeader",
  props: {
    section: String
  },
  computed: {
    url() {
      return
    }
  }
};
</script>

<style scoped>
.shop-section-header {
  background: 
}
</style>
