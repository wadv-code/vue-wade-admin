<script lang="ts">
export const description = 'A sidebar that collapses to icons.';
export const iframeHeight = '800px';
export const containerClass = 'w-full h-full';
</script>

<script setup lang="ts">
import { SidebarInset, SidebarProvider } from '@wade/ui';
import AppSidebar from './components/AppSidebar.vue';
import HeaderMain from './components/header/HeaderMain.vue';
</script>

<template>
  <SidebarProvider>
    <AppSidebar />
    <SidebarInset>
      <HeaderMain />
      <div class="flex flex-1 flex-col gap-4 p-2">
        <RouterView />
        <!-- <div class="grid auto-rows-min gap-4 md:grid-cols-3">
          <div class="aspect-video rounded-xl bg-muted/50" />
          <div class="aspect-video rounded-xl bg-muted/50" />
          <div class="aspect-video rounded-xl bg-muted/50" />
        </div>
        <div class="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min" /> -->
      </div>
    </SidebarInset>
  </SidebarProvider>
</template>
