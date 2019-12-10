<template>
  <article class="card shopping-item">
    <header class="shopping-item-header">
      <img :src="item.image" :alt="item.name" />
      <div class="shopping-item-title">{{item.name}}</div>
    </header>
    <footer class="shopping-item-footer">
      <span class="button-group">
        <button class="btn-item btn-unit" @click="onDecrementClick">
          <RemoveIcon class="icon-small" />
        </button>
        <span class="unit-title">{{activeItem.unit.value}} {{item.unit.name}}</span>
        <button class="btn-item btn-unit" @click="onIncrementClick">
          <AddIcon class="icon-small" />
        </button>
      </span>
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
import AddIcon from "@/icons/AddIcon";
import RemoveIcon from "@/icons/RemoveIcon";
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
    AddIcon,
    RemoveIcon
  },
  methods: {
    onIncrementClick() {
      this.activeItem.unit.value =
        this.activeItem.unit.value + this.activeItem.unit.increment;
    },
    onDecrementClick() {
      if (this.activeItem.unit.value > this.activeItem.unit.increment) {
        this.activeItem.unit.value =
          this.activeItem.unit.value - this.activeItem.unit.increment;
      }
    },
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
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
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
.unit-title {
  min-width: 60px;
  display: inline-block;
  font-size: small;
  border: 1px solid #ddd;
  line-height: 34px;
  max-height: 36px;
  padding: 0;
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
.btn-unit {
  padding: 0 10px;
}
.btn-unit:first-of-type {
  border-left: 1px solid #ddd;
  border-top-left-radius: 6px;
  border-bottom-left-radius: 6px;
}
.btn-unit:last-of-type {
  border-right: 1px solid #ddd;
  border-top-right-radius: 6px;
  border-bottom-right-radius: 6px;
}
.btn-chart {
  padding: 0 10px;
  /* border: 2px solid tomato; */
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
