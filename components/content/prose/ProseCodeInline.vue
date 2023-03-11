<script setup lang="ts">
import { CCode, useColorModeValue } from "@chakra-ui/vue-next";

const color = useColorModeValue("emerald.500", "purple.200");
</script>

<template>
  <CCode :color="color" font-size="1em" font-weight="500" px="2" rounded="lg">
    <slot />
  </CCode>
</template>
