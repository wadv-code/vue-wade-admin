<script setup lang="ts">
import { type SupportedLanguagesType, loadLocaleMessages } from '@wade/locales';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@wade/ui';
import { ref } from 'vue';

const position = ref('zh-CN');

const handleChange = (value: string) => {
  loadLocaleMessages(value as SupportedLanguagesType);
};
</script>
<template>
  <DropdownMenu>
    <DropdownMenuTrigger as-child>
      <slot />
    </DropdownMenuTrigger>
    <DropdownMenuContent class="w-56">
      <DropdownMenuLabel>{{ $t('common.languagePanel') }}</DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuRadioGroup v-model="position" @update:model-value="handleChange">
        <DropdownMenuRadioItem value="en-US">
          {{ $t('common.enUS') }}
        </DropdownMenuRadioItem>
        <DropdownMenuRadioItem value="zh-CN">
          {{ $t('common.zhCN') }}
        </DropdownMenuRadioItem>
      </DropdownMenuRadioGroup>
    </DropdownMenuContent>
  </DropdownMenu>
</template>