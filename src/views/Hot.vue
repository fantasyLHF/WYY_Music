<template>
  <div class="box">
    <div class="logo">
      <img src="../assets/img/hot_music_bg_2x.jpg" alt="" />
      <div class="mybox">
        <div class="top"></div>
        <div class="bot">{{ date }}</div>
      </div>
    </div>
    <Loading v-if="data.length <= 0" /><keep-alive>
      <div class="hotList">
        <a
          class="item"
          href=""
          v-for="(v, i) in data"
          :key="i"
          @click.prevent="trun(v.songs[0].id)"
        >
          <span :class="{ beRed: i < 3 }">{{ i | doNum }}</span>
          <Hotlist class="myA" :data="v"></Hotlist>
        </a></div
    ></keep-alive>
    <footer @click="add">{{ message }}</footer>
  </div>
</template>
<script>
import Hotlist from "../components/Hotlist";
import Loading from "../components/Loading";
export default {
  data() {
    return {
      data: [],
      num: 1,
      message: "查看完整榜单 >",
      flag: true,
      alldata: [],
    };
  },
  components: {
    Hotlist,
    Loading,
  },
  methods: {
    trun(id) {
      this.$router.push("/play/" + id).catch(() => {});
    },
    add() {
      if (!this.flag) {
        console.log(111);
        return;
      }
      this.flag = false;
      if (this.num >= 10) {
        this.message = "全部加载完成了!";
        return;
      }
      this.num++;
      let theData = [];
      let count = 0;
      this.message = "loading...";
      for (let i = 0; i < 20; i++) {
        this.axios(
          `/song/detail?ids=${this.alldata[i + (this.num - 1) * 20].id}`
        ).then((tdata) => {
          count++;
          theData[i] = tdata.data;
          if (count == 20) {
            this.message = "查看完整榜单 >";
            this.flag = true;
            this.data = this.data.concat(theData);
          }
        });
      }
    },
  },
  computed: {
    date() {
      let date = new Date();
      let month = date.getMonth() + 1;
      if (month < 10) {
        month = "0" + month;
      }
      let day = date.getDate();
      if (day < 10) {
        day = "0" + day;
      }
      return "更新日期:" + month + "月" + day + "日";
    },
  },
  beforeRouteEnter(to, from, next) {
    next((vm) => {
      vm.num = 1;
      vm.data = [];
      let theData = [];
      vm.axios("/top/list?idx=1").then((data) => {
        vm.alldata = data.data.playlist.trackIds;
        for (let i = 0; i < 20; i++) {
          vm.axios(`/song/detail?ids=${vm.alldata[i].id}`).then((tdata) => {
            theData[i] = tdata.data;
            vm.data = [...theData];
          });
        }
      });
    });
  },

  filters: {
    doNum(v) {
      v = v + 1;
      if (v < 10) {
        v = "0" + v;
      }
      return v;
    },
  },
  // mounted() {
  // this.axios("/top/list?idx=1").then((data) => {
  // var arr = data.data.playlist.trackIds;
  // for (var i = 0; i < 20; i++) {
  //   this.axios(`/song/detail?ids=${arr[i].id}`).then((tdata) => {
  //     this.data.push(tdata.data.songs);
  //   });
  // }
  //   console.log(data);
  // });
  // },
};
</script>
<style lang="less" scoped>
.box {
  .logo {
    position: relative;
    overflow: hidden;
    width: 100%;
    height: auto;
    // height: auto;
    // padding: 10% 0;
    // background: url("../assets/img/hot_music_bg_2x.jpg") center center no-repeat;
    // background-size: contain;
    img {
      width: 100%;
      height: auto;
    }
    .mybox {
      padding-left: 20px;
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      margin: auto;
      width: 100%;
      height: 94px;
      .top {
        background: url("../assets/img/index_icon_2x.png") no-repeat -24px -30px;
        background-size: 166px 97px;
        width: 142px;
        height: 67px;
      }
      .bot {
        color: rgba(255, 255, 255, 0.8);
        font-size: 12px;
        margin-top: 10px;
      }
    }
  }
  .hotList {
    .item {
      display: flex;
      span {
        width: 42px;
        height: 55px;
        text-align: center;
        line-height: 55px;
        color: #999;
        &.beRed {
          color: #df3436;
        }
      }
      .myA {
        flex: 1;
      }
    }
  }
  footer {
    height: 55px;
    line-height: 55px;
    text-align: center;
    color: rgb(153, 153, 153);
    font-size: 14px;
    span {
      color: rgb(199, 195, 195);
    }
  }
}
</style>