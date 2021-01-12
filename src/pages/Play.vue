<template>
  <div class="box" @click="toggle">
    <div
      class="bg"
      :style="`background:url('${urli}') 50% 50% no-repeat; background-size: cover; filter:blur(20px)`"
    ></div>
    <div class="title">
      <img src="../assets/img/favicon.png" alt="" /> Hokv Music
    </div>
    <div class="tips">tips : dblclick</div>
    <img class="middle" src="../assets/img/needle-plus.png" alt="" />
    <div class="container">
      <div class="page" :class="trun">
        <img :src="urli" alt="" />
        <div class="circle">
          <img src="../assets/img/circle.png" alt="" />
        </div>
      </div>
    </div>
    <div class="t">
      <span>{{ data.name }} </span> - <span> {{ data | name }}</span>
    </div>
    <div class="content">
      <ul ref="pos">
        <li
          @click="change(v.time)"
          v-for="(v, i) in lrcArr"
          :key="i"
          :class="v.class"
        >
          {{ v.lyric }}
        </li>
      </ul>
    </div>
    <div class="slider">
      <div class="time">{{ ct | ctt }}/{{ dt | dtt }}</div>
      <div class="cover" @click.stop="move"></div>
      <div class="ball" ref="ball"></div>
    </div>

    <!-- 播放页面{{ id }}<br />
    {{ al.name }} -->
    <audio
      @timeupdate="timeupdate"
      ref="audio"
      :src="url"
      autoplay="autoplay"
    ></audio>
  </div>
</template>
<script>
export default {
  computed: {},
  filters: {
    ctt(v) {
      let m = parseInt(v / 60);
      let s = parseInt(v % 60);
      if (m < 10) {
        m = "0" + m;
      }
      if (s < 10) {
        s = "0" + s;
      }
      return m + ":" + s;
    },
    dtt(v) {
      if (!v) {
        v = 0;
      }
      let m = parseInt(v / 60);
      let s = parseInt(v % 60);
      if (m < 10) {
        m = "0" + m;
      }
      if (s < 10) {
        s = "0" + s;
      }
      return m + ":" + s;
    },
    name(v) {
      if (v.name) {
        return v.ar[0].name;
      } else {
        return v;
      }
    },
  },
  methods: {
    move(e) {
      let audio = this.$refs.audio;
      this.$refs.audio.currentTime =
        (e.offsetX / parseInt(getComputedStyle(e.target).width)) *
        audio.duration;
      this.ct = this.$refs.audio.currentTime;
    },
    change(time) {
      let audio = this.$refs.audio;
      audio.currentTime = time;
    },
    timeupdate(event) {
      let audio = event.target;
      let currentTime = audio.currentTime; //当前播放的时间
      let durationTime = audio.duration; //总时长
      this.dt = durationTime;
      this.ct = currentTime;
      this.$refs.ball.style.left =
        (parseInt(getComputedStyle(this.$refs.ball.parentNode).width) *
          currentTime) /
          durationTime -
        20 +
        "px";

      for (var i in this.lrcArr) {
        let lrcTime = this.lrcArr[i].time; //歌词的时间
        this.lrcArr[i].class = "";
        if (currentTime < lrcTime) {
          this.lrcArr[i - 1].class = "active";
          this.$refs.pos.style.top = -24 * (i - 4) + "px";
          break;
        }
      }
      if (currentTime == durationTime) {
        this.$refs.ball.style.left = -20 + "px";
        this.$refs.pos.style.top = 0;
        this.trun = "";
        this.flag = false;
      }
    },
    toggle() {
      let time = new Date().getTime();
      if (time - this.time > 280) {
        this.time = time;
        return;
      }
      this.time = time;
      let audio = this.$refs.audio;
      if (this.flag) {
        this.flag = false;
        this.trun = "";
        audio.pause();
      } else {
        this.flag = true;
        this.trun = "trun";
        audio.play();
      }
    },
  },
  data() {
    return {
      trun: "trun",
      flag: true,
      data: [],
      al: [],
      url: "",
      urli: "",
      time: 0,
      lrcArr: [],
      dt: 0,
      ct: 0,
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
          vm.url = ` https://music.163.com/song/media/outer/url?id=${vm.id}.mp3`;
          return fetch("/lyric?id=" + vm.id);
        })
        .then((res) => {
          return res.json();
        })
        .then((songlist) => {
          let lrc = songlist.lrc.lyric;
          let lrcArr = lrc.split(/\n/);
          let reg = /\[(\d+):(\d+\.\d+)\](.+)/;
          let arr = lrcArr.map((lc) => {
            reg.test(lc);
            return {
              time: parseInt(RegExp.$1 * 60) + parseFloat(RegExp.$2),
              lyric: RegExp.$3,
              class: "",
            };
          });
          vm.lrcArr = arr;
        })
        .catch((e) => {
          console.log("请求错误", e);
        });
    });
  },
};
</script>
<style lang="less" scoped>
div {
  .tips {
    position: absolute;
    width: 85px;
    height: 12px;
    color: lightgreen;
    font-size: 12px;
    line-height: 12px;
    font-weight: bold;
    right: 0;
    top: 5px;
  }
  height: 100vh;
  overflow: hidden;
  audio {
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
    height: 40px;
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
    height: auto;
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
  .trun {
    animation: trun 15s linear infinite;
  }
  .page {
    position: relative;
    margin: 0 auto;

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
  .t {
    text-align: center;
    color: #fff;
    margin-top: 30px;
    padding-bottom: 8px;
    height: auto;
    span:first-child {
      font-size: 18px;
    }
    span:last-child {
      font-size: 16px;
      color: rgba(255, 255, 255, 0.6);
    }
  }
  .content {
    // background-color: #fff;
    height: 30vh;
    width: 100%;
    position: relative;
    ul {
      transition: all 0.5s linear;
      width: 100%;
      height: auto;
      position: absolute;
      .active {
        color: #fff;
        font-size: 20px;
        font-weight: bold;
      }
      li {
        overflow: hidden;
        font-size: 16px;
        color: rgba(255, 255, 255, 0.6);
        height: 24px;
        line-height: 24px;
        text-align: center;
      }
    }
  }
  .slider {
    width: 80%;
    margin: 0 auto;
    overflow: visible;
    border: 1px solid skyblue;
    position: fixed;
    bottom: 40px;
    left: 50%;
    height: 0;
    transform: translateX(-50%);
    .cover {
      position: absolute;
      height: 20px;
      width: 100%;
      left: 0px;
      top: -10px;
      z-index: 3;
      // background-color: #fff;
    }
    .ball {
      height: 20px;
      width: 20px;
      background-color: lightgreen;
      position: absolute;
      top: -10px;
      left: -10px;
      border-radius: 50%;
      z-index: 4;
      transition: all 0.1 linear;
    }
    .time {
      z-index: 5;
      line-height: 12px;
      font-size: 12px;
      height: 12px;
      color: #fff;
      position: absolute;
      top: -12px;
      right: 0;
    }
  }
}
</style>