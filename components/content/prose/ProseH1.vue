<script setup lang="ts">
defineProps<{ id?: string }>();
</script>

<template>
  <h1
    id="skip-nav"
    tabindex="-1"
    class="mb-5 max-w-[85ch] text-4xl font-bold tracking-tight"
  >
    <slot />
  </h1>
</template>
