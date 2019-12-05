<template>
  <div class="shopping-lists">
    <h1>Shopping Lists</h1>
    <div v-if="shoppingLists.length">
      here
    </div>
    <div v-else>
      <ShoppingListBacklog/>
    </div>
  </div>
</template>

<script>
import ShoppingListBacklog from "@/components/ShoppingListBacklog.vue"

export default {
  name: "shopping-lists",
  data() {
    return {

    };
  },
  components: {
    ShoppingListBacklog
  },
  methods: {
    onGoClicked() {
      
    }
  },
  computed: {
    shoppingLists() {
      return this.$store.state.shoppingLists
    }
  }
};
</script>

<style scoped>

</style>