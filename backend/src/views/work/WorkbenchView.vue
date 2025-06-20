<script setup lang="ts">
import PageContainer from '@/components/Page/PageContainer.vue';
import { $t } from '@wade/locales';
import { Button, toast } from '@wade/ui';
import WorkForm from './components/WorkForm.vue';
import WorkTabs from './components/WorkTabs.vue';

const openToast = () => {
  toast.info($t('tips.toast'), {
    description: $t('tips.agree'),
    action: {
      label: $t('common.agree'),
      onClick: () => console.log($t('common.agree')),
    },
  });
};
</script>
<template>
  <PageContainer>
    <template #header>
      <RouterLink to="/">
        <Button>{{ $t('page.button.toHome') }}</Button>
      </RouterLink>
      <Button class="ml-2" @click="openToast">{{ $t('common.toast') }}</Button>
    </template>
    <div class="flex">
      <WorkTabs />
      <WorkForm />
    </div>
  </PageContainer>
</template>