<template>
  <article class="card">
    <div class="col">
      <img class="item-image" :src="item.image" :alt="item.name">
    </div>
    <div class="col">
      <h4 class="item-title">{{item.name}}</h4>
      <span class="button-group">
        <button class="btn-item btn-unit" @click="onDecrementClick"><RemoveIcon class="icon-small"/></button>
        <span class="unit-title">{{activeItem.unit.value}} {{item.unit.name}}</span>
        <button class="btn-item btn-unit" @click="onIncrementClick"><AddIcon class="icon-small" /></button>
      </span>
      <a href="javascript:void(0)" class="item-remove" @click="onRemoveItem">Remove</a>
    </div>
  </article>
</template>

<script>
import AddIcon from '@/icons/AddIcon'
import RemoveIcon from '@/icons/RemoveIcon'
export default {
  name: "CartItem",
  data() {
    return {
      activeItem: JSON.parse(JSON.stringify(this.item))
    }
  },
  props: {
    item: Object
  },
  components: {
    AddIcon,
    RemoveIcon
  },
  methods: {
    onIncrementClick() {
      this.activeItem.unit.value = this.activeItem.unit.value + this.activeItem.unit.increment
    },
    onDecrementClick() {
      if (this.activeItem.unit.value > this.activeItem.unit.increment) {
        this.activeItem.unit.value = this.activeItem.unit.value - this.activeItem.unit.increment
      }
    },
    onRemoveItem() {
      this.$store.commit('REMOVE_FROM_CART', this.activeItem)
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
.unit-title {
  min-width: 60px;
  display: inline-block;
  font-size: small;
  border: 1px solid #ddd;
  line-height: 36px;
  padding:0;
}
.btn-item {
  border: none;
  border-top: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
  line-height: 36px;
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

</style>
