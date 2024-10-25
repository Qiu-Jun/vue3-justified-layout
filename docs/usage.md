# Usage

这个组件使用起来很简单，它只需要一个元素列表和一些额外的样式。该列表可以是一系列表示框的长宽比的数字，也可以是具有强制宽度和高度属性的对象列表。

```bash
pnpm add vue3-justified-layout
# or
# yarn install vue3-justified-layout
# npm install vue3-justified-layout
```

```html
<template>
  <div style="width: 400px;border: 1px solid #ccc;min-height: 300px;">
    <Vue3JustifiedLayout v-model:list="list" :options="options">
      <template #default="{ item }">
        <img style="border: 1px solid #ccc" :src="item.url" />
      </template>
    </Vue3JustifiedLayout>
  </div>

  <button @click="handleAdd">添加</button>
</template>
<script lang="ts" setup>
  import { ref } from 'vue'
  import Vue3JustifiedLayout from 'vue3-justified-layout'
  import 'vue3-justified-layout/dist/style.css'
  import img1 from '@/assets/1.jpeg'
  import img2 from '@/assets/2.jpeg'
  import img3 from '@/assets/3.jpeg'
  import img4 from '@/assets/4.jpeg'

  const options = {
    targetRowHeight: 120 // 高度
  }

  const test = [
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
```
