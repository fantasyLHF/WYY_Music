<template>
  <div id="particles">
    <img src="../assets/img/favicon.png" alt="" />
    <h1>Hokv Music</h1>
    <input
      class="name"
      type="text"
      v-model="username"
      placeholder="请输入用户名"
    />
    <input
      class="password"
      type="password"
      v-model="password"
      placeholder="请输入密码"
    />
    <button @click="login">登录</button>

    <p>{{ mes }}</p>
  </div>
</template>
<script>
import particlesConfig from "../../public/particles.json";
export default {
  data() {
    return {
      username: "",
      password: "",
      mes: "",
    };
  },
  methods: {
    login() {
      if (this.username != "" && this.password != "") {
        if (this.username == "hokv" && this.password == "gzu") {
          sessionStorage.setItem("username", this.username);
          sessionStorage.setItem("password", this.password);
          this.$router.back();
        } else {
          this.mes = "这是hokv专用播放器,他人请移步！";
        }
      } else {
        this.mes = "请输入用户名和密码";
      }
    },
  },
  mounted() {
    require("particles.js");
    // eslint-disable-next-line no-undef
    particlesJS("particles", particlesConfig);
  },
};
</script>
<style lang="less" scoped>
#particles {
  overflow: hidden;
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgb(197, 20, 182);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 50%;

  img {
    height: 80px;
    width: auto;
    position: absolute;
    top: 120px;
    left: 0;
    right: 0;
    margin: auto;
  }
  h1 {
    font-style: italic;
    font-weight: bold;
    color: #fff;
    line-height: 40px;
    overflow: hidden;
    font-size: 40px;
    height: 40px;
    width: 238px;
    position: absolute;
    text-align: center;
    top: 220px;
    left: 0;
    right: 0;
    margin: auto;
  }
  .name {
    border-radius: 40px;
    position: absolute;
    text-align: center;
    border: none;
    width: 320px;
    height: 40px;
    top: 310px;
    left: 0;
    right: 0;
    margin: auto;
    outline: none;
  }
  .password {
    border-radius: 40px;
    position: absolute;
    text-align: center;
    border: none;
    width: 320px;
    height: 40px;
    top: 400px;
    left: 0;
    right: 0;
    margin: auto;
    outline: none;
  }
  button {
    position: absolute;
    text-align: center;
    border: none;
    width: 260px;
    height: 40px;
    top: 500px;
    left: 0;
    right: 0;
    margin: auto;
    background-color: #e4393c;
    color: #fff;
    font-weight: bold;
    outline: none;
  }
  p {
    position: absolute;
    text-align: center;
    border: none;
    width: 260px;
    top: 560px;
    left: 0;
    right: 0;
    margin: auto;
    color: lightgreen;
  }
}
</style>