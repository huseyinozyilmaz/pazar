<template>
  <div class="shared-shopping-list">
    <div>
      <img src="/img/logo.svg" class="app-icon" alt="Pazar Icon" />
    </div>
    <div>
      <img src="/img/pazar.png" alt="Pazar Logo" />
    </div>
    <h5>Hi {{ shoppingList.recipient }}. {{shoppingList.from}} sent you a shopping list.</h5>
    <h3 class="name">{{shoppingList.name}}</h3>
    <h5 class="date">{{shoppingList.date | dateformat}}</h5>
    <h5 class="priority">{{shoppingList.priority}} priority</h5>
    <div class="list">
      <article class="item" v-for="item in shoppingList.items" :key="item.id">
        <div class="col-todo">
          <label class="box">
            <input type="checkbox" v-model="item.completed" />
            <span class="mark"></span>
          </label>
        </div>
        <div class="col-image">
          <img class="item-image" :src="item.image" :alt="item.name" />
        </div>
        <div class="col-name">
          <h4 class="item-title">{{item.name}}</h4>
          <p class="item-quantity">{{item.unit.value}} {{item.unit.name}}</p>
        </div>
      </article>
    </div>
  </div>
</template>

<script>
export default {
  name: "shared-shopping-list",
  data() {
    return {};
  },
  methods: {},
  async created() {
    await this.$store.dispatch(
      "fetchSharedShoppingList",
      this.$route.params.id
    );
  },
  computed: {
    shoppingList() {
      return this.$store.state.selectedSharedShoppingList;
    }
  }
};
</script>

<style scoped>
</style>