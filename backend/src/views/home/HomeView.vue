<script setup lang="ts">
import { Button, ThemeDark } from '@wade/ui';
import { MoonStar, Sun } from 'lucide-vue-next';
</script>
<template>
  <div class="relative w-full h-full">
    <div
      class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-cyan-500 text-white px-10 py-5 rounded-md">
      {{ $t('common.confirm') }}
    </div>
    <ThemeDark #="{ toggle, dark }">
      <div class=" flex align-middle">
        <RouterLink to="/work">
          <Button>to Workbench</Button>
        </RouterLink>
        <Button variant="secondary" @click="toggle" class="ml-2">
          <component :is="dark ? MoonStar : Sun" />
        </Button>
      </div>
      <Button @click="toggle" class="absolute right-0 top-0">{{ $t('tips.followMouse') }}</Button>
      <Button @click="toggle" class="absolute right-0 bottom-0">{{ $t('tips.followMouse') }}</Button>
      <Button @click="toggle" class="absolute left-0 bottom-0">{{ $t('tips.followMouse') }}</Button>
    </ThemeDark>
  </div>
</template>
