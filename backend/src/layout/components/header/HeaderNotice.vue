<script setup lang="ts">
import { Popover, PopoverContent, PopoverTrigger } from '@wade/ui';
import { ref } from 'vue';

const open = ref(false);

const toggle = () => {
  open.value = !open.value;
};
</script>
<template>
  <Popover>
    <PopoverTrigger>
      <slot :toggle="toggle" :open="open" />
    </PopoverTrigger>
    <PopoverContent>
      Some popover content
    </PopoverContent>
  </Popover>
</template>