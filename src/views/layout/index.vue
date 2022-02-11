<template>
  <header class="header-nav">
    <span class="site-name" @click="handleJumptoMenu('/')">Funny Pro</span>
    <!-- <el-menu
      :default-active="activeIndex"
      router
      class="menu-list"
      mode="horizontal"
      @select="handleSelect"
    >
      <el-menu-item index="/">Processing Center</el-menu-item>
    </el-menu> -->
  </header>
  <router-view />

  <el-drawer v-model="isShowDrawer" direction="ltr">
    <template #title>
      <h4>开始发射</h4>
    </template>
    <template #default>
      <ul class="mune-list">
        <li>
          <el-link
            type="primary"
            @click="handleJumptoMenu('/dicebear-avatar')"
          >
            DICEBEAR-AVATAR
          </el-link>
        </li>
        <li>
          <el-link
            type="primary"
            @click="handleJumptoMenu('/day-night')"
          >
            DAY-NIGHT
          </el-link>
        </li>
      </ul>
    </template>
    <template #footer>
      <div class="to-home">
        <img src="../../assets/home.png" alt="" @click="handleToHome">
      </div>
    </template>
  </el-drawer>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const isShowDrawer = ref(false)

const handleJumptoMenu = (path: string) => {
  isShowDrawer.value = false
  router.push({ path })
}

const handleToHome = () => {
  isShowDrawer.value = false
  router.push('/')
}

const handlecheckKeyDown = (e: KeyboardEvent) => {
  if (e.key === 'f' || e.key === 'F') {
    isShowDrawer.value = !isShowDrawer.value
  }
}

onMounted(() => {
  window.addEventListener('keydown', handlecheckKeyDown)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handlecheckKeyDown)
})
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

.header-nav {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  padding: 0 24px;
  line-height: 60px;
  background-color: #fff;
  border-bottom: 1px solid #eaecef;

  .site-name {
    font-size: 20px;
    font-weight: 600;
    color: #2c3e50;
    cursor: pointer;
  }

  .menu-list {
    float: right;
  }
}

.to-home {
  cursor: pointer;

  img {
    width: 50px;
  }
}
</style>
