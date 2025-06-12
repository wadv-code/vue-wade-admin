<template>
  <div class="relative w-full h-full flex flex-col">
    <div class="p-2 border-b">
      <slot name="header" />
    </div>
    <div class="p-2 grow">
      <slot />
    </div>
  </div>
</template>