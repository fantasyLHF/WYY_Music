<template>
  <div class="box">
    <a @click.prevent="trun(v.id)" href="" v-for="v in data" :key="v.id">
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
  methods: {
    trun(id) {
      this.$router.push("/Play/" + id).catch(() => {});
    },
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