<template>
  <Hero />
</template>

<script setup lang="ts">
import Hero from "@/components/widgets/hero.server";

useHead({
  title: "Epic Bible",
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
