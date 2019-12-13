<template>
  <div>
    <article class="card" v-for="item in items" :key="item.id">
      <div class="col">
        <img class="item-image" :src="item.image" :alt="item.name" />
      </div>
      <div class="col">
        <h4 class="item-title">{{item.name}}</h4>
        <QuantityInput :quantity.sync="item.unit" class="quantity" />
        <a href="javascript:void(0)" class="item-remove" @click="onRemoveItem($event, item)">Remove</a>
      </div>
    </article>
  </div>
</template>

<script>
import QuantityInput from "@/components/QuantityInput";

export default {
  name: "CartItems",
  components: {
    QuantityInput
  },
  methods: {
    onRemoveItem(item) {
      this.$store.commit("REMOVE_FROM_CART", item);
    }
  },
  computed: {
    items() {
      return this.$store.getters.cart;
    }
  }
};
</script>

<style scoped>
.card {
  min-width: 300px;
  display: flex;
  padding: 6px;
  border-top: 1px solid #eee;
  align-items: center;
  justify-content: center;
}
.col {
  flex: 1;
}
.quantity {
  margin: 0 auto;
}
.item-image {
  width: 100px;
}
.item-remove {
  color: tomato;
  font-size: small;
  text-decoration: none;
  cursor: pointer;
  text-transform: lowercase;
  letter-spacing: 1px;
  display: block;
}
</style>
