<script setup lang="ts">
import PageContainer from '@/components/Page/PageContainer.vue';
import { $t } from '@wade/locales';
import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Input,
  Label,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  toast,
} from '@wade/ui';

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
    <Tabs default-value="account" class="w-[400px]">
      <TabsList class="grid w-full grid-cols-2">
        <TabsTrigger value="account">
          {{ $t('common.username') }}
        </TabsTrigger>
        <TabsTrigger value="password">
          {{ $t("common.password") }}
        </TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <Card>
          <CardHeader>
            <CardTitle>{{ $t("common.account") }}</CardTitle>
            <CardDescription>
              {{ $t('page.home.changeAccount') }}
            </CardDescription>
          </CardHeader>
          <CardContent class="space-y-2">
            <div class="space-y-1">
              <Label for="name">{{ $t('common.name') }}</Label>
              <Input id="name" default-value="Wade" />
            </div>
            <div class="space-y-1">
              <Label for="username">{{ $t('common.username') }}</Label>
              <Input id="username" default-value="123456" />
            </div>
          </CardContent>
          <CardFooter>
            <Button>{{ $t('common.save') }}</Button>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="password">
        <Card>
          <CardHeader>
            <CardTitle>{{ $t('common.password') }}</CardTitle>
            <CardDescription>
              {{ $t('page.home.ChangePassword') }}
            </CardDescription>
          </CardHeader>
          <CardContent class="space-y-2">
            <div class="space-y-1">
              <Label for="current">{{ $t('common.currentAccount') }}</Label>
              <Input id="current" type="password" />
            </div>
            <div class="space-y-1">
              <Label for="new">{{ $t('common.newPassword') }}</Label>
              <Input id="new" type="password" />
            </div>
          </CardContent>
          <CardFooter>
            <Button>{{ $t('common.save') }}</Button>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  </PageContainer>
</template>