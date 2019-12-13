<template>
  <div class="shopping-lists">
    <h1>Shopping Lists</h1>
    <div v-if="shoppingListsExist">
      <ShoppingListsItem
        v-for="shoppingList in shoppingLists"
        :key="shoppingList.id"
        :shoppingList="shoppingList"
      />
    </div>
    <NoShoppingLists v-else />
  </div>
</template>

<script>
import NoShoppingLists from "@/components/NoShoppingLists.vue";
import ShoppingListsItem from "@/components/ShoppingListsItem.vue";
export default {
  name: "shopping-lists",
  data() {
    return {};
  },
  components: {
    NoShoppingLists,
    ShoppingListsItem
  },
  methods: {
    onGoClicked() {}
  },
  async created() {
    await this.$store.dispatch("fetchShoppingLists");
  },
  computed: {
    shoppingListsExist() {
      return this.$store.state.shoppingLists &&
        this.$store.state.shoppingLists.length
        ? true
        : false;
    },
    shoppingLists() {
      return this.$store.state.shoppingLists;
    }
  }
};
</script>

<style scoped>
</style>