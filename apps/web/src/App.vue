<script setup lang="ts">
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
} from '@wade/ui';
import { makeId, makeUuid, makeYearNumberToString } from '@wade/utils';
import { reactive } from 'vue';

const params = reactive({
  id: '',
  uuid: '',
  yearNumber: '',
});

const handleID = () => {
  params.id = makeId();
};

const handleUUID = () => {
  params.uuid = makeUuid();
};

const handleYearNumber = () => {
  params.yearNumber = makeYearNumberToString();
};

const makeProject = () => {
  handleID();
  handleUUID();
  handleYearNumber();
};
</script>

<template>
  <div class="content flex items-center justify-center pt-10">
    <Card class="w-[550px]">
      <CardHeader>
        <CardTitle>Create project</CardTitle>
        <CardDescription>Deploy your new project in one-click.</CardDescription>
      </CardHeader>
      <CardContent>
        <div class="grid items-center w-full gap-4">
          <Button variant="outline" @click="handleID">
            生成一个普通ID
          </Button>
          <div class="flex flex-col space-y-1.5">
            <Label for="id">普通ID</Label>
            <Input id="id" v-model="params.id" placeholder="生成一个普通ID" />
          </div>
          <Button variant="outline" @click="handleUUID">
            生成一个UUID
          </Button>
          <div class="flex flex-col space-y-1.5">
            <Label for="uuid">UUID</Label>
            <Input id="uuid" v-model="params.uuid" placeholder="生成一个UUID" />
          </div>
          <Button variant="outline" @click="handleYearNumber">
            生成一个年开头的数字
          </Button>
          <div class="flex flex-col space-y-1.5">
            <Label for="yearNumber">年开头的数字</Label>
            <Input id="yearNumber" v-model="params.yearNumber" placeholder="生成一个年开头的数字" />
          </div>
        </div>
      </CardContent>
      <CardFooter class="flex justify-between px-6 pb-6">
        <Button class="w-full" @click="makeProject">一键生成</Button>
      </CardFooter>
    </Card>
  </div>
</template>