<script setup lang="ts">
import { Button, ThemeDark } from '@wade/ui';
</script>
<template>
  <div class=" relative w-full h-full">
    <RouterLink to="/work">
      <Button>去工作台</Button>
    </RouterLink>


    <ThemeDark #="{ toggle, dark }">
      <Button @click="toggle" class="ml-2">{{ dark ? '深色模式' : '浅色模式' }}</Button>
      <Button @click="toggle" class="absolute right-0 top-0">动画根据鼠标位置</Button>
      <Button @click="toggle" class="absolute right-0 bottom-0">动画根据鼠标位置</Button>
      <Button @click="toggle" class="absolute left-0 bottom-0">动画根据鼠标位置</Button>
    </ThemeDark>
  </div>
</template>
