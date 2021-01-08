<template>
  <div class="box">
    <a href="" v-for="v in data" :key="v.id">
      <List :data="v"></List>
    </a>
  </div>
</template>
<script>
import List from "../components/List";
export default {
  props: ["data"],
  components: {
    List,
  },
};
</script>
<style lang="less" scoped>
.box {
  a {
    display: block;
    border-bottom: 1px solid #eee;
    margin-left: 10px;
  }
}
</style>