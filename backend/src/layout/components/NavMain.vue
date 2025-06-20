<script setup lang="ts">
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from '@wade/ui';
import { ChevronRight, type LucideIcon } from 'lucide-vue-next';

defineProps<{
  items: {
    title: string;
    url: string;
    icon?: LucideIcon;
    isActive?: boolean;
    children?: {
      title: string;
      url: string;
    }[];
  }[];
}>();
</script>

<template>
  <SidebarGroup>
    <SidebarGroupLabel>{{ $t('menu.platform') }}</SidebarGroupLabel>
    <SidebarMenu>
      <template v-for="item in items" :key="item.title">
        <!-- 当存在子项时渲染子菜单 -->
        <Collapsible v-if="item.children && item.children.length > 0" as-child :default-open="item.isActive"
          class="group/collapsible">
          <SidebarMenuItem>
            <CollapsibleTrigger as-child>
              <SidebarMenuButton :tooltip="$t(item.title)">
                <component :is="item.icon" v-if="item.icon" />
                <span>{{ $t(item.title) }}</span>
                <ChevronRight
                  class="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
              </SidebarMenuButton>
            </CollapsibleTrigger>
            <CollapsibleContent>
              <SidebarMenuSub>
                <SidebarMenuSubItem v-for="subItem in item.children" :key="subItem.title">
                  <SidebarMenuSubButton as-child>
                    <RouterLink :to="subItem.url">
                      <span>{{ $t(subItem.title) }}</span>
                    </RouterLink>
                  </SidebarMenuSubButton>
                </SidebarMenuSubItem>
              </SidebarMenuSub>
            </CollapsibleContent>
          </SidebarMenuItem>
        </Collapsible>
        <!-- 当没有子项时直接跳转 -->
        <SidebarMenuItem v-else>
          <SidebarMenuSubButton as-child>
            <RouterLink :to="item.url">
              <component :is="item.icon" v-if="item.icon" />
              <span>{{ $t(item.title) }}</span>
            </RouterLink>
          </SidebarMenuSubButton>
        </SidebarMenuItem>
      </template>
    </SidebarMenu>
  </SidebarGroup>
</template>
