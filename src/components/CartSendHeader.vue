<template>
  <div class="to">
    <div class="to-title">To</div>
    <div class="to-address">{{ recipient }}</div>
  </div>
</template>

<script>
export default {
  props: {
    recipient: String
  }
}
</script>

<style scoped>
.to {
  position: relative;
  background-color: tomato;
  color: #fff;
  font-size: small;
  letter-spacing: 1px;
  font-weight: 400;
  line-height: 34px;
  height: 34px;
}
.to div {
  float: left;
  font-weight: 600;
}
.to-title {
  width: 36px;
  border-right: 2px solid #fff;
  text-align: center;
}
.to-address {
  padding-left: 6px;
  width: calc(100% - 72px);
}
</style>