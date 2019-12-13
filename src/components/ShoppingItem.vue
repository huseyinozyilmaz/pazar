<template>
  <article class="card shopping-item">
    <header class="shopping-item-header">
      <img :src="item.image" :alt="item.name" />
      <div class="shopping-item-title">{{item.name}}</div>
    </header>
    <footer class="shopping-item-footer">
      <QuantityInput :quantity.sync="activeItem.unit" class="quantity" />
      <p>
        <button class="btn-item btn-chart" @click="onCartClick">
          <CartIcon class="icon-small" />
        </button>
      </p>
    </footer>
  </article>
</template>

<script>
import CartIcon from "@/icons/CartIcon";
import QuantityInput from "@/components/QuantityInput";
export default {
  name: "ShoppingItem",
  data() {
    return {
      activeItem: JSON.parse(JSON.stringify(this.item))
    };
  },
  props: {
    item: Object
  },
  components: {
    CartIcon,
    QuantityInput
  },
  methods: {
    onCartClick() {
      this.$store.commit("ADD_TO_CART", this.activeItem);
      this.activeItem = this.item;
    }
  }
};
</script>

<style scoped>
.card {
  flex: 0 1 49.5%;
}
.shopping-item {
  /* box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2); */
  transition: 0.3s;
  min-width: 150px;
  max-width: 220px;
  padding: 10px;
  padding-bottom: 8px;
  margin-bottom: 10px;
}
.shopping-item-header img {
  width: 140px;
}
.shopping-item-title {
  margin: 0;
  margin-top: -15px;
}
.shopping-item-footer {
  margin: 10px 0;
}
.quantity {
  margin: 0 auto;
}
.btn-item {
  border: none;
  border-top: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
  line-height: 36px;
  max-height: 36px;
  font-size: small;
  cursor: pointer;
  outline: none;
}
.btn-item:hover {
  background-color: tomato;
  fill: #000;
}
.btn-item:active {
  transform: translateY(2px);
  fill: #fff;
  color: #fff;
}
.btn-chart {
  padding: 0 10px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
  border-radius: 50%;
  fill: white;
  background-color: tomato;
}
.btn-chart:hover {
  background-color: tomato;
  fill: #000;
}
.btn-chart:active {
  fill: #fff;
}
</style>
