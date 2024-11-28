<!--
 * @Author: June
 * @Description: 
 * @Date: 2024-09-27 22:23:34
 * @LastEditors: June
 * @LastEditTime: 2024-11-28 09:38:40
-->
<template>
  <div
    class="jl-container relative wh-full max-w-100% transition-all transition-ease"
    ref="layoutRef"
    :style="styles"
  >
    <div class="jl-item max-w-100%" v-for="(box, index) in layout" :key="index" :style="box.style">
      <slot :item="box.item" :style="box.style" :index="index"></slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
import justifiedLayout from 'justified-layout'
import type { IBoxItem, IJLItem } from 'vue3-justified-layout'

defineOptions({
  name: 'Vue3JustifiedLayout'
})
const props = defineProps({
  options: {
    type: Object,
    default: () => {}
  }
})
const list = defineModel<IJLItem[]>('list', {
  type: Array,
  default: []
})
const geometry = computed(() => {
  if (unref(list).length === 0) return
  const opts = {
    containerWidth: unref(elementWidth),
    ...props.options
  }
  return justifiedLayout(unref(list), opts)
})
const layout = computed(() => {
  if (!unref(geometry)) return
  return geometry.value?.boxes.map((b: IBoxItem, i: number) => ({
    item: list.value[i] ? list.value[i] : {},
    style: {
      height: `${b.height}px`,
      width: `${b.width}px`,
      top: `${b.top}px`,
      left: `${b.left}px`,
      position: 'absolute'
    }
  }))
}) as any
const styles = computed<any>(() => {
  if (!unref(geometry)) return {}
  return {
    position: 'relative',
    height: `${geometry.value?.containerHeight}px`
  }
})
const elementWidth = ref(0)
const layoutRef = ref()
onMounted(() => {
  elementWidth.value = layoutRef.value?.clientWidth
})
</script>

<style lang="scss">
.jl-container {
  .jl-item {
    & > img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
}
</style>
