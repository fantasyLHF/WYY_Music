<template>
  <div class="box">
    <div
      class="bg"
      :style="`background:url('${urli}') 50% 50% no-repeat; background-size: cover; filter:blur(20px)`"
    ></div>
    <div class="title">
      <img src="../assets/img/favicon.png" alt="" /> Hokv Music
    </div>
    <img class="middle" src="../assets/img/needle-plus.png" alt="" />
    <div class="container">
      <div class="page">
        <img :src="urli" alt="" />
        <div class="circle">
          <img src="../assets/img/circle.png" alt="" />
        </div>
      </div>
    </div>
    <!-- 播放页面{{ id }}<br />
    {{ al.name }} -->

    <audio :src="url" autoplay="autoplay"></audio>
  </div>
</template>
<script>
export default {
  data() {
    return {
      data: [],
      al: [],
      url: "",
      urli: "",
    };
  },
  props: ["id"],
  beforeRouteEnter(to, from, next) {
    next((vm) => {
      vm.axios("/song/detail?ids=" + vm.id)
        .then((data) => {
          vm.data = data.data.songs[0];
          vm.al = vm.data.al;
          vm.urli = vm.al.picUrl;
          return vm.axios("/song/url?id=" + vm.id);
        })
        .then((d) => {
          vm.url = d.data.data[0].url;
          return vm.axios("//lyric?id=" + vm.id);
        })
        .then((songlist) => {
          console.log(songlist);
        });
    });
  },
};
</script>
<style lang="less" scoped>
div {
  audio {
    height: 200px;
    width: 200px;
  }
  position: relative;
  .bg {
    height: 100vh;
    z-index: -1;
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
  }
  .title {
    position: absolute;
    top: 0;
    left: 0;
    padding: 10px;
    font-size: 14px;
    height: 20px;
    line-height: 20px;
    color: #fff;
    font-weight: bold;
    font-style: italic;
    img {
      height: 20px;
      width: auto;
      vertical-align: middle;
    }
  }
  .middle {
    height: auto;
    position: absolute;
    top: 0;
    left: 50%;
    z-index: 2;

    @media screen {
      & {
        width: 84px;
      }
    }
    @media screen and (min-width: 360px) {
      & {
        width: 96px;
      }
    }
    @media screen and (min-width: 414px) {
      & {
        width: 110px;
      }
    }
  }
  .container {
    @media screen {
      & {
        padding-top: 63px;
      }
    }
    @media screen and (min-width: 360px) {
      & {
        padding-top: 70px;
      }
    }
    @media screen and (min-width: 414px) {
      & {
        padding-top: 80px;
      }
    }
  }
  @keyframes trun {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
  .page {
    position: relative;
    margin: 0 auto;
    animation: trun 15s linear infinite;
    img {
      border-radius: 50%;
      overflow: hidden;
      position: absolute;
      width: 60%;
      height: auto;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 2;
    }

    .circle {
      width: 100%;
      height: 100%;
      box-sizing: border-box;
      border: 10px solid #aaa;
      background-color: #000;
      border-radius: 50%;
      overflow: hidden;
      img {
        height: 100%;
        width: auto;
      }
    }
    @media screen {
      & {
        width: 248px;
        height: 248px;
      }
    }
    @media screen and (min-width: 360px) {
      & {
        width: 296px;
        height: 296px;
      }
    }
    @media screen and (min-width: 414px) {
      & {
        width: 342px;
        height: 342px;
      }
    }
  }
}
</style>