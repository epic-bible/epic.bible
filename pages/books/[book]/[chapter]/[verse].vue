<template>
  <Verse :verse="verse" />
</template>

<script setup lang="ts">
import Verse from "@/components/widgets/verse.server";
import { useSupabase } from "@/hooks/use-supabase";

const route = useRoute();
const supabase = useSupabase();

const _chapter = computed(() => route.params.chapter);

const scriptureRef = computed(() => {
  return `${route.params.book} ${_chapter.value}:${route.params.verse}`;
});

const { data: verse } = await useAsyncData(
  `${route.params.book}:${route.params.chapter}:${route.params.verse}`,
  async () => {
    const { data, error } = await supabase
      .from("Verses")
      .select()
      .eq("ref", `${route.params.book} ${_chapter.value}:${route.params.verse}`)
      .limit(1);
    if (error) throw error;
    else return data![0];
  }
);

useHead({
  title: `${scriptureRef.value} | Epic Bible`,
  meta: [
    {
      name: "description",
      content: "Fast, Fearless, and Free Bible Study",
    },
  ],
});

definePageMeta({
  layout: "default",
});
</script>
