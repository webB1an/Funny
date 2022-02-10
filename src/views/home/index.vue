<template>
  <div class="home-container">
    <img src="../../assets/cool.gif" />
    <h1>按 F 进入载具</h1>
  </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss">
.el-drawer {
  width: 20% !important;
}

.home-container {
  width: 100%;
  height: calc(100vh - 60px);
  background-color: #fff;
  text-align: center;

  img {
    width: 350px;
  }
}

.mune-list {
  padding-left: 24px;

  li:not(:last-child) {
    margin-bottom: 10px;
  }
}

h1 {
  color: #666;
  font-size: 30px;
}
</style>
