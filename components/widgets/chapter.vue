<script setup lang="ts">
import { computed } from "vue";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import type { IVerses } from "@/types/models";

const props = defineProps<{
  verses?: IVerses[];
  book: string;
  chapter: string;
}>();

const verses = computed(() => props.verses || []);
const bookAndChapter = computed(() => `${props?.book} ${props?.chapter}`);
</script>

<template>
  <div class="flex flex-col gap-6">
    <template v-if="chapter && book">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink as-child class="link-dashed">
              <NuxtLink to="/">KJV</NuxtLink>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink as-child class="link-dashed">
              <NuxtLink :to="`/books/${encodeURIComponent(`${book}`)}`">
                {{ book }}
              </NuxtLink>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage class="font-bold">
              {{ bookAndChapter }}
            </BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    </template>

    <h1 class="text-4xl font-bold">{{ bookAndChapter }}</h1>

    <NuxtLink
      v-for="verse in verses"
      :key="verse.ref"
      :to="`/books/${encodeURIComponent(verse.book)}/${verse.chapter}/${verse.verse}`"
    >
      <span class="flex items-start gap-2 text-lg">
        <sup class="mt-4">{{ verse.verse }}</sup>
        <span class="link-dashed" v-html="verse.text" />
      </span>
    </NuxtLink>
  </div>
</template>
