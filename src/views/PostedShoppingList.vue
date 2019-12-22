<template>
  <div class="posted-shopping-list" v-if="shoppingList">
    <div>
      <img src="/img/logo.svg" class="app-icon" alt="Pazar Icon" />
    </div>
    <div>
      <img src="@/assets/img/logo-m.png" alt="Pazar Logo" />
    </div>
    <h5>You sent this shopping list to {{shoppingList.recipient}} {{shoppingList.shared | ago}}</h5>
    <h3 class="name">{{shoppingList.name}}</h3>
    <h5 class="date">Due on {{shoppingList.date | dateformat}}</h5>
    <h5 class="priority">{{shoppingList.priority}} priority</h5>
    <div class="list">
      <article class="item" v-for="item in shoppingList.items" :key="item.id">
        <div class="col-todo">
          <label class="box">
            <input type="checkbox" v-model="item.completed" disabled="disabled"/>
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
    <footer>
      <button class="btn btn-large" @click="onOk">OK</button>
    </footer>
  </div>
</template>

<script>
export default {
  name: "posted-shopping-list",
  methods: {
    onOk() {
      this.$router.push({name: 'shopping-lists'})
    }
  },
  async created() {
    await this.$store.dispatch("fetchSharedShoppingList", this.$route.params.id);
  },
  computed: {
    shoppingList() {
      return this.$store.state.selectedSharedShoppingList;
    }
  }
};
</script>

<style scoped>
.app-icon {
  width: 10%;
  height: 10%;
}
.name, .date, .priority {
  margin:0;
}
.priority, .date{
  color: #999;
  font-weight: 400;
}
.item {
  display:flex;
  align-items: center;
  justify-content: center;
}
.col-todo {
  flex: 1;
  max-width: 48px;
  padding: 10px;
  padding-top: 20px;
  text-align: center;
}
.col-name {
  flex: 5;
  text-align: left;
  padding-left: 10px;
}
.col-image {
  flex: 1;
}
.item-image {
  width: 70px;
}
.list {
  margin-top: 6px;
  border-top: 1px solid #eee;
}
.box { 
  display: block; 
  position: relative; 
  padding-left: 35px; 
  margin-bottom: 15px; 
  font-size: 20px; 
}
input[type=checkbox] { visibility: hidden; }
.mark { 
  position: absolute; 
  top: 0; 
  left: 0; 
  height: 25px; 
  width: 25px; 
  background-color: #fff;
  border: 1px solid #aaa;
  border-radius: 3px;
}
.box input:checked + .mark { 
  background-color: tomato;
  border-color: tomato;
} 
.mark:after { 
  content: ""; 
  position: absolute; 
  display: none; 
} 
.box input:checked + .mark:after { 
  display: block; 
}
.box .mark:after { 
  left: 8px; 
  bottom: 5px; 
  width: 6px; 
  height: 14px; 
  border: solid #eee; 
  border-width: 0 2px 2px 0; 
  -webkit-transform: rotate(45deg); 
  -ms-transform: rotate(45deg); 
  transform: rotate(45deg); 
}
.item-title {
  font-weight: 400;
  font-size: 1.3rem;
  color:#000;
  margin: 0;
  padding: 0;
}
.item-quantity {
  margin: 0;
  font-size: small;
}
footer {
  border-top: 1px solid #eee;
  padding-top: 15px;
}
</style>