<template>
  <Verse :verse="verse" />
</template>

<script setup lang="ts">
import Verse from "@/components/widgets/verse.server";
import { useSupabase } from "@/hooks/use-supabase";

const route = useRoute();
const supabase = useSupabase();

const _chapter = computed(() => route.params.chapter);

const { data: verse } = useAsyncData(
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

definePageMeta({
  layout: "default",
});
</script>
