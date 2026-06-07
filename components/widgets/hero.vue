<script setup lang="ts">
import { computed, type PropType } from "vue";
import { Button } from "@/components/ui/button";
import type { IBook } from "@/types/models";

const props = defineProps({
  books: {
    type: Array as PropType<IBook[] | null>,
    default: () => [],
  },
});

const books = computed(() => props.books || []);
</script>

<template>
  <section class="flex flex-col gap-6">
    <h1 class="text-5xl font-bold tracking-tight">Welcome to Epic Bible</h1>
    <div class="flex flex-wrap gap-4">
      <Button
        v-for="(book, i) in books"
        :key="i"
        as-child
        variant="outline"
        class="rounded-full hover:bg-transparent active:bg-transparent"
      >
        <NuxtLink :to="`/books/${encodeURIComponent(book.name)}`">
          {{ book.name }}
        </NuxtLink>
      </Button>
    </div>
  </section>
</template>
