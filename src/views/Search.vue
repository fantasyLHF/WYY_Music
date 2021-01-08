<template>
  <div class="box">
    <div class="search">
      <div class="input">
        <i></i>
        <input
          type="text"
          placeholder="搜索歌曲、歌手、专辑"
          @input="changeSearchPage"
          v-model="myinput"
          @keydown.enter="kdown"
        />
      </div>
    </div>
    <keep-alive
      ><router-view
        :changedata="changedata"
        :myinput="myinput"
        :mysearch="mysearch"
    /></keep-alive>
  </div>
</template>
<script>
export default {
  data() {
    return {
      myinput: "",
      changedata: [],
      mysearch: ["四季予你", "海阔天空"],
    };
  },
  watch: {
    myinput(v) {
      if (v) {
        this.axios(`/search/suggest?keywords= ${v}&type=mobile`).then(
          (data) => {
            // console.log(data);
            // if (data.data.result.songs != undefined) {
            //   this.changedata = data.data.result.songs;
            // } else {
            //   this.changedata = [];
            // }
            this.changedata = data.data.result.allMatch;
          }
        );
      } else {
        this.changedata = [];
      }
    },
  },
  methods: {
    changeSearchPage() {
      if (window.location.href.endsWith("/search/tips")) {
        return;
      }
      this.$router.push("/search/tips");
    },
    kdown() {
      if (this.myinput) {
        this.mysearch.push(this.myinput);
        this.myinput = "";
        this.$router.push("/search/list");
      }
    },
  },
};
</script>
<style lang="less" scoped>
.box {
  background-color: #fff;
  .search {
    background-color: rgb(252, 252, 253);
    padding: 15px 10px;
    .input {
      height: 30px;
      width: 100%;
      border-radius: 30px;
      background-color: rgb(235, 236, 236);
      display: flex;
      overflow: hidden;
      i {
        width: 30px;
        background: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNiAyNiI+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBmaWxsPSIjYzljOWNhIiBkPSJNMjUuMTgxIDIzLjUzNWwtMS40MTQgMS40MTQtNy4zMTUtNy4zMTRBOS45NjYgOS45NjYgMCAwIDEgMTAgMjBDNC40NzcgMjAgMCAxNS41MjMgMCAxMFM0LjQ3NyAwIDEwIDBzMTAgNC40NzcgMTAgMTBjMCAyLjM0Mi0uODExIDQuNDktMi4xNiA2LjE5NWw3LjM0MSA3LjM0ek0xMCAyYTggOCAwIDEgMCAwIDE2IDggOCAwIDAgMCAwLTE2eiIvPjwvc3ZnPg==")
          no-repeat center;
        background-size: 15px;
      }
      input {
        background-color: rgb(235, 236, 236);
        border: none;
        height: 100%;
        width: 100%;
        flex: auto;
        outline: none;
        color: rgb(51, 51, 51);
        &::-webkit-input-placeholder {
          color: rgb(201, 204, 211);
        }
      }
    }
  }
}
</style>