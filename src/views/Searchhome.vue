<template>
  <div class="box">
    <section class="hotSearch">
      <h3>热门搜索</h3>
      <ul>
        <li v-for="(v, i) in data" :key="i" @click="add(v.first)">
          {{ v.first }}
        </li>
      </ul>
    </section>
    <Loading v-if="this.data.length <= 0" />
    <section class="searched">
      <ul>
        <li @click.stop="trun(v)" v-for="(v, i) in mysearch" :key="i">
          <i></i>
          <div>
            <div>{{ v }}</div>
            <i @click.stop="deleteS(i)"></i>
          </div>
        </li>
      </ul>
    </section>
  </div>
</template>
<script>
import Loading from "../components/Loading";
export default {
  components: { Loading },
  comonents: {
    Loading,
  },
  data() {
    return {
      data: [],
    };
  },
  props: ["mysearch"],
  created() {
    this.axios("/search/hot")
      .then((data) => {
        this.data = data.data.result.hots;
      })
      .catch((e) => {
        console.log("请求错误", e);
      });
  },
  methods: {
    deleteS(i) {
      this.mysearch.splice(i, 1);
    },
    add(v) {
      this.mysearch.push(v);
      this.$router.push("/search/list/" + v);
    },
    trun(v) {
      this.$router.push("/search/list/" + v);
    },
  },
};
</script>
<style lang="less" scoped>
.box {
  background-color: #fff;
  .hotSearch {
    border-top: 1px solid rgb(242, 243, 244);
    padding: 15px 10px 0;
    h3 {
      font-size: 12px;
      font-weight: 400;
      color: rgb(102, 102, 102);
      line-height: 12px;
    }
    ul {
      margin-top: 10px;
      li {
        color: #333;
        font-weight: 400;
        display: inline-block;
        font-size: 14px;
        height: 32px;
        line-height: 32px;
        margin: 0 8px 8px 0;
        padding: 0 14px;
        border: 1px solid #d3d4da;
        border-radius: 32px;
      }
    }
  }
  .searched {
    ul {
      li {
        height: 45px;
        display: flex;
        border-bottom: 1px solid rgb(242, 243, 244);
        font-size: 14px;
        vertical-align: middle;
        line-height: 45px;
        i {
          width: 15px;
          margin: 0 10px;
          background: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMCAzMCI+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBmaWxsPSIjYzljYWNhIiBkPSJNMTUgMzBDNi43MTYgMzAgMCAyMy4yODQgMCAxNVM2LjcxNiAwIDE1IDBzMTUgNi43MTYgMTUgMTUtNi43MTYgMTUtMTUgMTVtMC0yOEM3LjgyIDIgMiA3LjgyIDIgMTVzNS44MiAxMyAxMyAxMyAxMy01LjgyIDEzLTEzUzIyLjE4IDIgMTUgMm03IDE2aC04YTEgMSAwIDAgMS0xLTFWN2ExIDEgMCAxIDEgMiAwdjloN2ExIDEgMCAxIDEgMCAyIi8+PC9zdmc+")
            no-repeat center;
        }
        div {
          color: #333;
          flex: auto;
          display: flex;
          div {
            flex: auto;
          }
          i {
            width: 12px;
            margin: 0 10px;
            background: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBmaWxsPSIjOTk5ODk5IiBkPSJNMTMuMzc5IDEybDEwLjMzOCAxMC4zMzdhLjk3NS45NzUgMCAxIDEtMS4zNzggMS4zNzlMMTIuMDAxIDEzLjM3OCAxLjY2MyAyMy43MTZhLjk3NC45NzQgMCAxIDEtMS4zNzgtMS4zNzlMMTAuNjIzIDEyIC4yODUgMS42NjJBLjk3NC45NzQgMCAxIDEgMS42NjMuMjg0bDEwLjMzOCAxMC4zMzhMMjIuMzM5LjI4NGEuOTc0Ljk3NCAwIDEgMSAxLjM3OCAxLjM3OEwxMy4zNzkgMTIiLz48L3N2Zz4=")
              no-repeat center;
          }
        }
      }
    }
  }
}
</style>