<template>
  <div class="create-list">
    <h1>New Shopping List</h1>
    <form>
      <div>
        <label for="list-name">List Name</label>
        <input type="text" id="list-name" />
      </div>
      <div>
        <label for="list-due-date">Due Date</label>
        <input type="text" id="list-due-date" />
      </div>
      <div>
        <label for="list-priority">Priority</label>
        <input type="text" id="list-priority" />
      </div>
    </form>
    <button class="btn btn-large" @click="onCreateList">Create List</button>
  </div>
</template>

<script>
export default {
  name: "NewShoppingList",
  components: {},
  methods: {
    onCreateList() {}
  }
};
</script>
