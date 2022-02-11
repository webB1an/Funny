<template>
  <router-view />
</template>

<script setup lang="ts">
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family:
    -apple-system,
    BlinkMacSystemFont,
    Segoe UI,
    Roboto,
    Oxygen,
    Ubuntu,
    Cantarell,
    Fira Sans,
    Droid Sans,
    Helvetica Neue,
    sans-serif;
}

body,
html {
  width: 100%;
  height: 100vh;
  background-color: #f0f0f0;
}

#app {
  width: 100%;
  height: 100%;
  padding-top: 60px;
}
</style>
