<script setup lang="ts">
defineOptions({ inheritAttrs: false });
</script>

<template>
  <nav aria-label="breadcrumb" v-bind="$attrs">
    <slot />
  </nav>
</template>
