<script setup lang="ts">
import { Button, ThemeDark } from '@wade/ui';
import { MoonStar, Sun } from 'lucide-vue-next';
import HomeGenerator from './components/HomeGenerator.vue'
// interface User {
//   age?: number;
//   avatar: number;
//   createdAt: string;
//   id: string;
//   name: string;
//   password: string;
//   remarks?: string;
//   seq: number;
//   sex: number;
//   updatedAt: string;
//   username: string;
// }

// const users = ref<User[]>([]);

// const fetchUsers = async () => {
//   const { data } = await fetch('/api/user').then((res) => res.json());
//   console.log(data);
//   users.value = data.data;
// };

// onMounted(() => {
//   fetchUsers();
// });
</script>
<template>
  <div class="relative w-full h-full">
    <ThemeDark #="{ toggle, dark }">
      <div class="flex align-middle gap-2">
        <RouterLink to="/work">
          <Button>{{ $t('page.button.toWork') }}</Button>
        </RouterLink>
        <Button variant="secondary" @click="toggle">
          <component :is="dark ? MoonStar : Sun" />
        </Button>
        <!-- <Button @click="fetchUsers">获取用户信息</Button> -->
      </div>
      <HomeGenerator></HomeGenerator>
      <Button @click="toggle" class="absolute right-0 top-0">{{ $t('tips.followMouse') }}</Button>
      <Button @click="toggle" class="absolute right-0 bottom-0">{{ $t('tips.followMouse') }}</Button>
      <Button @click="toggle" class="absolute left-0 bottom-0">{{ $t('tips.followMouse') }}</Button>
    </ThemeDark>

    <!-- <Table>
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
    </Table> -->
  </div>
</template>
