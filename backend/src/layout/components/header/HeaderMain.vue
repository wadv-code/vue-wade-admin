<script setup lang="ts">
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
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
import { ref } from 'vue';
import SearchMenu from './SearchMenu.vue';

const notice = ref(false);
const position = ref('zh');
</script>
<template>
  <header
    class="flex h-12 shrink-0 items-center gap-2 pr-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-10 border-b-1">
    <div class="flex grow items-center gap-2 px-4">
      <SidebarTrigger class="-ml-1" />
      <Separator orientation="vertical" class="h-4" />
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem class="hidden md:block">
            <BreadcrumbLink href="#">
              Building Your Application
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator class="hidden md:block" />
          <BreadcrumbItem>
            <BreadcrumbPage>Data Fetching</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    </div>
    <ThemeDark #="{ dark, fullscreen, toggleFullscreen, toggle }">
      <SearchMenu />
      <Button variant="ghost" size="icon" class="cursor-pointer h-7 w-7">
        <Settings2 />
      </Button>
      <DropdownMenu>
        <DropdownMenuTrigger as-child>
          <Button variant="ghost" size="icon" class="cursor-pointer h-7 w-7">
            <Languages />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent class="w-56">
          <DropdownMenuLabel>Panel Language</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuRadioGroup v-model="position">
            <DropdownMenuRadioItem value="en">
              英文
            </DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="zh">
              简体中文
            </DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="ZH">
              繁体中文
            </DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
      <Button @click="toggleFullscreen" variant="ghost" size="icon" class="cursor-pointer h-7 w-7">
        <component :is="fullscreen ? Minimize : Maximize" />
      </Button>
      <Button @click="toggle" variant="ghost" size="icon" class="cursor-pointer h-7 w-7">
        <component :is="dark ? MoonStar : Sun" />
      </Button>
      <Button @click="notice = !notice" variant="ghost" size="icon" class="cursor-pointer h-7 w-7">
        <component :is="notice ? BellRing : Bell" />
      </Button>
    </ThemeDark>
  </header>
</template>