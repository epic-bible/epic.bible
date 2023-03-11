<template>
  <chakra.a :as="NuxtLink" text-style="anchor"><slot /></chakra.a>
</template>

<script lang="ts" setup>
import { chakra } from "@chakra-ui/vue-next";
import { NuxtLink } from "#components";
</script>
