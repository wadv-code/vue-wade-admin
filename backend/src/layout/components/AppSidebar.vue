<script setup lang="ts">
import type { SidebarProps } from '@wade/ui';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from '@wade/ui';
import {
  AudioWaveform,
  BookOpen,
  Bot,
  Command,
  Frame,
  GalleryVerticalEnd,
  Home,
  PieChart,
  Map as SetMap,
  Settings2,
  SquareTerminal,
} from 'lucide-vue-next';
import { ref } from 'vue';
import NavMain from './NavMain.vue';
import NavProjects from './NavProjects.vue';
import NavUser from './NavUser.vue';
import TeamSwitcher from './TeamSwitcher.vue';

const props = withDefaults(defineProps<SidebarProps>(), {
  collapsible: 'icon',
});
// This is sample data.
const data = ref({
  teams: [
    {
      name: 'page.home.evil',
      logo: Command,
      plan: 'Free',
    },
    {
      name: 'page.home.welfare',
      logo: GalleryVerticalEnd,
      plan: 'Enterprise',
    },
    {
      name: 'page.home.acme',
      logo: AudioWaveform,
      plan: 'Startup',
    },
  ],
  navMain: [
    {
      title: 'home.home',
      url: '/',
      icon: Home,
    },
    {
      title: 'user.user',
      url: '/user',
      icon: SquareTerminal,
      isActive: true,
      children: [
        {
          title: 'user.list',
          url: '/user/users',
        },
        {
          title: 'Starred',
          url: '#',
        },
        {
          title: 'Settings',
          url: '#',
        },
      ],
    },
    {
      title: 'work.work',
      url: '#',
      icon: Bot,
      children: [
        {
          title: 'work.workbench',
          url: '/work/workbench',
        },
        {
          title: 'Explorer',
          url: '#',
        },
        {
          title: 'Quantum',
          url: '#',
        },
      ],
    },
    {
      title: 'models.models',
      url: '#',
      icon: Bot,
      children: [
        {
          title: 'Genesis',
          url: '#',
        },
        {
          title: 'Explorer',
          url: '#',
        },
        {
          title: 'Quantum',
          url: '#',
        },
      ],
    },
    {
      title: 'documentation.documentation',
      url: '#',
      icon: BookOpen,
      children: [
        {
          title: 'Introduction',
          url: '#',
        },
        {
          title: 'Get Started',
          url: '#',
        },
        {
          title: 'Tutorials',
          url: '#',
        },
        {
          title: 'Changelog',
          url: '#',
        },
      ],
    },
    {
      title: 'settings.settings',
      url: '#',
      icon: Settings2,
      children: [
        {
          title: 'General',
          url: '#',
        },
        {
          title: 'Team',
          url: '#',
        },
        {
          title: 'Billing',
          url: '#',
        },
        {
          title: 'Limits',
          url: '#',
        },
      ],
    },
  ],
  projects: [
    {
      name: 'Design Engineering',
      url: '#',
      icon: Frame,
    },
    {
      name: 'Sales & Marketing',
      url: '#',
      icon: PieChart,
    },
    {
      name: 'Travel',
      url: '#',
      icon: SetMap,
    },
  ],
});
</script>

<template>
  <Sidebar v-bind="props">
    <SidebarHeader>
      <TeamSwitcher :teams="data.teams" />
    </SidebarHeader>
    <SidebarContent>
      <NavMain :items="data.navMain" />
      <NavProjects :projects="data.projects" />
    </SidebarContent>
    <SidebarFooter>
      <NavUser />
    </SidebarFooter>
    <SidebarRail />
  </Sidebar>
</template>
