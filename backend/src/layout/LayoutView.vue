<script setup lang="ts">
import { computed, ref, type RendererElement } from 'vue';
import { SidebarInset, SidebarProvider } from '@wade/ui';
import AppSidebar from './components/AppSidebar.vue';
import HeaderMain from './components/header/HeaderMain.vue';
import type { RouteRecordName } from 'vue-router';

// 定义多个动画配置
const animations = {
  'page-transition': {
    enterActiveClass: 'transition-all duration-300 ease-in-out',
    enterFromClass: 'opacity-0 translate-x-4',
    enterToClass: 'opacity-100 translate-x-0',
    leaveActiveClass: 'transition-all duration-300 ease-in-out',
    leaveFromClass: 'opacity-100 translate-x-0',
    leaveToClass: 'opacity-0 -translate-x-4',
  },
  'fade-transition': {
    enterActiveClass: 'transition-opacity duration-300 ease-in-out',
    enterFromClass: 'opacity-0',
    enterToClass: 'opacity-100',
    leaveActiveClass: 'transition-opacity duration-300 ease-in-out',
    leaveFromClass: 'opacity-100',
    leaveToClass: 'opacity-0',
  },
  // 可按需添加更多动画配置
};

// 定义当前动画状态
const currentAnimation = ref<keyof typeof animations>('fade-transition');
const getKeepAliveNames = computed(() => {
  return ['home', 'work', 'users'];
});


// 计算属性获取当前动画类
const getEnterActiveClass = computed(() => animations[currentAnimation.value].enterActiveClass);
const getEnterFromClass = computed(() => animations[currentAnimation.value].enterFromClass);
const getEnterToClass = computed(() => animations[currentAnimation.value].enterToClass);
const getLeaveActiveClass = computed(() => animations[currentAnimation.value].leaveActiveClass);
const getLeaveFromClass = computed(() => animations[currentAnimation.value].leaveFromClass);
const getLeaveToClass = computed(() => animations[currentAnimation.value].leaveToClass);


/**
 * 解决动态路由name不一致，不能缓存的问题（懒得每个页面写defineOptions）
 * @param name
 * @param component
 */
const cacheMap = new Map()
const wrap = (name: RouteRecordName, component: RendererElement) => {
  let cache: {
    name: RouteRecordName,
    render: () => RendererElement
  };
  const cacheName = name
  if (cacheMap.has(cacheName)) {
    cache = cacheMap.get(cacheName)
  } else {
    cache = {
      name: cacheName,
      render() {
        return component
      }
    }
    cacheMap.set(cacheName, cache)
  }
  return cache
}
</script>

<template>
  <SidebarProvider>
    <AppSidebar />
    <SidebarInset>
      <HeaderMain class="bg-background" />
      <div class="flex flex-1 flex-col gap-4 m-2 bg-background rounded-md shadow max-h-screen overflow-x-hidden">
        <RouterView v-slot="{ Component, route }">
          <Transition :name="currentAnimation" mode="out-in" :enter-active-class="getEnterActiveClass"
            :enter-from-class="getEnterFromClass" :enter-to-class="getEnterToClass"
            :leave-active-class="getLeaveActiveClass" :leave-from-class="getLeaveFromClass"
            :leave-to-class="getLeaveToClass">
            <KeepAlive :include="getKeepAliveNames">
              <component :is="wrap(route.name, Component)" :key="route.name" />
            </KeepAlive>
          </Transition>
        </RouterView>
      </div>
    </SidebarInset>
  </SidebarProvider>
</template>
