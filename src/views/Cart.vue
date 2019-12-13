<template>
  <div class="cart">
    <h1>{{title}}</h1>
    <section>
      <header>
        <div class="col">
          <CartIcon class="cart-icon" />
        </div>
        <div class="col">
          <h1 class="title">Cart</h1>
          <h5 class="item-count">({{itemCount}})</h5>
        </div>
        <div class="col due">
          <h2>03</h2>
          <h3>DEC</h3>
        </div>
      </header>
      <div class="to">
        <div class="to-title">To</div>
        <div class="to-address">email@huseyin.org</div>
        <div class="to-send">
          <button class="btn-send">
            <SendIcon class="icon-small" />
          </button>
        </div>
      </div>
      <CartItem v-for="item in items" :key="item.id" :item="item" />
      <footer>
        <h4>Empty Cart</h4>
        <button class="btn" @click="onEmptyCart">
          <TrashIcon class="icon-small" />
        </button>
      </footer>
    </section>
  </div>
</template>

<script>
import CartIcon from "@/icons/CartIcon.vue";
import SendIcon from "@/icons/SendIcon.vue";
import TrashIcon from "@/icons/TrashIcon.vue";
import CartItem from "@/components/CartItem.vue";
export default {
  data() {
    return {
      title: "Cart"
    };
  },
  components: {
    CartItem,
    SendIcon,
    TrashIcon,
    CartIcon
  },
  methods: {
    onEmptyCart() {
      this.$store.commit("EMPTY_CART");
    }
  },
  mounted() {},
  computed: {
    items() {
      return this.$store.getters.cart;
    },
    itemCount() {
      if (!this.$store.getters.cart) {
        return "";
      } else {
        let item = this.$store.getters.cart.length > 1 ? "items" : "item";
        return `${this.$store.getters.cart.length} ${item}`;
      }
    }
  }
};
</script>

<style scoped>
.cart header {
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
}
.due h2,
h3 {
  margin: 0;
  color: #ddd;
}
.to {
  position: relative;
  background-color: tomato;
  color: #fff;
  font-size: small;
  letter-spacing: 1px;
  font-weight: 400;
  line-height: 34px;
  height: 34px;
}
.to div {
  float: left;
  font-weight: 600;
}
.to-title {
  width: 36px;
  border-right: 2px solid #fff;
  text-align: center;
}
.to-address {
  padding-left: 6px;
  width: calc(100% - 72px);
}
.to-send {
  width: 36px;
  border-left: 2px solid #fff;
  line-height: 34px;
}
.to-send > svg {
  width: 24px;
  height: 24px;
}
.btn-send {
  height: 32px;
  line-height: 32px;
  margin: 0;
  cursor: pointer;
  background-color: transparent;
  border: none;
  outline: none;
}
.btn-send:hover {
  fill: #fff;
}
.btn-send:active {
  fill: #fff;
  transform: translateY(2px);
}
</style>