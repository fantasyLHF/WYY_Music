<template>
  <div class="box">
    <a @click.prevent="goto(v.id)" href="" v-for="v in data" :key="v.id">
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
        {{ v.playCount | formateNum }}</span
      >
      <img :src="v.picUrl" alt="" />
      <p>{{ v.name }}</p>
    </a>
  </div>
</template>
<script>
export default {
  methods: {
    goto(id) {
      this.$router.push("/songform/" + id);
    },
  },
  props: ["data"],
  filters: {
    formateNum(v) {
      if (v >= 10000) {
        return (v / 10000).toFixed(1) + "万";
      }
      return v;
    },
  },
  //   created() {
  //     this.axios("/personalized?limit=6").then((data) => {
  //       this.data = data.data.result;
  //       console.log(this.data);
  //     });
  //   },
};
</script>
<style lang="less" scoped>
.box {
  height: auto;
  overflow: hidden;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  a {
    overflow: hidden;
    margin-bottom: 10px;
    display: block;
    width: 33%;
    position: relative;
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
      width: 100%;
      height: auto;
    }
    p {
      color: rgb(51, 51, 51);
      font-size: 13px;
      font-weight: 400;
      min-height: 30px;
      padding: 6px 2px 0px 6px;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }
  }
}
</style>