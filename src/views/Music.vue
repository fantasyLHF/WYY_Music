<template>
  <div class="box">
    <Title>推荐歌单</Title>
    <Loading v-if="data.length <= 0" />
    <Imglist :data="data" />
    <Title>最新音乐</Title>
    <Loading v-if="NewData.length <= 0" />
    <Newlist :data="NewData" />
    <footer>
      <h1>
        <img
          src="../assets/img/favicon.png"
        />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hokv 音乐
      </h1>
      <p>Hove公司版权所有©1997 - 广州Hokv科技有限公司运营</p>
    </footer>
  </div>
</template>
<script>
import Title from "../components/Title";
import Imglist from "../components/Imglist";
import Newlist from "../components/Newlist";
import Loading from "../components/Loading";
export default {
  data() {
    return {
      data: [],
      NewData: [],
    };
  },
  components: {
    Title,
    Imglist,
    Newlist,
    Loading,
  },
  beforeRouteEnter(to, from, next) {
    // 在渲染该组件的对应路由被 confirm 前调用
    // 不！能！获取组件实例 `this`
    // 因为当守卫执行前，组件实例还没被创建
    next((self) => {
      self
        .axios("/personalized?limit=6")
        .then((data) => {
          self.data = data.data.result;
        })
        .catch((e) => {
          console.log("请求错误", e);
        });
      self
        .axios("/personalized/newsong?limit=10")
        .then((data) => {
          self.NewData = data.data.result;
        })
        .catch((e) => {
          console.log("请求错误", e);
        });
    });
  },
};
</script>
<style lang="less" scoped>
.box {
  .list {
    a {
      display: block;
    }
  }
  footer {
    background: url("../assets/img/recommand_bg_2x.png");
    background-size: 100% auto;
    padding-top: 10%;
    padding-bottom: 10%;
    h1 {
      text-align: center;
      height: 24px;
      font-size: 20px;
      color: #e4393c;
      margin-bottom: 20px;
      font-weight: bold;
      font-style: italic;
      img {
        height: 36px;
        width: auto;
        vertical-align: middle;
      }
    }
    p {
      font-size: 12px;
      color: #888;
      text-align: center;
      margin-top: 10px;
      height: 12px;
    }
  }
}
</style>