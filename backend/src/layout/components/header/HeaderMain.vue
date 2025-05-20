<script setup lang="ts">
import {
  Button,
  Separator,
  SidebarTrigger,
  ThemeDark,
} from '@wade/ui';
import {
  Bell,
  BellRing,
  Languages,
  Maximize,
  Minimize,
  MoonStar,
  Settings2,
  Sun,
} from 'lucide-vue-next';
import SearchMenu from './SearchMenu.vue';
import HeaderNotice from './HeaderNotice.vue';
import HeaderLanguage from './HeaderLanguage.vue';
import HeaderBreadcrumb from './HeaderBreadcrumb.vue';
</script>
<template>
  <header
    class="flex h-12 shrink-0 items-center gap-2 pr-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-10 border-b-1">
    <div class="flex grow items-center gap-2 px-4">
      <SidebarTrigger class="-ml-1" />
      <Separator orientation="vertical" class="h-4" />
      <HeaderBreadcrumb />
    </div>
    <ThemeDark #="{ dark, fullscreen, toggleFullscreen, toggle }">
      <SearchMenu />
      <Button variant="ghost" size="icon" class="cursor-pointer h-7 w-7">
        <Settings2 />
      </Button>
      <HeaderLanguage>
        <Button variant="ghost" size="icon" class="cursor-pointer h-7 w-7">
          <Languages />
        </Button>
      </HeaderLanguage>
      <Button @click="toggleFullscreen" variant="ghost" size="icon" class="cursor-pointer h-7 w-7">
        <component :is="fullscreen ? Minimize : Maximize" />
      </Button>
      <Button @click="toggle" variant="ghost" size="icon" class="cursor-pointer h-7 w-7">
        <component :is="dark ? MoonStar : Sun" />
      </Button>
      <HeaderNotice #="{ toggle, open }">
        <Button @click="toggle" variant="ghost" size="icon" class="cursor-pointer h-7 w-7">
          <component :is="open ? BellRing : Bell" />
        </Button>
      </HeaderNotice>
    </ThemeDark>
  </header>
</template>