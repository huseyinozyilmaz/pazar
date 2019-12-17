<template>
  <div class="cart">
    <section v-if="selectedShoppingList">
      <CartHeader />
      <h4 class="cart-name">{{ selectedShoppingList.name }}</h4>
      <CartSendHeader :recipient="selectedShoppingList.recipient" />
      <CartItems />
      <CartCustomItem />
      <CartFooter v-if="items.length" />
      <cartEmpty v-else />
    </section>
  </div>
</template>

<script>
import CartItems from "@/components/CartItems.vue";
import CartCustomItem from "@/components/CartCustomItem.vue";
import CartHeader from "@/components/CartHeader.vue";
import CartSendHeader from "@/components/CartSendHeader.vue";
import CartFooter from "@/components/CartFooter.vue";
import CartEmpty from "@/components/CartEmpty.vue";

export default {
  components: {
    CartHeader,
    CartSendHeader,
    CartItems,
    CartCustomItem,
    CartFooter,
    CartEmpty
  },
  computed: {
    items() {
      return this.$store.getters.cart;
    },
    selectedShoppingList() {
      return this.$store.state.selectedShoppingList;
    }
  }
};
</script>

<style scoped>
.cart-name {
  margin: 0;
  font-weight: 600;
  padding: 6px;
}
</style>