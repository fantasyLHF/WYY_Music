<template>
  <div class="box">
    <div class="left">
      <!-- {{ data }} -->
      <div class="top">{{ data | name }}</div>
      <div class="bottom">
        <i v-if="true"></i>
        <!-- {{ data.song.album.artists[0].name }}-{{ data.song.album.name }} -->
        {{ data | authorname }}-{{ data | lname }}
      </div>
    </div>
    <div class="right"></div>
  </div>
</template>
<script>
export default {
  props: ["data"],
  data() {
    return {};
  },
  computed: {
    // flag() {
    //   if (this.data.song.privilege.maxbr > 320000) {
    //     return true;
    //   }
    //   return false;
    // },
  },
  filters: {
    name(v) {
      if (v) {
        return v.name;
      } else {
        return null;
      }
    },
    lname(v) {
      if (v) {
        return v.al.name;
      } else {
        return null;
      }
    },
    authorname(v) {
      if (v) {
        return v.ar[0].name;
      } else {
        return null;
      }
    },
  },
  mounted() {
    console.log(this.data);
  },
};
</script>
<style lang="less" scoped>
.box {
  height: 55px;
  display: flex;
  .left {
    flex: auto;
    height: 55px;
    .top {
      height: 17px;
      overflow: hidden;
      line-height: 17px;
      font-size: 17px;
      color: rgb(51, 51, 51);
      margin: 7px 0 10px 0;
    }
    .bottom {
      height: 12px;
      overflow: hidden;
      line-height: 12px;
      font-size: 12px;
      color: rgb(136, 136, 136);
      i {
        display: inline-block;
        background: url("../assets/img/index_icon_2x.png") no-repeat 0 0;
        background-size: 166px 97px;
        width: 12px;
        height: 8px;
      }
    }
  }
  .right {
    width: 42px;
    height: 55px;
    background: url("../assets/img/index_icon_2x.png") no-repeat -24px 20px;
    background-size: 166px 97px;
    // width: 22px;
    // height: 22px;
  }
}
</style>