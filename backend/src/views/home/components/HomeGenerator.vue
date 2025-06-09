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
} from '@wade/ui';
import { makeId, makeUuid, makeYearNumberToString } from '@wade/utils';
import { RefreshCcw } from 'lucide-vue-next';
import { onMounted, reactive } from 'vue';

defineOptions({ name: 'HomeGenerator' })

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

onMounted(() => {
  makeProject()
})

</script>

<template>
  <div class="content flex items-center justify-center pt-10">
    <Card class="w-[550px]">
      <CardHeader>
        <CardTitle>{{ $t('page.home.idGenerator') }}</CardTitle>
        <CardDescription>{{ $t('page.home.generatorUuid') }}</CardDescription>
      </CardHeader>
      <CardContent>
        <div class="grid items-center w-full gap-4">
          <div class="flex items-center">
            <Input v-model="params.id" :placeholder="$t('page.home.generateRegular')" />
            <Button class="ml-2" @click="handleID">
              <RefreshCcw />
              {{ $t('page.home.idGenerator') }}
            </Button>
          </div>
          <div class="flex items-center">
            <Input v-model="params.uuid" :placeholder="$t('page.home.uuidGenerator')" />
            <Button class="ml-2" @click="handleUUID">
              <RefreshCcw />
              {{ $t('page.home.uuidGenerator') }}
            </Button>
          </div>
          <div class="flex items-center">
            <Input v-model="params.yearNumber" :placeholder="$t('page.home.yearNumber')" />
            <Button class="ml-2" @click="handleYearNumber">
              <RefreshCcw />
              {{ $t('page.home.yearNumber') }}
            </Button>
          </div>
        </div>
      </CardContent>
      <CardFooter class="flex justify-between px-6 pb-6">
        <Button class="w-full" @click="makeProject">
          <RefreshCcw />
          {{ $t("page.home.generator") }}
        </Button>
      </CardFooter>
    </Card>
  </div>
</template>