<script setup lang="ts">
import { Button, ThemeDark } from '@wade/ui';
import { MoonStar, Sun } from 'lucide-vue-next';
import HomeGenerator from './components/HomeGenerator.vue';
import PageContainer from '@/components/Page/PageContainer.vue';

</script>
<template>
  <PageContainer>
    <template #header>
      <ThemeDark #="{ toggle, dark }">
        <div class="flex align-middle gap-2">
          <RouterLink to="/work">
            <Button>{{ $t('page.button.toWork') }}</Button>
          </RouterLink>
          <Button variant="secondary" @click="toggle">
            <component :is="dark ? MoonStar : Sun" />
          </Button>
        </div>
        <Button @click="toggle" class="absolute right-2 top-2">{{ $t('tips.followMouse') }}</Button>
        <Button @click="toggle" class="absolute right-2 bottom-2">{{ $t('tips.followMouse') }}</Button>
        <Button @click="toggle" class="absolute left-2 bottom-2">{{ $t('tips.followMouse') }}</Button>
      </ThemeDark>
    </template>
    <HomeGenerator />
  </PageContainer>
</template>
