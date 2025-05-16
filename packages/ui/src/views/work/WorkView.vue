<script setup lang="ts">
import { Button, toast, Toaster } from '../../components';
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
  <div>
    <Toaster />
    <RouterLink to="/">
      <Button>去首页</Button>
    </RouterLink>
    <Button class="ml-2" @click="openToast">提示消息</Button>
  </div>
</template>