<template>
  <div class="shop">
    <div class="banner">
      <img :src="selectedCategory.image" alt="Shop Category">
      <h2>{{selectedCategory.title}}</h2>
    </div>
    <header>
      <nav class="vertical-align-middle scroll">
        <a href="#" class="nav-item" v-for="c in categories" :key="c.id" @click="onCategoryClick(c)">{{c.title}}</a>
      </nav>
    </header>
    <div class="category-items centered">
      <section class="cards">
        <ShoppingItem v-for="item in items" :key="item.id" :item="item"/>
      </section>
    </div>
  </div>
</template>

<script>
import ShoppingItem from '@/components/ShoppingItem.vue'

export default {
  data () {
    return {
      selectedCategory: {
        id: "S01",
        title: "Fruit & Vegetables",
        image: "/img/shop/sections/fruits-vegetables.jpg",
      }
    }
  },
  components: {
    ShoppingItem
  },
  methods: {
    onCategoryClick(category) {
      this.selectedCategory = category 
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
.banner {
  position: relative;
  text-align: center;
  color: white;
  height: 250px;
}
.banner h2 {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
img {
  margin: 0;
  max-height: auto;
  max-width: 100%;
  display: block;
    height: 100%;
    width: 100%;
}
header {
  margin: 0;
  background: #333;
}
header nav{
  width: 100%;
}
.nav-item {
  padding: 12px 16px 13px;
  text-decoration: none;
  color: #fff;
  font-size: small;
  font-weight: bold;
}
.nav-item:not(:last-child) {
  border-right: 1px solid rgba(114, 124, 135, 0.2);
}
.categories,
.nav-item,
.vertical-align-middle {
  display: inline-block;
  vertical-align: middle;
}
.scroll {
  white-space: nowrap;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch; 
	-ms-overflow-style: -ms-autohiding-scrollbar; 
}
.scroll::-webkit-scrollbar {
	display: none; 
}
.category-items {
  margin-bottom: 0px;
}
.cards {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 4px;
}
</style>