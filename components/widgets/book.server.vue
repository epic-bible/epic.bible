<script lang="ts" setup>
import {
  chakra,
  CBreadcrumb,
  CBreadcrumbItem,
  CHeading,
  CIconButton,
  CStack,
  CWrap,
  CWrapItem,
} from "@chakra-ui/vue-next";
import type { PropType } from "vue";
import { NuxtLink } from "#components";

import { IBook } from "@/types/models";

const props = defineProps({
  book: {
    type: Object as PropType<IBook | undefined | null>,
  },
});

const chapters = computed(() =>
  Array.from({ length: props.book?.chapters || 0 }).map((_, i) => i + 1)
);
const encodedName = computed(() => encodeURIComponent(`${props.book?.name}`));
</script>

<template>
  <CStack spacing="10">
    <template v-if="props.book?.name">
      <CBreadcrumb>
        <CBreadcrumbItem>
          <chakra.a
            :as="NuxtLink"
            to="/"
            textDecor="none"
            :_hover="{
              textDecoration: 'underline',
              textDecorationStyle: 'dashed',
              textDecorationThickness: '1px',
              textUnderlineOffset: '3px',
            }"
          >
            KJV
          </chakra.a>
        </CBreadcrumbItem>
        <CBreadcrumbItem>
          <chakra.a
            :as="NuxtLink"
            :to="`/books/${encodedName}`"
            textDecor="none"
            fontWeight="bold"
            :_hover="{
              textDecoration: 'underline',
              textDecorationStyle: 'dashed',
              textDecorationThickness: '1px',
              textUnderlineOffset: '3px',
            }"
          >
            {{ props.book?.name }}
          </chakra.a>
        </CBreadcrumbItem>
      </CBreadcrumb>
    </template>
    <template v-if="props.book">
      <CHeading as="h1">{{ props.book?.name }}</CHeading>
      <CWrap spacing="6">
        <CWrapItem v-for="chapter in chapters" :key="chapter">
          <CIconButton
            :as="NuxtLink"
            :to="`/books/${props.book?.name}/${chapter}`"
            variant="outline"
            rounded="none"
            size="lg"
            :ariaLabel="`Chapter ${chapter}`"
            :_hover="{ bg: 'transparent' }"
            :_active="{ bg: 'transparent' }"
          >
            {{ chapter }}
          </CIconButton>
        </CWrapItem>
      </CWrap>
    </template>
  </CStack>
</template>
