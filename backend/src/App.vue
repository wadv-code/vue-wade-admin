<script setup lang="ts">
import { onMounted } from 'vue';

onMounted(() => {
  console.log('onMounted');
});
</script>
<template>
  <RouterView />
</template>
