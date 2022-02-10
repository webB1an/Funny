<template>
  <el-row class="avatar-container">
    <div class="avatar-logo" v-html="svg"></div>

    <img
      class="setting"
      src="../../assets/setting.png"
      @click="handleShowConfig"
    >

    <el-form label-width="80px">
      <el-form-item label="名称类型">
        <el-input
          v-model="option.seed"
          placeholder="输入内容"
          size="large"
          class="input-with-select"
        >
          <template #prepend>
            <el-select v-model="spriteCollectionId" placeholder="选择类型" style="width: 160px;">
              <el-option
                v-for="item in spriteCollections"
                :key="item.id"
                :label="item.id"
                :value="item.id"
              >
              </el-option>
            </el-select>
          </template>
        </el-input>
      </el-form-item>
      <transition name="fade">
        <div v-show="isShowConfig" class="avatar-config">
          <el-form-item label="背景颜色">
            <el-color-picker v-model="option.backgroundColor" />
          </el-form-item>
          <el-form-item label="圆角">
            <el-slider v-model="option.radius" :max="50"></el-slider>
          </el-form-item>
          <el-form-item label="缩放">
            <el-slider v-model="option.scale" :max="200"></el-slider>
          </el-form-item>
          <el-form-item label="反转">
            <el-switch v-model="option.flip" />
          </el-form-item>
          <el-form-item label="旋转">
            <el-slider v-model="option.rotate" :max="360"></el-slider>
          </el-form-item>
          <el-form-item label="左右移动">
            <el-slider v-model="option.translateX" :max="100" :min="-100"></el-slider>
          </el-form-item>
          <el-form-item label="上下移动">
            <el-slider v-model="option.translateY" :max="100" :min="-100"></el-slider>
          </el-form-item>
        </div>
      </transition>
    </el-form>
  </el-row>
</template>

<script setup lang="ts">
import { ref, reactive, computed } from 'vue'
import { createAvatar } from '@dicebear/avatars'

import spriteCollections from './options'
import SpriteCollection from './types/spriteCollection'

const spriteCollectionId = ref('')
const option = reactive({
  seed: '',
  backgroundColor: '#ffffff',
  radius: 0,
  scale: 100,
  flip: true,
  rotate: 0,
  translateX: 0,
  translateY: 0
})

let spriteCollection = reactive<SpriteCollection>(spriteCollections[0])

const isShowConfig = ref(false)

const handleShowConfig = () => {
  isShowConfig.value = !isShowConfig.value
}

const svg = computed(() => {
  spriteCollections.forEach(item => {
    if (item.id === spriteCollectionId.value) {
      spriteCollection = item
    }
  })

  return createAvatar(spriteCollection.style, {
    ...option
  })
})
</script>

<style lang="scss">
.el-col {
  margin-top: 20px;
}

.el-color-picker__trigger {
  width: 369px;
}

.avatar-container {
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 500px;
  padding: 20px;
  padding-top: 100px;
  background-color: #fff;
  border-radius: 4px;

  .avatar-logo {
    position: absolute;
    top: -50px;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 100px;
    border: 4px solid #f0f0f0;
    border-radius: 4px;
    background-color: #fff;
  }

  .setting {
    position: absolute;
    top: 10px;
    right: 10px;
    width: 40px;
    cursor: pointer;
  }

  .avatar-config {
    // transition: all 2s;
  }
}

</style>
