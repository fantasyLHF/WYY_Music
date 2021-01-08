<template>
  <div class="box">
    <h3 v-show="true">搜索"{{ myinput }}"</h3>
    <!-- {{ changedata }} -->
    <ul>
      <li @click="goto" v-for="(v, i) in changedata" :key="i">
        <i></i><span>{{ v.keyword }}</span>
      </li>
    </ul>
    <Loading v-if="changedata.length <= 0 && myinput != ''" />
  </div>
</template>
<script>
import Loading from "../components/Loading";
export default {
  components: {
    Loading,
  },
  props: ["changedata", "myinput"],
  methods: {
    goto() {
      this.$router.push("/search/list");
    },
  },
  //   computed: {
  //     data() {
  //       if (this.changedata) {
  //         return this.changedata;
  //       } else {
  //         return [{ name: "" }];
  //       }
  //     },
  //   },
};
</script>
<style lang="less" scoped>
.box {
  width: 100%;
  h3 {
    font-size: 15px;
    color: rgb(80, 125, 175);
    height: 50px;
    line-height: 50px;
    margin-left: 10px;
    border-bottom: 1px solid rgb(242, 243, 244);
  }
  ul {
    li {
      display: flex;
      height: 45px;
      padding-left: 10px;
      i {
        width: 15px;
        margin-right: 7px;
        background: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMCAzMCI+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBmaWxsPSIjMDQwMDAwIiBkPSJNMjguMTgxIDI3LjUzNWwtMS40MTQgMS40MTQtNy43NTUtNy43NTRBMTEuNDQ1IDExLjQ0NSAwIDAgMSAxMS41IDI0QzUuMTQ5IDI0IDAgMTguODUyIDAgMTIuNSAwIDYuMTQ5IDUuMTQ5IDEgMTEuNSAxIDE3Ljg1MiAxIDIzIDYuMTQ5IDIzIDEyLjVjMCAyLjc1Ni0uOTczIDUuMjg1LTIuNTg5IDcuMjY2bDcuNzcgNy43Njl6TTExLjUgM2E5LjUgOS41IDAgMSAwIDAgMTkgOS41IDkuNSAwIDAgMCAwLTE5eiIgb3BhY2l0eT0iLjMiLz48L3N2Zz4=)
          no-repeat center;
        background-size: 15px;
      }
      span {
        font-size: 15px;
        color: #333;
        line-height: 45px;
        box-sizing: border-box;
        flex: auto;
        border-bottom: 1px solid rgb(242, 243, 244);
      }
    }
  }
}
</style>