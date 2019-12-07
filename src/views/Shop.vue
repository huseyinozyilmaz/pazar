<template>
  <div class="shop">
    <div class="banner">
      <img :src="selectedCategory.image" alt="Shop Category">
      <h2>{{selectedCategory.title}}</h2>
    </div>
    <header>
      <span class="categories">Categories</span>
      <nav class="vertical-align-middle scroll">
        <a href="#" class="nav-item" v-for="c in categories" :key="c.id" @click="onCategoryClick(c)">{{c.title}}</a>
      </nav>
    </header>
  </div>
</template>

<script>
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
    }
  }
};
</script>

<style scoped>
.banner {
  position: relative;
  text-align: center;
  color: white;
}
.banner h2 {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
img {
  margin: 0;
  width: 100%;
}
header {
  margin: 0;
  background: #333;
}
header .categories {
  width: 25%;
}
header nav{
  width: 75%;
}
.categories {
  text-align: center;
  border-right: 1px solid tomato;
  padding: 12px 24px 13px;
}
.categories {
  font-weight: 700;
  color: tomato;
  text-decoration: none;
  font-size: small;
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
</style>