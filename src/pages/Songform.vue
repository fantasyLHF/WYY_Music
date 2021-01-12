<template>
  <div class="box">
    <header>
      <div
        class="bg"
        :style="`background:url('${data.coverImgUrl}') 50% 50% no-repeat; background-size: cover; filter:blur(20px)`"
      ></div>
      <div class="logo">
        <div class="im">
          <i>歌单</i>
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 20">
              <path
                fill-rule="evenodd"
                fill="#040000"
                d="M22 16.777c0 1.233-1.121 2.233-2.506 2.233-1.384 0-2.506-1-2.506-2.233v-2.553c0-1.234 1.122-2.233 2.506-2.233.174 0 .343.017.506.046v-1.37h-.033c.017-.22.033-.441.033-.666a8 8 0 0 0-16 0c0 .225.016.446.034.666H4v1.37c.163-.029.333-.046.505-.046 1.384 0 2.506.999 2.506 2.233v2.553c0 1.233-1.122 2.233-2.506 2.233S2 18.011 2 16.777v-2.553c0-.258.059-.501.148-.73A.982.982 0 0 1 2 13.001v-2.667c0-.023.012-.043.013-.067-.004-.088-.013-.176-.013-.266 0-5.523 4.477-10 10-10s10 4.477 10 10c0 .09-.009.178-.014.266.002.024.014.044.014.067v2a.988.988 0 0 1-.36.753c.224.334.36.72.36 1.138v2.552"
                opacity=".15"
              />
              <path
                fill-rule="evenodd"
                fill="#fff"
                d="M20 16.777c0 1.233-1.121 2.233-2.506 2.233-1.384 0-2.506-1-2.506-2.233v-2.553c0-1.234 1.122-2.233 2.506-2.233.174 0 .343.017.506.046v-1.37h-.033c.017-.22.033-.441.033-.666a8 8 0 0 0-16 0c0 .225.016.446.034.666H2v1.37c.163-.029.333-.046.505-.046 1.384 0 2.506.999 2.506 2.233v2.553c0 1.233-1.122 2.233-2.506 2.233S0 18.011 0 16.777v-2.553c0-.258.059-.501.148-.73A.982.982 0 0 1 0 13.001v-2.667c0-.023.012-.043.013-.067-.004-.088-.013-.176-.013-.266 0-5.523 4.477-10 10-10s10 4.477 10 10c0 .09-.009.178-.014.266.002.024.014.044.014.067v2a.988.988 0 0 1-.36.753c.224.334.36.72.36 1.138v2.552"
              />
            </svg>
            {{ data.playCount | formateNum }}</span
          >
          <img :src="data.coverImgUrl" alt="" />
        </div>
        <div class="other">
          <h2>{{ data.name }}</h2>
          <div class="tx">
            <img :src="creator.avatarUrl" alt="" />
            &nbsp;&nbsp;&nbsp;
            <span>{{ creator.nickname }}...</span>
          </div>
        </div>
      </div>
    </header>
    <h3>歌曲列表{{ allid.length }}</h3>
    <Loading v-if="listdata.length <= 0" />
    <section>
      <ul>
        <li
          @click="trun(v.id)"
          class="list"
          v-for="(v, i) in listdata"
          :key="v.id"
        >
          <div class="til">{{ i + 1 }}</div>
          <div class="cot">
            <div class="left">
              <div class="top">{{ v.name }}</div>
              <div class="bottom">
                <i v-if="false"></i>
                {{ v.ar.name }}-{{ v.al.name }}
              </div>
            </div>
            <div class="right"></div>
          </div>
        </li>
      </ul>
      <div
        @click.stop="showa"
        class="bg"
        v-if="listdata.length > 0 && listdata.length < 11"
      >
        <p>查看全部歌曲...</p>
      </div>
    </section>
    <h3>最新评论{{ len }}</h3>
    <footer>
      <div
        @click.stop="showall"
        class="bg"
        v-if="comments.length >= 0 && comments.length < 11"
      >
        <p>查看全部评论...</p>
      </div>
      <ul>
        <li v-for="(v, i) in comments" :key="i">
          <div class="toux"><img :src="avatarUrl" alt="" /></div>
          <div class="txt">
            <div class="t">
              <div class="l">
                <div class="lt">{{ v | nickname }}</div>
                <div class="lb">{{ v.time | deltime }}</div>
              </div>
              <div class="r">
                {{ v.likedCount | delcount
                }}<img src="../assets/img/good.png" alt="" />
              </div>
            </div>
            <div class="b">{{ v.content }}</div>
          </div>
        </li>
      </ul>
    </footer>
  </div>
