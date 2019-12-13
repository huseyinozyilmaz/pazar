<template>
  <div class="shopping-lists">
    <h1>Shopping Lists</h1>
    <div v-if="shoppingListsExist">
      <ShoppingListsItem
        v-for="(shoppingList, index) in shoppingLists"
        :key="shoppingList.id"
        :shoppingList="shoppingList"
        :index="index"
      />
      <p>
        <button class="btn btn-medium" @click="onCreateList">
          <AddIcon class="icon-small" />
        </button>
      </p>
    </div>
    <NoShoppingLists v-else />
  </div>
</template>

<script>
import NoShoppingLists from "@/components/NoShoppingLists.vue";
import ShoppingListsItem from "@/components/ShoppingListsItem.vue";
import AddIcon from "@/icons/AddIcon";
export default {
  name: "shopping-lists",
  data() {
    return {};
  },
  components: {
    NoShoppingLists,
    ShoppingListsItem,
    AddIcon
  },
  methods: {
    onCreateList() {
      this.$router.push({ name: "new-shopping-list" });
    }
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