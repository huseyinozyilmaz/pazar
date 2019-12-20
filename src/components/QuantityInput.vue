<template>
  <div class="quantity-input">
    <button class="btn-item btn-unit" @click="onDecrement"><RemoveIcon class="icon-small"/></button>
    <span class="unit-title">{{quantity.value}} {{quantity.name}}</span>
    <button class="btn-item btn-unit" @click="onIncrement"><AddIcon class="icon-small" /></button>
  </div>
</template>

<script>
import AddIcon from '@/icons/AddIcon'
import RemoveIcon from '@/icons/RemoveIcon'
export default {
  name: "QuantityInput",
  props: {
    quantity: Object
  },
  components: {
    AddIcon,
    RemoveIcon
  },
  methods: {
    onIncrement() {
      this.quantity.value = this.quantity.value + this.quantity.increment
      this.$emit('update', this.quantity.value)
    },
    onDecrement() {
      if (this.quantity.value > this.quantity.increment) {
        this.quantity.value = this.quantity.value - this.quantity.increment
        this.$emit('update', this.quantity.value)
      }
    }
  }
};
</script>

<style scoped>
.quantity-input {
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
  width: 140px;
  max-width: 180px;
  border-radius: 1.5rem;
  padding: 8px; 
}
.btn-item {
  border: none;
  background-color: #fff;
  fill: #333;
  line-height: 36px;
  font-size: 1rem;
  cursor: pointer;
  outline: none;
}
.btn-item:hover {
	fill: #000;
}
.btn-item:active {
	transform: translateY(2px);
	fill: tomato;
}
.btn-unit {
  padding: 0 6px;
}
.unit-title {
  min-width: 60px;
  display: inline-block;
  font-size: 1rem;
  line-height: 36px;
  padding:0;
}
</style>
