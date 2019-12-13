<template>
  <div class="footer">
    <footer>
      <h4>Empty Cart</h4>
      <button class="btn" @click="onEmptyCart">
        <TrashIcon class="icon-small" />
      </button>
    </footer>
    <footer>
      <h4>Send Cart</h4>
      <button class="btn" @click="onSendCart">
        <SendIcon class="icon-small" />
      </button>
    </footer>
  </div>
</template>

<script>
import TrashIcon from "@/icons/TrashIcon.vue";
import SendIcon from "@/icons/SendIcon.vue";

export default {
  components: {
    TrashIcon,
    SendIcon
  },
  methods: {
    onEmptyCart() {
      this.$store.commit("EMPTY_CART");
    },
    onSendCart() {
      
    }
  },
  computed: {
    items() {
      return this.$store.getters.cart;
    },
    selectedShoppingList() {
      return this.$store.state.selectedShoppingList
    }
  }
};
</script>

<style scoped>
.footer {
  display: flex;
  align-items: center;
  justify-content: center;
}
.footer footer {
  flex: 1;
}
</style>