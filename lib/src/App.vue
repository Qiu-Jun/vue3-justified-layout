<!--
 * @Author: June
 * @Description: 
 * @Date: 2024-09-27 22:15:09
 * @LastEditors: June
 * @LastEditTime: 2024-09-27 23:13:07
-->

<template>
  <div style="width: 400px;border: 1px solid #ccc;min-height: 300px;">
    <Vue3JustifiedLayout v-model:list="list" :options="options">
      <template #default="{ item, index }">
        <img style="border: 1px solid #ccc" :src="item.url"  />
      </template>
    </Vue3JustifiedLayout>
  </div>

  <button @click="handleAdd">添加</button>
</template>

<script lang="ts" setup>
import { Vue3JustifiedLayout } from '@/components/JustifiedLayout'

const options = {
  targetRowHeight: 120
}

const test = [
  {
    url: 'https://gd-filems.dancf.com/sisi/%E7%A8%BF%E5%AE%9A%E8%87%AA%E4%BA%A7%E4%BA%BA%E5%83%8F%E7%AC%AC%E4%BA%94%E6%89%B9%EF%BC%88%E5%95%86%E5%8A%A1%E5%9B%A2%E9%98%9F%EF%BC%89470%E5%BC%A0/20210717SWTD6080.jpg?x-oss-process=image%2Fresize%2Cw_272%2Finterlace%2C1%2Fformat%2Cavif&auth_key=1727462014-d2f0867de24b4c5a8a499bb8e0464681-9019689328969263111-063a38aad279add8cbeeb6786b1a505d',
    width: 272,
    height: 181
  },
  {
    url: 'https://gd-filems.dancf.com/saas/xi19e5/0/247149bc-cf77-4a4f-8667-d36ef982ffed40992096.jpg?x-oss-process=image%2Fresize%2Cw_272%2Finterlace%2C1%2Fformat%2Cavif&auth_key=1727462014-d2f0867de24b4c5a8a499bb8e0464681-9019689328969263111-063a38aad279add8cbeeb6786b1a505d',
    width: 272,
    height: 181
  },
  {
    url: 'https://st0.dancf.com/gaoding-material/0/images/48254390/20210826-163419-E7AACB20-0B18-207E-45C2-B20D51710E90.jpg?x-oss-process=image/resize,w_167/interlace,1/format,avif',
    width: 167,
    height: 251
  },
  {
    url: 'https://gd-filems.dancf.com/sisi/%E7%A8%BF%E5%AE%9A%E8%87%AA%E4%BA%A7%E4%BA%BA%E5%83%8F%E7%AC%AC%E4%BA%94%E6%89%B9%EF%BC%88%E5%95%86%E5%8A%A1%E5%9B%A2%E9%98%9F%EF%BC%89470%E5%BC%A0/20210717SWTD6080.jpg?x-oss-process=image%2Fresize%2Cw_377%2Finterlace%2C1%2Fformat%2Cavif&auth_key=1727462014-d2f0867de24b4c5a8a499bb8e0464681-9019689328969263111-063a38aad279add8cbeeb6786b1a505d',
    width: 377,
    height: 251
  }
]
const list = ref([...test])

const handleAdd = () => {
  list.value.push(test[Math.floor(Math.random() * 4)])
  console.log(list.value)
}
</script>
