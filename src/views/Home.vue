<template>
  <div class="home">
    <ShoppingLists />
  </div>
</template>

<script>
// @ is an alias to /src
import ShoppingLists from "@/components/ShoppingLists.vue";

export default {
  name: "home",
  components: {
    ShoppingLists
  }
};
</script>
