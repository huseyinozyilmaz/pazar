<template>
  <div class="create-list">
    <h1>New Shopping List</h1>
    <form class="form">
      <div>
        <label for="list-name">List Name</label>
        <input type="text" id="list-name" placeholder="Name your list" v-model="shoppingList.name" />
      </div>
      <div>
        <label for="list-due-date">Due Date</label>
        <datetime
          v-model="shoppingList.date"
          id="list-due-date"
          placeholder="When do you need this by"
          class="theme-orange"
        ></datetime>
      </div>
      <div>
        <label for="list-recipient">Recipient</label>
        <input type="text" id="list-recipient" readonly v-model="shoppingList.recipient" />
      </div>
      <div>
        <label for="list-priority">Priority</label>
        <div id="list-priority">
          <label class="container">High
            <input type="radio" value="high" v-model="shoppingList.priority">
            <span class="checkmark"></span>
          </label>
          <label class="container">Medium
            <input type="radio" value="medium" v-model="shoppingList.priority">
            <span class="checkmark"></span>
          </label>
          <label class="container">Low
            <input type="radio" value="low" v-model="shoppingList.priority">
            <span class="checkmark"></span>
          </label>
        </div>
      </div>
    </form>
    <button class="btn btn-cancel" @click="onCancel">Cancel</button>
    <button class="btn btn-large" @click="onCreateList" :disabled="invalid()">Create List</button>
  </div>
</template>

<script>
import { Datetime } from "vue-datetime";
import "vue-datetime/dist/vue-datetime.css";

export default {
  name: "NewShoppingList",
  data() {
    return {
      shoppingList: {
        id: "",
        profileId: "",
        name: "For Today",
        date: new Date().toISOString(),
        recipient: "",
        priority: "medium",
        items: []
      }
    }
  },
  components: {
    Datetime
  },
  methods: {
    onCreateList() {
      this.shoppingList.id = new Date().getTime()
      this.$store.dispatch('createShoppingList', this.shoppingList)
      this.$router.push({ name: 'shopping-lists'})
    },
    onCancel() {
      this.$router.push({ name: 'shopping-lists'})
    },
    invalid() {
      return !(this.shoppingList.name && this.shoppingList.date && this.shoppingList.recipient && this.shoppingList.priority)
    }
  },
  mounted () {
    this.shoppingList.recipient = this.$store.getters.profile.contact.name
  }
};
</script>

<style scoped>
.container {
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
}
.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 25px;
  width: 25px;
  background-color: #eee;
  border-radius: 50%;
}
.container:hover input ~ .checkmark {
  background-color: #ccc;
}
.container input:checked ~ .checkmark {
  background-color: tomato;
}
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}
.container input:checked ~ .checkmark:after {
  display: block;
}
.container .checkmark:after {
  top: 9px;
  left: 9px;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: white;
}
.container input {
  display: block;
}

</style>