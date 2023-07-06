<template>
  <Chapter :verses="verses || []" :book="_book" :chapter="_chapter" />
</template>

<script setup lang="ts">
import Chapter from "@/components/widgets/chapter.server.vue";
import { useSupabase } from "@/hooks/use-supabase";

const route = useRoute();

const supabase = useSupabase();

const _book = computed(() => route.params.book as string);
const _chapter = computed(() => route.params.chapter as string);

const { data: verses } = await useAsyncData(
  `${route.params.book}:${route.params.chapter}`,
  async () => {
    const { data, error } = await supabase
      .from("Verses")
      .select("*")
      .eq("book", _book.value)
      .eq("chapter", _chapter.value);
    if (error) throw error;
    else return data! || [];
  }
);

definePageMeta({
  layout: "default",
});

useHead({
  title: `${_book.value} ${_chapter.value} - Epic Bible`,
  meta: [
    {
      name: "description",
      content: "Fast, Fearless, and Free Bible Study",
    },
  ],
});
</script>
