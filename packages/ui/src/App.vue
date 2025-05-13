<script setup lang="ts">
import { useDark, useToggle } from '@vueuse/core';
import { nextTick } from 'vue';
import { Button, Checkbox, Label, Switch } from './main';

const isDark = useDark();

const toggleDark = useToggle(isDark);

function toggleTheme(event: MouseEvent) {
  const isAppearanceTransition =
    !!document.startViewTransition &&
    !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!isAppearanceTransition || !event) {
    toggleDark();
    return;
  }
  const x = event.clientX;
  const y = event.clientY;
  const endRadius = Math.hypot(
    Math.max(x, innerWidth - x),
    Math.max(y, innerHeight - y),
  );

  const transition = document.startViewTransition(async () => {
    toggleDark();
    await nextTick();
  });
  transition.ready.then(() => {
    const clipPath = [
      `circle(0px at ${x}px ${y}px)`,
      `circle(${endRadius}px at ${x}px ${y}px)`,
    ];
    document.documentElement.animate(
      {
        clipPath: isDark.value ? [...clipPath].reverse() : clipPath,
      },
      {
        duration: 450,
        easing: 'ease-in',
        pseudoElement: isDark.value
          ? '::view-transition-old(root)'
          : '::view-transition-new(root)',
      },
    );
  });
}
</script>
<template>
  <div class="flex justify-center relative min-h-screen">
    <div class="absolute left-auto top-5/12 text-center w-5/12">
      <div class="flex items-center my-2 justify-center">
        <Switch id="switch-mode" />
        <Label for="switch-mode">Switch Mode</Label>
      </div>
      <div class="flex items-center my-2 justify-center">
        <Checkbox id="checkbox-mode" />
        <Label for="checkbox-mode">Checkbox Mode</Label>
      </div>
      <Button @click="toggleTheme">切换{{ isDark ? '浅色' : '深色' }}</Button>
    </div>
    <Button @click="toggleTheme" class="absolute left-5 top-5">动画跟随鼠标</Button>
    <Button @click="toggleTheme" class="absolute right-5 top-5">动画跟随鼠标</Button>
    <Button @click="toggleTheme" class="absolute left-5 bottom-5">动画跟随鼠标</Button>
    <Button @click="toggleTheme" class="absolute right-5 bottom-5">动画跟随鼠标</Button>
  </div>
</template>
