<script setup lang="ts">
import { getUserList } from '@/api/user';
import PageContainer from '@/components/Page/PageContainer.vue';
import {
  Button,
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@wade/ui';
import { ref } from 'vue';

const loading = ref(false)
const users = ref<UserInfo[]>([]);

const fetchUsers = async () => {
  try {
    loading.value = true
    const { data } = await getUserList();
    users.value = data.data;
  } finally {
    loading.value = false
  }
};
</script>
<template>
  <PageContainer>
    <template #header>
      <Button :loading="loading" @click="fetchUsers">{{ $t('page.home.fetchUsers') }}</Button>
    </template>
    <Table>
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>头像</TableHead>
          <TableHead>名称</TableHead>
          <TableHead>账户</TableHead>
          <TableHead>年龄</TableHead>
          <TableHead>备注</TableHead>
          <TableHead>创建时间</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow v-for="user in users" :key="user.id">
          <TableCell>头像</TableCell>
          <TableCell>{{ user.name }}</TableCell>
          <TableCell>{{ user.username }}</TableCell>
          <TableCell>{{ user.age }}</TableCell>
          <TableCell>{{ user.remarks }}</TableCell>
          <TableCell>{{ user.createdAt }}</TableCell>
        </TableRow>
      </TableBody>
    </Table>

  </PageContainer>
</template>
