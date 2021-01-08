<template>
  <h2><slot></slot></h2>
</template>
<script>
export default {};
</script>
<style lang="less" scoped>
h2 {
  overflow: hidden;
  display: block;
  font-size: 17px;
  border-left: 2px solid #dd001b;
  font-weight: 400;
  color: rgb(51, 51, 51);
  height: 20px;
  line-height: 20px;
  padding-left: 9px;
  margin: 14px 0;
}
</style>