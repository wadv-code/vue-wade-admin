<script setup lang="ts">
import { Button, ThemeDark } from '@wade/ui';
</script>
<template>
  <div class="relative w-full h-full">
    <RouterLink to="/work">
      <Button>to Workbench</Button>
    </RouterLink>

    <div class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-cyan-500 text-white px-2 rounded-md">
      Home
    </div>

    <ThemeDark #="{ toggle, dark }">
      <Button @click="toggle" class="ml-2">{{ dark ? 'Dark' : 'Light' }}</Button>
      <Button @click="toggle" class="absolute right-0 top-0">Follow the mouse</Button>
      <Button @click="toggle" class="absolute right-0 bottom-0">Follow the mouse</Button>
      <Button @click="toggle" class="absolute left-0 bottom-0">Follow the mouse</Button>
    </ThemeDark>
  </div>
</template>
