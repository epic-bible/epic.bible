<script setup lang="ts">
import { computed, type PropType } from "vue";
import { Button } from "@/components/ui/button";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import type { IBook } from "@/types/models";

const props = defineProps({
  book: {
    type: Object as PropType<IBook | undefined | null>,
  },
});

const chapters = computed(() =>
  Array.from({ length: props.book?.chapters || 0 }).map((_, i) => i + 1)
);
const encodedName = computed(() => encodeURIComponent(`${props.book?.name}`));
</script>

<template>
  <div class="flex flex-col gap-10">
    <template v-if="props.book?.name">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink as-child class="link-dashed">
              <NuxtLink to="/">KJV</NuxtLink>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage class="font-bold">
              {{ props.book?.name }}
            </BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    </template>

    <template v-if="props.book">
      <h1 class="text-4xl font-bold">{{ props.book?.name }}</h1>
      <div class="flex flex-wrap gap-6">
        <Button
          v-for="chapter in chapters"
          :key="chapter"
          as-child
          variant="outline"
          size="icon"
          class="rounded-none hover:bg-transparent active:bg-transparent"
          :aria-label="`Chapter ${chapter}`"
        >
          <NuxtLink :to="`/books/${encodedName}/${chapter}`">
            {{ chapter }}
          </NuxtLink>
        </Button>
      </div>
    </template>
  </div>
</template>
