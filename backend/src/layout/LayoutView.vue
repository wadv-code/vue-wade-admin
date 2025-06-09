<script setup lang="ts">
import { SidebarInset, SidebarProvider } from '@wade/ui';
import AppSidebar from './components/AppSidebar.vue';
import HeaderMain from './components/header/HeaderMain.vue';
</script>

<template>
  <SidebarProvider>
    <AppSidebar />
    <SidebarInset>
      <HeaderMain class="bg-background" />
      <div class="flex flex-1 flex-col gap-4 p-2 m-2 bg-background rounded-md">
        <RouterView />
      </div>
    </SidebarInset>
  </SidebarProvider>
</template>
