<script lang="ts" setup>
import { reactiveOmit } from '@vueuse/core';
import { cn } from '@wade/utils';
import {
  CalendarHeading,
  type CalendarHeadingProps,
  useForwardProps,
} from 'reka-ui';
import type { HTMLAttributes } from 'vue';

const props = defineProps<
  CalendarHeadingProps & { class?: HTMLAttributes['class'] }
>();

defineSlots<{
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  default: (props: { headingValue: string }) => any;
}>();

const delegatedProps = reactiveOmit(props, 'class');

const forwardedProps = useForwardProps(delegatedProps);
</script>

<template>
  <CalendarHeading v-slot="{ headingValue }" data-slot="calendar-heading"
    :class="cn('text-sm font-medium', props.class)" v-bind="forwardedProps">
    <slot :heading-value>
      {{ headingValue }}
    </slot>
  </CalendarHeading>
</template>
