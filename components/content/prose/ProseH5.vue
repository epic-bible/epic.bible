<script setup lang="ts">
defineProps<{ id?: string }>();
</script>

<template>
  <h5 :id="id" class="group mt-6 scroll-mt-28 text-lg font-semibold">
    <span class="content"><slot /></span>
    <a
      aria-label="anchor"
      :href="`#${id}`"
      class="ml-1.5 font-normal text-green-500 opacity-0 outline-none group-hover:opacity-100"
    >
      #
    </a>
  </h5>
</template>
