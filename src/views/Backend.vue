<template>
  <div class="backend">
    <h1>Backend</h1>
    <nav>
      <a href="" v-for="cat in categories" :key="cat.id">{{cat.title}}</a>
    </nav>
    <section class="add">
      <article>
        <div class="col">
          <img src="/img/shop/items/unknown.png" alt="" class="col">
          <input type="file" accept="image/*" @change="uploadImage($event)" id="file-input">
        </div>
        <div class="col-l">
          <div><label for="item-id">Id:</label><input type="text" id="item-id"></div>
          <div><label for="item-name">Name:</label><input type="text" id="item-name"></div>
          <div><label for="item-unit">Unit:</label><input type="text" id="item-unit"></div>
          <div><label for="item-default">Default:</label><input type="text" id="item-default"></div>
          <div><label for="item-increment">Increment By:</label><input type="text" id="item-increment"></div>
        </div>
        <div class="col">
          <a href="#">add</a>
        </div>
      </article>
    </section>
    <section>
      <article v-for="item in items" :key="item.id">
        <img :src="item.image" alt="" class="col">
        <div class="col">
          <pre>Id     : {{item.id}}</pre>
          <pre>Name   : {{item.name}}</pre>
          <pre>Unit   : {{item.unit.name}}</pre>
          <pre>Default: {{item.unit.value}}</pre>  
          <pre>Incr By: {{item.unit.increment}}</pre>
        </div>
        <div class="col">
          <a href="#">remove</a>
          <a href="#">edit</a>
        </div>
      </article>
    </section>
  </div>
</template>

<script>
export default {
  data () {
    return {
      selectedCategory: {
        id: "S01",
        title: "Fruit & Vegetables",
        image: "/img/shop/sections/fruits-vegetables.jpg"
      }
    }
  },
  components: {
    
  },
  methods: {
    uploadImage() {

    }
  },
  mounted() {
    this.$store.dispatch('fetchShop')
  },
  computed: {
    categories() {
      return this.$store.getters.shopCategories;
    },
    items() {
      return this.$store.getters.categoryItems(this.selectedCategory.id);
    }
  }
};
</script>

<style scoped>
article {
  text-align: left;
  display: flex;
  align-items: center;
  justify-content: center;
}
article img {
  max-width: 140px;
}
.col {
  flex: 1;
  margin: 0 20px;
}
.col-l {
  flex: 2;
}
.col:last-of-type {
  text-align: right;
}
pre {
  margin: 0;
}
a {
  padding: 0 6px;
}
input[type=text] {
  padding: 6px;
  border-radius: 2px;
  margin-bottom: 6px;
}
label {
  font-size: small;
  display: inline-block;
  min-width: 90px;
  padding-right: 6px;
}
.add {
  border: 1px solid #ddd;
  border-radius: 6px;
  padding: 10px 0;
  margin: 10px 0;
}
</style>