<script setup lang="ts">
import { chakra, CBox } from "@chakra-ui/vue-next";
</script>

<template>
  <CBox overflow-x="auto">
    <chakra.table text-align="left" mt="32px" w="full">
      <slot />
    </chakra.table>
  </CBox>
</template>
