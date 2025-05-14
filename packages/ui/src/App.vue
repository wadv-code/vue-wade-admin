<script setup lang="ts">
import HomeView from './layout/LayoutView.vue';
// import LoginView from './login/LoginView.vue';

// import { Button, Checkbox, Label, Switch } from '.';
// import { Toaster } from './components/ui/sonner';
// import ThemeDark from './components/theme/ThemeDark.vue';
// import { toast } from 'vue-sonner';

// const openToast = () => {
//   toast('Event has been created', {
//     description: 'Sunday, December 03, 2023 at 9:00 AM',
//     action: {
//       label: 'Undo',
//       onClick: () => console.log('Undo'),
//     },
//   })
// }
</script>
<template>
  <!-- <div class="flex justify-center relative min-h-screen">
    <Toaster />
    <div class="absolute left-auto top-5/12 text-center w-5/12">
      <div class="flex items-center my-2 justify-center">
        <Switch id="switch-mode" />
        <Label class="ml-1" for="switch-mode">Switch Mode</Label>
      </div>
      <div class="flex items-center my-2 justify-center">
        <Checkbox id="checkbox-mode" />
        <Label class="ml-1" for="checkbox-mode">Checkbox Mode</Label>
      </div>
      <div class="flex items-center my-2 justify-center">
        <Button @click="openToast">打开消息提醒</Button>
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
  </div> -->
  <HomeView />
  <!-- <LoginView /> -->
</template>
