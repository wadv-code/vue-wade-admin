<script setup lang="ts">
import { cn } from '@wade/utils';
import type { HTMLAttributes } from 'vue';

const props = defineProps<{
  class?: HTMLAttributes['class'];
}>();
</script>

<template>
  <div data-slot="card-footer" :class="cn('flex items-center px-4 py-3 [.border-t]:pt-6', props.class)">
    <slot />
  </div>
</template>
