<template>
  <div>
    <article class="card">
      <div class="col">
        <input type="text" placeholder="Type name of the item" v-model="item.name" />
      </div>
      <div class="col">
        <h4 class="item-title"></h4>
        <QuantityInput :quantity.sync="item.unit" class="quantity" />
        <a href="javascript:void(0)" class="item-remove" @click="onAdd">Add</a>
      </div>
    </article>
  </div>
</template>

<script>
import QuantityInput from "@/components/QuantityInput";

export default {
  name: "CartCustomItem",
  data() {
    return {
      item: {
        id: "",
        name: "",
        unit: {
          name: "",
          increment: 0.5,
          value: 1
        },
        image: "/img/shop/items/unknown.png"
      }
    };
  },
  components: {
    QuantityInput
  },
  methods: {
    onAdd() {
      if (!this.item.name) return;
      this.item.id = this.item.name;
      this.$store.commit("ADD_TO_CART", this.item);
      this.item = this.generateNewItem();
    },
    generateNewItem() {
      return {
        id: "",
        name: "",
        unit: {
          name: "",
          increment: 0.5,
          value: 1
        },
        image: "/img/shop/items/unknown.png"
      };
    }
  }
};
</script>

<style scoped>
.card {
  min-width: 300px;
  display: flex;
  padding: 6px;
  border-bottom: 1px solid #eee;
  align-items: center;
  justify-content: center;
}
.card:first-of-type {
  border-top: 1px solid #eee;
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
