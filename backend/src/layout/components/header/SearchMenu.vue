<script setup lang="ts">
import { useMagicKeys, whenever } from '@vueuse/core';
import { useIsMobile } from '@wade/hooks';
import {
  Button,
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  Input,
  Label,
} from '@wade/ui';
import { isWindowsOs } from '@wade/utils';
import { Copy, Search } from 'lucide-vue-next';
import { nextTick, onMounted, onUnmounted, ref, watch } from 'vue';

const { isMobile } = useIsMobile();

interface Props {
  enableShortcutKey?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  enableShortcutKey: true,
});

const keys = useMagicKeys();
const open = ref(false);
const keyword = ref('');
const searchInputRef = ref<HTMLInputElement>();
const cmd = isWindowsOs() ? keys['ctrl+k'] : keys['cmd+k'];

whenever(cmd, () => {
  if (props.enableShortcutKey) {
    open.value = !open.value;
  }
});

whenever(open, () => {
  nextTick(() => {
    searchInputRef.value?.focus();
  });
});

// 禁用浏览器默认cmd组合键
const preventDefaultBrowserSearchHotKey = (event: KeyboardEvent) => {
  if (event.key?.toLowerCase() === 'k' && (event.metaKey || event.ctrlKey)) {
    event.preventDefault();
  }
};

const toggleKeydownListener = () => {
  if (props.enableShortcutKey) {
    window.addEventListener('keydown', preventDefaultBrowserSearchHotKey);
  } else {
    window.removeEventListener('keydown', preventDefaultBrowserSearchHotKey);
  }
};

watch(() => props.enableShortcutKey, toggleKeydownListener);

onMounted(() => {
  toggleKeydownListener();
  onUnmounted(() => {
    window.removeEventListener('keydown', preventDefaultBrowserSearchHotKey);
  });
});
</script>
<template>
  <Dialog v-model:open="open" v-if="!isMobile">
    <DialogTrigger as-child>
      <div
        class="md:bg-accent group flex h-7 cursor-pointer items-center gap-3 rounded-2xl border-none bg-none px-2 py-0.5 outline-none">
        <Search class="text-muted-foreground group-hover:text-foreground size-4 group-hover:opacity-100" />
        <span class="text-muted-foreground group-hover:text-foreground hidden text-xs duration-300 md:block">
          搜索
        </span>
        <span v-if="enableShortcutKey"
          class="bg-background border-foreground/60 text-muted-foreground group-hover:text-foreground relative hidden rounded-sm rounded-r-xl px-1.5 py-1 text-xs leading-none group-hover:opacity-100 md:block">
          {{ isWindowsOs() ? 'Ctrl' : '⌘' }}
          <kbd>K</kbd>
        </span>
        <span v-else></span>
      </div>
    </DialogTrigger>
    <DialogContent class="max-w-3xl">
      <DialogHeader>
        <DialogTitle>
          <div class="flex items-center">
            <Search class="text-muted-foreground mr-2 size-4" />
            <input ref="searchInputRef" v-model="keyword" placeholder="请输入关键字搜索"
              class="ring-none placeholder:text-muted-foreground w-[80%] rounded-md border border-none bg-transparent p-2 pl-0 text-sm font-normal outline-none ring-0 ring-offset-transparent focus-visible:ring-transparent" />
          </div>
        </DialogTitle>
        <DialogDescription>
          Anyone who has this link will be able to view this.
        </DialogDescription>
      </DialogHeader>
      <div class="flex items-center space-x-2 h-52">
        <div class="grid flex-1 gap-2">
          <Label for="link" class="sr-only">
            Link
          </Label>
          <Input id="link" default-value="https://shadcn-vue.com/docs/installation" read-only />
        </div>
        <Button type="submit" size="sm" class="px-3">
          <span class="sr-only">Copy</span>
          <Copy class="w-4 h-4" />
        </Button>
      </div>
      <DialogFooter class="sm:justify-start">
        <DialogClose as-child>
          <Button type="button" variant="secondary">
            Close
          </Button>
        </DialogClose>
      </DialogFooter>
    </DialogContent>
  </Dialog>
</template>