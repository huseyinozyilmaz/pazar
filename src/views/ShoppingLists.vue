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
  async created() {
    await this.$store.dispatch('fetchShoppingLists')
  },
  computed: {
    shoppingLists() {
      console.log(this.$store.state.shoppingLists.length)
      return this.$store.state.shoppingLists
    }
  }
};
</script>

<style scoped>

</style>