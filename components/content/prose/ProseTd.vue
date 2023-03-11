<script setup lang="ts">
import { chakra } from '@chakra-ui/vue-next'
</script>

<template>
  <chakra.td
    p="2"
    border-top-width="1px"
    border-color="inherit"
    font-size="sm"
    white-space="normal"
  >
    <slot />
  </chakra.td>
</template>
