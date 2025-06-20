<script setup lang="ts">
import { cn } from '@wade/utils';
import { LoaderCircle } from 'lucide-vue-next';
import { Primitive, type PrimitiveProps } from 'reka-ui';
import type { HTMLAttributes } from 'vue';
import { type ButtonVariants, buttonVariants } from '.';

interface Props extends PrimitiveProps {
  variant?: ButtonVariants['variant'];
  size?: ButtonVariants['size'];
  class?: HTMLAttributes['class'];
  loading?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  as: 'button',
});
</script>

<template>
  <Primitive data-slot="button" :as="as" :as-child="asChild" :disabled="loading"
    :class="cn(buttonVariants({ variant, size }), props.class)">
    <LoaderCircle v-if="loading" class="animate-spin" />
    <slot v-else />
  </Primitive>
</template>
