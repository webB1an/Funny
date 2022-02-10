<template>
  <div class="multiavatar">
    <div v-if="input" class="avatar" v-html="svg" />
    <div v-else class="avatar loading">
      <i class="el-icon-loading"></i>
    </div>
    <div class="input">
      <el-input
        v-model="input"
        class="input-text"
        @focus="focusClear"
        @blur="blurGen"
      />
    </div>
    <div class="tools">
      <div :class="`icon ${rotate ? 'rotate' : ''}`" @click="refresh">
        <img src="../../assets/refresh.png" alt="">
      </div>

      <div class="icon" @click="downloadPng(input)">
        <img src="../../assets/download.png" alt="">
      </div>
    </div>
  </div>
</template>

<script>
import multiavatar from '@multiavatar/multiavatar'
import randomName from 'chinese-random-name'
import sha256 from 'crypto-js/sha256'

import './saveSvgAsPng.js'

export default {
  name: 'MultiAvatar',
  data() {
    return {
      svg: '',
      input: '',
      avatarRandom: false,
      timeClicked: '',
      rotate: false
    }
  },
  watch: {
    input(val) {
      const svgCode = multiavatar(val, false) // 第二个参数数背景
      this.svg = svgCode
    }
  },
  created() {
    const name = randomName.generate()
    this.newIdenticon(name)
  },
  methods: {
    focusClear() {
      this.input = ''
    },
    blurGen() {
      this.refresh()
    },
    refresh() {
      this.newIdenticon()
    },
    download(selector, name) {
      this.htmlToImage(selector, name)
    },
    newIdenticon(name) {
      const _this = this
      this.avatarRandom = true
      // spinStart();
      this.timeClicked = Date.now()

      if (!name) {
        this.rotate = true
      }

      let randomHash = sha256('' + Math.random()).toString().substring(0, 20)
      let randomHashConstructed = ''

      function runIt() {
        setTimeout(() => {
          if (randomHashConstructed.length < 18) {
            const lastChar = randomHash.substring(randomHash.length - 1)
            randomHash = randomHash.slice(0, -1)
            // console.log(randomHash);

            randomHashConstructed += lastChar
            // console.log(randomHashConstructed)

            // getNewIdenticon(randomHashConstructed)
            if (name) {
              _this.input = name
            } else {
              _this.input = randomHashConstructed
            }
            runIt()
          } else {
            const timeFinished = Date.now()
            const timeDiff = timeFinished - _this.timeClicked
            // if spinner is stuck on spinning, try lowering the below number
            if (timeDiff > 100) {
              // spinStop()
              _this.rotate = false
            }
          }
        }, 6)
      }
      runIt()
    },
    downloadPng(id, whiteBg) {
      const wrapper = document.createElement('div')

      const svg = multiavatar(id)
      const fileName = 'Multiavatar-' + id

      wrapper.innerHTML = svg

      const svgContent = wrapper.firstChild

      if (whiteBg) {
        // eslint-disable-next-line
        saveSvgAsPng(svgContent, fileName + '-white.png', {scale: 3.465, backgroundColor: 'white'})
      } else {
        // eslint-disable-next-line
        saveSvgAsPng(svgContent, fileName + '.png', {scale: 3.465})
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.multiavatar {
  padding-top: 80px;
  text-align: center;
}

.avatar {
  width: 260px;
  height: 260px;
  margin: 0 auto;
}

.loading {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 70px;
}

.input {
  width: 240px;
  margin: 30px auto 0;
}

.input-text /deep/ .el-input__inner {
  border: 0;
  color: aquamarine;
  width: 100%;
  text-align: center;
  padding: 6px 0 4px;
  border: 0;
  border-bottom: 1px solid #acacac;
  overflow: hidden;
  text-overflow: ellipsis;
  color: #111;
  background-color: hsla(0, 0%, 100%, 0);
  font-family: SF Mono, Monaco, Andale Mono, Lucida Console, Bitstream Vera Sans Mono, Courier New, Courier, monospace;
  font-size: 18px;
}

.input input:focus {
  outline: none;
}

.tools {
  width: 240px;
  margin: 20px auto 0;
  display: flex;
  justify-content: space-around;
}

.tools .icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  cursor: pointer;
  border-radius: 50%;
  font-size: 26px;
  color: white;
}

.icon img {
  width: 100%;
  height: 100%;
}

.icon:hover {
  opacity: .8;
}

.rotate img {
  animation: rotate linear infinite .2s;
}

@keyframes rotate {
  0% {
    transform: rotate(0);
  }

  100% {
    transform: rotate(360deg);
  }
}
</style>