</template>
<script>
import Loading from "../components/Loading";
export default {
  computed: {
    avatarUrl() {
      return function (data) {
        if (data) {
          return data.user.avatarUrl;
        } else {
          return "";
        }
      };
    },
  },
  filters: {
    nickname(v) {
      return v.nickname;
    },
    formateNum(v) {
      if (v >= 10000) {
        return (v / 10000).toFixed(1) + "万";
      }
      return v;
    },
    delcount(v) {
      if (v > 0) {
        return v;
      }
      return "";
    },
    deltime(v) {
      let time = new Date().getTime() - v;
      let h = parseInt(time / 1000 / 60 / 60);
      let m = parseInt((time / 1000 / 60) % 60);
      let s = parseInt((time / 1000) % 60);
      if (h > 0) {
        return h + "小时前";
      } else if (m > 0) {
        return m + "分钟前";
      } else {
        return s + "秒前";
      }
    },
  },
  methods: {
    showa() {
      for (let i = 10; i < this.allid.length; i++) {
        this.axios("/song/detail?ids=" + this.allid[i].id).then((data) => {
          this.listdata.push(data.data.songs[0]);
        });
      }
    },
    trun(i) {
      this.$router.push("/play/" + i).catch(() => {});
    },
    showall() {
      this.axios("/comment/playlist?id=" + this.id).then((d) => {
        for (let i = 10; i < d.data.comments.length; i++) {
          this.comments.push(d.data.comments[i]);
        }
      });
    },
  },
  components: {
    Loading,
  },
  data() {
    return {
      allid: [],
      data: [],
      creator: {},
      listdata: [],
      comments: [],
      len: 0,
    };
  },
  props: ["id"],
  beforeRouteEnter(to, from, next) {
    next((vm) => {
      vm.axios("/playlist/detail?id=" + vm.id)
        .then((data) => {
          vm.data = data.data.playlist;
          vm.creator = vm.data.creator;
          let arr = [];
          let count = 0;
          vm.allid = vm.data.trackIds;
          for (let i = 0; i < 10; i++) {
            vm.axios("/song/detail?ids=" + vm.data.trackIds[i].id).then((d) => {
              count++;
              arr[i] = d.data.songs[0];
              if (count == 10) {
                vm.listdata = arr;
              }
            });
          }
          return vm.axios("/comment/playlist?id=" + vm.id);
        })
        .then((d) => {
          vm.len = d.data.comments.length;
          for (let i = 0; i < 10; i++) {
            vm.comments.push(d.data.comments[i]);
          }
        });
    });
  },
};
</script>
<style lang="less" scoped>
.box {
  @media screen and(max-width: 350px) {
    header {
      height: 156px;
    }
  }
  @media screen and(max-width: 260px) {
    header {
      height: 144px;
    }
  }
  @media screen and(min-width: 350px) {
    header {
      height: 175px;
    }
  }
  header {
    position: relative;
    .bg {
      position: absolute;
      height: 100%;
      width: 100%;
      top: 0;
      left: 0;
    }
    .logo {
      height: 70%;
      padding: 0 10px;
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      margin: auto;
      display: flex;
      .im {
        position: relative;
        width: 114px;
        i {
          background: rgba(217, 48, 48, 0.8);
          border-top-right-radius: 17px;
          border-bottom-right-radius: 17px;
          font-style: normal;
          font-size: 12px;
          color: #fff;
          height: 17px;
          padding: 0 8px;
          text-align: center;
          line-height: 17px;
          position: absolute;
          top: 10px;
        }
        span {
          svg {
            height: 12px;
          }
          position: absolute;
          top: 2px;
          right: 2px;
          color: #fff;
          font-size: 12px;
        }
        img {
          height: 100%;
          width: auto;
        }
      }
      .other {
        flex: auto;
        margin-left: 10px;
        h2 {
          color: #fefefe;
          font-size: 17px;
          height: 44px;
        }
        .tx {
          img {
            height: 30px;
            width: auto;
            border-radius: 50%;
            vertical-align: middle;
          }
          span {
            color: hsla(0, 0%, 100%, 0.7);
            font-size: 14px;
          }
        }
      }
    }
  }
  h3 {
    padding: 0 10px;
    height: 23px;
    color: #666;
    font-size: 12px;
    line-height: 23px;
    background: #eeeff0;
  }
  section {
    position: relative;
    ul {
      .list {
        overflow: hidden;
        height: 55px;
        display: flex;

        .til {
          width: 40px;
          margin-right: 10px;
          line-height: 55px;
          text-align: center;
          color: #999;
        }
        .cot {
          flex: auto;
          display: flex;
          overflow: hidden;
          .left {
            overflow: hidden;
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
              overflow: hidden;
              height: 12px;
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
            overflow: hidden;
            width: 22px;
            padding: 0 10px;
            height: 55px;
            margin-right: 10px;
            background: url("../assets/img/index_icon_2x.png") no-repeat -24px 20px;
            background-size: 166px 97px;
            // width: 22px;
            // height: 22px;
          }
        }
      }
    }
    .bg {
      position: absolute;
      bottom: 0;
      width: 100%;
      height: 104px;
      background-image: linear-gradient(
        180deg,
        hsla(0, 0%, 97.3%, 0.7),
        #f8f8f8 60%
      );
      p {
        color: #999;
        font-size: 14px;
        text-align: center;
        margin-top: 60px;
      }
    }
  }
  footer {
    position: relative;
    ul {
      li {
        overflow: hidden;
        height: 77px;
        padding-top: 10px;
        display: flex;
        .toux {
          padding: 0 10px;
          img {
            width: 30px;
            height: auto;
            border-radius: 50%;
            overflow: hidden;
          }
        }
        .txt {
          flex: auto;
          padding-right: 10px;
          .t {
            display: flex;
            height: 38px;
            .r {
              font-size: 12px;
              padding: 10px;
              height: 23px;
              line-height: 30px;
              color: #999;
              img {
                vertical-align: middle;
                width: 23px;
                height: auto;
              }
            }
            .l {
              flex: auto;
              .lt {
                color: #333;
                font-size: 14px;
              }
              .lb {
                color: #999;
                font-size: 12px;
              }
            }
          }
          .b {
            height: 15px;
            line-height: 15px;
            color: #333;
            width: 200px;
            font-size: 15px;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
          }
        }
      }
    }
    .bg {
      position: absolute;
      bottom: 0;
      width: 100%;
      height: 74px;
      background-image: linear-gradient(
        180deg,
        hsla(0, 0%, 97.3%, 0.7),
        #f8f8f8 60%
      );
      p {
        color: #999;
        font-size: 14px;
        text-align: center;
        margin-top: 30px;
      }
    }
  }
}
</style>