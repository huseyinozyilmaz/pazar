<template>
  <footer class="app-footer">
    <div class="col">
      <router-link class="nav" :to="{ name: 'shop' }">
        <StoreIcon class="icon-medium" />
        <p>Shop</p>
      </router-link>
    </div>
    <div class="col">
      <router-link
        class="nav"
        :to="{ name: 'cart' }"
        :class="{ 'animated': animated}"
        @click.native="onCartClick"
      >
        <CartIcon class="icon-medium" />
        <p>
          Cart
          <span class="badge" v-if="cartSize">{{cartSize}}</span>
        </p>
      </router-link>
    </div>
    <div class="col">
      <router-link class="nav" :to="{ name: 'shopping-lists' }">
        <ListIcon class="icon-medium" />
        <p>Lists</p>
      </router-link>
    </div>
    <div class="col">
      <router-link class="nav" :to="{ name: 'profile' }">
        <PersonIcon class="icon-medium" />
        <p>Profile</p>
      </router-link>
    </div>
  </footer>
</template>

<script>
import StoreIcon from "@/icons/StoreIcon.vue";
import CartIcon from "@/icons/CartIcon.vue";
import ListIcon from "@/icons/ListIcon.vue";
import PersonIcon from "@/icons/PersonIcon.vue";

export default {
  name: "app-footer",
  data() {
    return {
      msg: "Create and share your groceries shopping lists",
      animated: false
    };
  },
  components: {
    StoreIcon,
    CartIcon,
    ListIcon,
    PersonIcon
  },
  methods: {
    onCartClick() {
      this.isActive = !this.isActive;
    }
  },
  created() {
    this.$store.subscribe(mutation => {
      if (mutation.type === "ADD_TO_CART") {
        var self = this;
        self.animated = true;
        setTimeout(function() {
          self.animated = false;
        }, 500);
      }
    });
  },
  computed: {
    cartSize() {
      return this.$store.getters.cart ? this.$store.getters.cart.length : "";
    }
  }
};
</script>

<style scoped>
.col p {
  margin: 0;
  font-size: 0.8rem;
  letter-spacing: 1px;
}
.col a.router-link-exact-active {
  fill: #333;
  color: tomato;
  font-weight: bold;
}
.nav {
  text-decoration: none;
  color: #555;
  fill: #555;
  display: block;
}
.nav:hover {
  color: #333;
  fill: #333;
}
.badge {
  position: relative;
  top: -20px;
  right: 34px;
  color: tomato;
  font-weight: bold;
}
.animated {
  animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  transform: translate3d(0, 0, 0);
  backface-visibility: hidden;
}
@keyframes shake {
  10%,
  90% {
    transform: translate3d(-1px, 0, 0);
  }
  20%,
  80% {
    transform: translate3d(2px, 0, 0);
  }
  30%,
  50%,
  70% {
    transform: translate3d(-5px, 0, 0);
  }
  40%,
  60% {
    transform: translate3d(5px, 0, 0);
  }
}
</style>