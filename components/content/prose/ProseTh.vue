<script setup lang="ts">
import { chakra, useColorModeValue } from '@chakra-ui/vue-next'

const bg = useColorModeValue('gray.50', 'whiteAlpha.100')
</script>

<template>
  <chakra.th :bg="bg" font-weight="semibold" p="2" font-size="sm">
    <slot />
  </chakra.th>
</template>
