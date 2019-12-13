<template>
  <header>
    <div class="col">
      <CartIcon class="cart-icon" />
    </div>
    <div class="col">
      <h1 class="title">{{title}}</h1>
      <h5 class="item-count">({{selectedShoppingList.items.length | cartsize}})</h5>
    </div>
    <div class="col due">
      <h2>{{selectedShoppingList.date | day}}</h2>
      <h3>{{selectedShoppingList.date | month}}</h3>
    </div>
  </header>
</template>

<script>
import CartIcon from "@/icons/CartIcon.vue";
export default {
  data() {
    return {
      title: "Cart"
    };
  },
  components: {
    CartIcon
  },
  computed: {
    selectedShoppingList() {
      return this.$store.state.selectedShoppingList
    }
  }
};
</script>

<style scoped>
header {
  display: flex;
  padding: 6px;
  align-items: center;
  justify-content: center;
}
.cart .col {
  flex: 1;
}
.cart-icon {
  width: 64px;
  fill: #efefef;
}
.title {
  margin-bottom: 0;
}
.item-count {
  margin-top: 5px;
  margin-bottom: 0;
}
.due h2,
h3 {
  margin: 0;
  color: #ddd;
}

</style>
