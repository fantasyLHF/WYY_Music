<template>
  <div id="app">
    <header>
      <div class="logo">
        <h1>
          <img src="../assets/img/favicon.png" />&nbsp;&nbsp;&nbsp;Hokv 音乐
        </h1>
      </div>
      <nav>
        <ul>
          <li><router-link to="/">推荐音乐</router-link></li>
          <li><router-link to="/hot">热歌榜</router-link></li>
          <li><router-link to="/search">搜索</router-link></li>
        </ul>
      </nav>
    </header>
    <section>
      <keep-alive><router-view /></keep-alive>
    </section>
  </div>
</template>
<script>
export default {};
</script>
<style lang="less" scoped>
#app {
  width: 100%;
  header {
    background-color: #fff;
    width: 100%;
    height: 124px;
    overflow: hidden;
    position: sticky;
    top: 0;
    z-index: 100;
    .logo {
      height: 84px;
      background-color: rgb(197, 20, 182);
      overflow: hidden;
      h1 {
        height: 24px;
        width: 142px;
        font-size: 20px;
        color: #fff;
        margin-top: 30px;
        margin-left: 12px;
        font-weight: bold;
        font-style: italic;
        img {
          vertical-align: middle;
        }
      }
    }
    nav {
      overflow: hidden;
      top: 84px;
      height: 40px;
      width: 100%;
      ul {
        height: 100%;
        display: flex;
        border-bottom: 1px solid #ccc;
        box-sizing: border-box;
        // overflow: hidden;
        li {
          height: 100%;
          flex: auto;
          text-align: center;
          a {
            position: relative;
            top: 1px;
            font-size: 15px;
            height: 100%;
            display: inline-block;
            line-height: 40px;
            // box-sizing: border-box;
            color: #333;
            &.myactive {
              border-bottom: 2px solid#dd001b;
              color: #dd001b;
            }
          }
        }
      }
    }
  }
  section {
    overflow: hidden;
    background-color: rgb(252, 252, 253);
  }
}
</style>