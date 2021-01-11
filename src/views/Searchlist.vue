<template>
  <div>
    <Slist :data="data" :myinput="keyword"></Slist>
  </div>
</template>
<script>
import Slist from "../components/Slist";
export default {
  data() {
    return {
      data: [],
    };
  },
  props: ["keyword", "ddd"],
  components: {
    Slist,
  },
  beforeRouteEnter(to, from, next) {
    next((vm) => {
      // vm.axios(`/search/suggest/multimatch?keywords=${vm.keyword}`).then(
      //   (data) => {
      //     console.log(data);
      //     vm.data = data.data.result.songs;
      //     console.log(vm.data);
      //   }
      // );
      vm.axios(`/search/get?keywords=${vm.keyword}`)
        .then((data) => {
          if (data.data.result.songs) {
            vm.data = data.data.result.songs;
          } else {
            vm.data = [];
          }
        })
        .catch((e) => {
          console.log("请求错误", e);
        });
    });
  },
};
</script>
<style lang="less" scoped>
</style>