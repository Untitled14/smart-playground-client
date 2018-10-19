<template>
  <transition name="slide" mode="out-in">
    <div class="pop-up" v-if="data.type">
      <div v-if="canClose" @click="onClose">
        
      </div>
    </div>
  </transition>
</template>

<script>
import { popUpData, popUpTypes } from '@src/components/popup'

export default {
  data() {
    return {
      data: popUpData,
      resources: {
        close: null
      }
    }
  },
  computed: {
    canClose() {
      return true
    }
  },
  methods: {
    onClose() {
      const { data } = this
      data.type = null
      data.mode = null
    }
  }
}
</script>

<style>
.slide-enter-active,
.slide-leave-active {
  transition-duration: .3s;
  transition-property: opacity, transform;
  transition-timing-function: ease;
}

.slide-enter {
  transform: translateX(100%);
  opacity: 0;
}

.slide-leave-active {
  transform: translateX(-100%);
  opacity: 0;
}

.pop-up {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 10;
}
</style>
