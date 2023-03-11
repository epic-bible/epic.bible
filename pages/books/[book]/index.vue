<template>
  <Book :book="book" />
</template>

<script setup lang="ts">
import Book from "@/components/widgets/book.server";
import { useSupabase } from "@/hooks/use-supabase";

const route = useRoute();
const supabase = useSupabase();

const _book = computed(() => route.params.book);
const { data: book } = useAsyncData(`book:${route.params.book}`, async () => {
  const { data, error } = await supabase
    .from("Books")
    .select()
    .eq("name", _book.value)
    .limit(1);
  if (error) throw error;
  else return data[0];
});

definePageMeta({
  layout: "default",
});
</script>
