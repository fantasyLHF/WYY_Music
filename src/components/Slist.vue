<template>
  <div class="box">
    <a @click.prevent="trun(v.id)" href="" v-for="v in data" :key="v.id">
      <div class="boxt">
        <div class="left">
          <div class="top" v-html="name(v, myinput)"></div>
          <div class="bottom">
            <i v-if="true"></i>
            <span v-html="artName(v, myinput)"></span>-<span
              v-html="alName(v, myinput)"
            ></span>
          </div>
        </div>
        <div class="right"></div>
      </div>
    </a>
  </div>
</template>
<script>
export default {
  props: ["data", "myinput"],
  methods: {
    trun(v) {
      this.$router.push("/Play/" + v);
    },
    name(v, myinput) {
      if (v.name) {
        if (myinput) {
          let str = v.name.replace(
            myinput,
            "<span style='color:skyblue;'>" + myinput + "</span>"
          );
          return str;
        }
        return v.name;
      } else {
        return;
      }
    },

    artName(v, myinput) {
      if (v.name) {
        if (myinput) {
          let str = v.name.replace(
            myinput,
            "<span style='color:skyblue;'>" + myinput + "</span>"
          );
          return str;
        }
        return v.name;
      } else {
        return;
      }
    },
    alName(v, myinput) {
      if (v.name) {
        if (myinput) {
          let str = v.name.replace(
            myinput,
            "<span style='color:skyblue;'>" + myinput + "</span>"
          );
          return str;
        }
        return v.name;
      } else {
        return;
      }
    },
  },
};
</script>
<style lang="less" scoped>
.box {
  overflow: hidden;
  a {
    display: block;
    border-bottom: 1px solid #eee;
    margin-left: 10px;
    .boxt {
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
        width: 22px;
        padding: 0 10px;
        margin-right: 10px;
        height: 55px;
        background: url("../assets/img/index_icon_2x.png") no-repeat -24px 20px;
        background-size: 166px 97px;
        // width: 22px;
        // height: 22px;
      }
    }
  }
}
</style>