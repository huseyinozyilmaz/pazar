<template>
  <div class="shopping-lists-item">
    <div class="date">
      <dir class="day">{{ shoppingList.date | day }}</dir>
      <dir class="month">{{ shoppingList.date | month }}</dir>
    </div>
    <div class="card" :style="{ backgroundColor: activeColor }">
      <a href="#" @click="onClick" :class="{shared: shoppingList.shared}">
        <header>
          <div class="count">{{shoppingList.items.length | cartsize }}</div>
          <div class="priority">{{shoppingList.priority | priority }}</div>
        </header>
        <h2 class="name">{{shoppingList.name}}</h2>
      </a>
      <footer>
        <div class="btn-group">
          <button class="btn btn-small" @click="onDelete">
            <TrashIcon class="icon-small" />
          </button>
          <button class="btn btn-small">
            <CreateIcon class="icon-small" />
          </button>
        </div>
        <div class="recipient">
          <PersonIcon class="icon-small" style="fill: #fff;" />
          {{shoppingList.recipient}}
        </div>
      </footer>
    </div>
  </div>
</template>

<script>
import PersonIcon from "@/icons/PersonIcon.vue";
import CreateIcon from "@/icons/CreateIcon.vue";
import TrashIcon from "@/icons/TrashIcon.vue";
export default {
  name: "ShoppingListsItem",
  props: {
    shoppingList: Object,
    index: Number
  },
  data() {
    return {
      palette: [
        "#D8334A",
        "#FFCE54",
        "#FC6E51",
        "#A0D468",
        "#4FC1E9",
        "#8067B7"
      ]
    };
  },
  components: {
    PersonIcon,
    CreateIcon,
    TrashIcon
  },
  methods: {
    onClick() {
      this.$store.commit("SET_SELECTED_SHOPPING_LIST", this.shoppingList);
      this.$router.push({ name: "cart" });
    },
    onDelete() {
      this.$store.dispatch("deleteShoppingList", this.shoppingList);
    }
  },
  computed: {
    activeColor() {
      if (this.shoppingList.shared) {
        return '#AAAAAA'
      } else {
        return this.palette[this.index % this.palette.length];  
      }
    }
  }
};
</script>

<style scoped>
.shopping-lists-item {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
}
.date {
  flex: 1;
  text-align: center;
  color: #555;
}
.day {
  font-size: 36px;
  font-weight: 900;
  padding: 0;
  margin: 0;
}
.month {
  font-size: 18px;
  text-transform: uppercase;
  font-weight: 900;
  padding: 0;
  margin: 0;
}
.card {
  flex: 5;
  background-color: #d8334a;
  border-radius: 6px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
  padding: 10px;
  padding-bottom: 20px;
  color: white;
}
.card h2 {
  margin: 0;
  margin-bottom: 5px;
}
.card a {
  text-decoration: none;
  color: white;
}
.card header {
  display: flex;
}
.count {
  text-align: left;
  flex: 1;
}
.priority {
  font-weight: 600;
  flex: 1;
  text-align: right;
  padding: 0 4px;
}
.shopping-lists-item footer {
  display: flex;
  align-items: center;
  justify-content: center;
}
.btn-group {
  flex: 1;
}
.btn-group button:first-of-type {
  margin-right: 10px;
}
.recipient {
  text-align: right;
  padding-right: 6px;
  flex: 2;
}
.shared > * {
  text-decoration: line-through;
}
</style>
