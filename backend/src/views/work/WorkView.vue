<script setup lang="ts">
import { Button, toast, Toaster } from '@wade/ui';
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
  <div class="relative w-full h-full">
    <Toaster />
    <RouterLink to="/">
      <Button>to Home</Button>
    </RouterLink>
    <div class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-amber-500 text-white px-2 rounded-md">
      Workbench
    </div>
    <Button class="ml-2" @click="openToast">Toast</Button>
  </div>
</template>