<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core';
import { cn } from '@wade/utils';
import {
  ToggleGroupItem,
  type ToggleGroupItemProps,
  useForwardProps,
} from 'reka-ui';
import { type HTMLAttributes, inject } from 'vue';
import { type ToggleVariants, toggleVariants } from '../toggle';

const props = defineProps<
  ToggleGroupItemProps & {
    class?: HTMLAttributes['class'];
    variant?: ToggleVariants['variant'];
    size?: ToggleVariants['size'];
  }
>();

const context = inject<ToggleVariants>('toggleGroup');

const delegatedProps = reactiveOmit(props, 'class', 'size', 'variant');
const forwardedProps = useForwardProps(delegatedProps);
</script>

<template>
  <ToggleGroupItem v-slot="slotProps" data-slot="toggle-group-item" :data-variant="context?.variant || variant"
    :data-size="context?.size || size" v-bind="forwardedProps" :class="cn(
      toggleVariants({
        variant: context?.variant || variant,
        size: context?.size || size,
      }),
      'min-w-0 flex-1 shrink-0 rounded-none shadow-none first:rounded-l-md last:rounded-r-md focus:z-10 focus-visible:z-10 data-[variant=outline]:border-l-0 data-[variant=outline]:first:border-l',
      props.class)">
    <slot v-bind="slotProps" />
  </ToggleGroupItem>
</template>
