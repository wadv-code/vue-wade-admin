<script setup lang="ts">
import PageContainer from '@/components/Page/PageContainer.vue';
import { $t } from '@wade/locales';
import {
  AutoForm,
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  toast,
  z,
} from '@wade/ui';
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

const formSchema = z.object({
  username: z.string().describe('Your username'),
  password: z.string().describe('Your password'),
});
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
      <Card class="w-[400px] ml-2">
        <CardHeader>
          <CardTitle>Create project</CardTitle>
          <CardDescription>Deploy your new project in one-click.</CardDescription>
        </CardHeader>
        <CardContent>
          <AutoForm :schema="formSchema" />
        </CardContent>
        <CardFooter class="flex justify-between px-6 pb-6">
          <Button variant="outline">
            Cancel
          </Button>
          <Button>Deploy</Button>
        </CardFooter>
      </Card>
    </div>
  </PageContainer>
</template>