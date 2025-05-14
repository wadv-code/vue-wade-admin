<script setup lang="ts">
import {
  Button,
  Checkbox,
  Label,
  Switch,
  ThemeDark,
  Toaster,
  toast,
} from '@wade/ui';

const openToast = () => {
  toast('Event has been created', {
    description: 'Sunday, December 03, 2023 at 9:00 AM',
    action: {
      label: 'Undo',
      onClick: () => console.log('Undo'),
    },
  });
};
</script>
<template>
  <div class="flex justify-center relative min-h-screen">
    <Toaster />
    <div class="absolute left-auto top-5/12 text-center w-5/12">
      <h1 class="text-3xl font-bold underline">Hello world!</h1>
      <div class="flex items-center my-2 justify-center">
        <Switch id="switch-mode" />
        <Label class="ml-1" for="switch-mode">Switch Mode</Label>
      </div>
      <div class="flex items-center my-2 justify-center">
        <Checkbox id="checkbox-mode" />
        <Label class="ml-1" for="checkbox-mode">Checkbox Mode</Label>
      </div>
      <div class="flex items-center my-2 justify-center">
        <Button @click="openToast">OPEN TOAST</Button>
      </div>
      <ThemeDark #="{ toggle, isDark }">
        <Button @click="toggle">切换{{ isDark ? '浅色' : '深色' }}</Button>
      </ThemeDark>
    </div>
    <ThemeDark #="{ toggle }">
      <Button @click="toggle" class="absolute left-5 top-5">动画跟随鼠标</Button>
      <Button @click="toggle" class="absolute right-5 top-5">动画跟随鼠标</Button>
      <Button @click="toggle" class="absolute left-5 bottom-5">动画跟随鼠标</Button>
      <Button @click="toggle" class="absolute right-5 bottom-5">动画跟随鼠标</Button>
    </ThemeDark>
  </div>
</template>