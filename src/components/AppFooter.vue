<template>
  <footer class="app-footer">
    <div class="col">
      <router-link class="nav" :to="{ name: 'shop' }">
        <StoreIcon class="icon-medium"/>
        <p>Shop</p>
      </router-link>
    </div>
    <div class="col">
      <router-link class="nav" :to="{ name: 'cart' }">
        <CartIcon class="icon-medium"/>
        <p>Cart</p>
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
        <PersonIcon class="icon-medium"/>
        <p>Profile</p>
      </router-link>
    </div>
  </footer>
</template>

<script>
import StoreIcon from "@/icons/StoreIcon.vue"
import CartIcon from "@/icons/CartIcon.vue"
import ListIcon from "@/icons/ListIcon.vue"
import PersonIcon from "@/icons/PersonIcon.vue"

export default {
  name: "app-footer",
  data() {
    return {
      msg: "Create and share your groceries shopping lists"
    };
  },
  components: {
    StoreIcon,
    CartIcon,
    ListIcon,
    PersonIcon
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
}
.nav:hover {
  color: #333;
  fill: #333;
}
</style>