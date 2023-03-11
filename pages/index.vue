<template>
  <Hero :books="books" />
</template>

<script setup lang="ts">
import Hero from "@/components/widgets/hero.server";
import { useSupabase } from "@/hooks/use-supabase";

useHead({
  title: "Epic Bible",
  meta: [
    {
      name: "description",
      content: "Fast, Fearless, and Free Bible Study",
    },
  ],
});

const supabase = useSupabase();
const { data: books } = await useAsyncData("books", async () => {
  const { data } = await supabase.from("Books").select("*");
  return data;
});

definePageMeta({
  layout: "default",
});
</script>
