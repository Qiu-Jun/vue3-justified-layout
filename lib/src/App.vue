<!--
 * @Author: June
 * @Description: 
 * @Date: 2024-09-27 22:15:09
 * @LastEditors: June
 * @LastEditTime: 2024-11-28 09:36:56
-->

<template>
  <div style="width: 400px; border: 1px solid #ccc; min-height: 300px">
    <Vue3JustifiedLayout v-model:list="list" :options="options">
      <template #default="{ item }">
        <img style="border: 1px solid #ccc" :src="item.url" />
      </template>
    </Vue3JustifiedLayout>
  </div>

  <button @click="handleAdd">添加</button>
</template>

<script lang="ts" setup>
import { Vue3JustifiedLayout } from '@/components/JustifiedLayout'
import type { IJLItem } from 'vue3-justified-layout'

import img1 from '@/assets/1.jpeg'
import img2 from '@/assets/2.jpeg'
import img3 from '@/assets/3.jpeg'
import img4 from '@/assets/4.jpeg'

interface IListItem extends IJLItem {
  id?: string
}

const options = {
  targetRowHeight: 120
}

const test: IListItem[] = [
  {
    url: img1,
    width: 800,
    height: 572
  },
  {
    url: img2,
    width: 6000,
    height: 4000
  },
  {
    url: img3,
    width: 800,
    height: 533
  },
  {
    url: img4,
    width: 1000,
    height: 1418
  }
]
const list = ref([...test])

const handleAdd = () => {
  list.value.push(test[Math.floor(Math.random() * 4)])
}
</script>
