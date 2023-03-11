<template>
  <ContentDoc class="chakra-prose" />
</template>

<script setup lang="ts">
definePageMeta({
  layout: "docs",
});

function wait(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
</script>
