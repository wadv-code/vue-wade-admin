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
  Toaster,
  toast,
} from '@wade/ui';
import { makeId, makeUuid, makeYearNumberToString } from '@wade/utils';
import { Copy, RefreshCcw } from 'lucide-vue-next';
import { onMounted, reactive } from 'vue';

defineOptions({ name: 'HomeGenerator' });

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

const openToast = () => {
  toast('Event has been created', {
    description: 'Sunday, December 03, 2023 at 9:00 AM',
    action: {
      label: 'Undo',
      onClick: () => console.log('Undo'),
    },
  });
};

onMounted(() => {
  makeProject();
});
</script>

<template>
  <div class="content flex items-center justify-center pt-10">
    <Toaster />
    <Card class="w-[550px]">
      <CardHeader>
        <CardTitle>{{ $t('page.home.idGenerator') }}</CardTitle>
        <CardDescription>{{ $t('page.home.generatorUuid') }}</CardDescription>
      </CardHeader>
      <CardContent>
        <div class="grid items-center w-full gap-4">
          <div class="flex items-center gap-1.5">
            <Input v-model="params.id" :placeholder="$t('page.home.generateRegular')" />
            <Button @click="openToast">
              <span class="sr-only">Copy</span>
              <Copy />
            </Button>
            <Button @click="handleID">
              <RefreshCcw />
              {{ $t('page.home.idGenerator') }}
            </Button>
          </div>
          <div class="flex items-center gap-1.5">
            <Input v-model="params.uuid" :placeholder="$t('page.home.uuidGenerator')" />
            <Button @click="openToast">
              <span class="sr-only">Copy</span>
              <Copy />
            </Button>
            <Button @click="handleUUID">
              <RefreshCcw />
              {{ $t('page.home.uuidGenerator') }}
            </Button>
          </div>
          <div class="flex items-center gap-1.5">
            <Input v-model="params.yearNumber" :placeholder="$t('page.home.yearNumber')" />
            <Button @click="openToast">
              <span class="sr-only">Copy</span>
              <Copy />
            </Button>
            <Button @click="handleYearNumber">
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