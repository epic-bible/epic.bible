<script setup lang="ts">
import {
  CStack,
  chakra,
  CBreadcrumb,
  CBreadcrumbItem,
  CHStack,
  CHeading,
} from "@chakra-ui/vue-next";
import { NuxtLink } from "#components";
import { IVerses } from "@/types/models";

const props = defineProps<{
  verses?: IVerses[];
  book: string;
  chapter: string;
}>();

const verses = computed(() => props.verses || []);
const bookAndChapter = computed(() => `${props?.book} ${props?.chapter}`);
</script>

<template>
  <c-stack spacing="6">
    <template v-if="chapter && book">
      <c-breadcrumb>
        <c-breadcrumb-item>
          <chakra.a
            :_hover="{
              textDecoration: 'underline',
              textDecorationStyle: 'dashed',
              textDecorationThickness: '1px',
              textUnderlineOffset: '3px',
            }"
            :as="NuxtLink"
            textDecor="none"
          >
            KJV
          </chakra.a>
        </c-breadcrumb-item>
        <c-breadcrumb-item>
          <chakra.a
            :to="`/books/${encodeURIComponent(`${props.book}`)}`"
            :_hover="{
              textDecoration: 'underline',
              textDecorationStyle: 'dashed',
              textDecorationThickness: '1px',
              textUnderlineOffset: '3px',
            }"
            :as="NuxtLink"
            textDecor="none"
          >
            {{ book }}
          </chakra.a>
        </c-breadcrumb-item>
        <c-breadcrumb-item>
          <chakra.a :as="NuxtLink" textDecor="none" fontWeight="bold">
            {{ bookAndChapter }}
          </chakra.a>
        </c-breadcrumb-item>
      </c-breadcrumb>
    </template>
    <c-heading as="h1">{{ bookAndChapter }}</c-heading>
    <nuxt-link
      v-for="verse in verses"
      :key="verse.ref"
      :to="`/books/${encodeURIComponent(verse.book)}/${verse.chapter}/${
        verse.verse
      }`"
    >
      <c-h-stack fontSize="lg">
        <chakra.sup mt="4">{{ verse.verse }}</chakra.sup>
        <chakra.p
          :innerHTML="verse.text"
          :_hover="{
            textDecoration: 'underline',
            textDecorationStyle: 'dashed',
            textDecorationThickness: '1px',
            textUnderlineOffset: '3px',
          }"
        />
      </c-h-stack>
    </nuxt-link>
  </c-stack>
</template>
