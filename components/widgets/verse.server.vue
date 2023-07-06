<script setup lang="ts">
import {
  canUseDOM,
  CBreadcrumb,
  CBreadcrumbItem,
  CButtonGroup,
  chakra,
  CHeading,
  CHStack,
  CIconButton,
  CStack,
} from "@chakra-ui/vue-next";
import { shallowRef } from "vue";
import CopyIcon from "../icons/copy";
import CopyCheckIcon from "../icons/copy-check";
import LinkIcon from "../icons/link";
import { IVerses } from "@/types/models";
import { NuxtLink } from "#components";

const props = defineProps<{
  verse: IVerses | null;
}>();

const pageTitle = computed(() => `${props.verse?.ref} ${props.verse?._v}`);
const bookAndChapter = computed(
  () => `${props.verse?.book} ${props.verse?.chapter}`
);
const Copy = shallowRef(CopyIcon);
const Share = shallowRef(LinkIcon);

async function copyVerse(text: string) {
  await navigator.clipboard.writeText(text);
  Copy.value = CopyCheckIcon;
  setTimeout(() => {
    Copy.value = CopyIcon;
  }, 1000);
}
async function copyLink(text: string) {
  await navigator.clipboard.writeText(text);
  Share.value = CopyCheckIcon;
  setTimeout(() => {
    Share.value = LinkIcon;
  }, 1000);
}

const __location = () => (canUseDOM() ? window.location.href : "");
</script>

<template>
  <c-stack spacing="10">
    <c-h-stack>
      <c-breadcrumb>
        <c-breadcrumb-item>
          <chakra.a
            :as="NuxtLink"
            to="/"
            :_hover="{
              textDecoration: 'underline',
              textDecorationStyle: 'dashed',
              textDecorationThickness: '1px',
              textUnderlineOffset: '3px',
            }"
          >
            KJV
          </chakra.a>
        </c-breadcrumb-item>
        <c-breadcrumb-item>
          <chakra.a
            :as="NuxtLink"
            :to="`/books/${encodeURIComponent(`${verse?.book}`)}`"
            :_hover="{
              textDecoration: 'underline',
              textDecorationStyle: 'dashed',
              textDecorationThickness: '1px',
              textUnderlineOffset: '3px',
            }"
          >
            {{ verse?.book }}
          </chakra.a>
        </c-breadcrumb-item>
        <c-breadcrumb-item>
          <chakra.a
            :as="NuxtLink"
            :to="`/books/${encodeURIComponent(
              `${verse?.book}`
            )}/${encodeURIComponent(`${verse?.chapter}`)}`"
            :_hover="{
              textDecoration: 'underline',
              textDecorationStyle: 'dashed',
              textDecorationThickness: '1px',
              textUnderlineOffset: '3px',
            }"
          >
            {{ bookAndChapter }}
          </chakra.a>
        </c-breadcrumb-item>
      </c-breadcrumb>
    </c-h-stack>
    <c-heading>
      {{ pageTitle }}
    </c-heading>
    <chakra.p fontSize="xl" :innerHTML="verse?.text" />
    <c-button-group spacing="5" variant="outline">
      <c-icon-button
        rounded="lg"
        :_hover="{ bg: 'transparent' }"
        :_active="{ bg: 'transparent' }"
        ariaLabel="Copy"
        color="currentcolor"
        @click="() =>
          copyVerse(
            `${props.verse!.ref} ${props.verse!._v} - ${
              props.verse!.text
            }`
          )
        "
      >
        <Copy />
      </c-icon-button>
      <c-icon-button
        rounded="lg"
        :_hover="{ bg: 'transparent' }"
        :_active="{ bg: 'transparent' }"
        ariaLabel="Share"
        color="currentcolor"
        @click="() => copyLink(__location())"
      >
        <Share />
      </c-icon-button>
    </c-button-group>
  </c-stack>
</template>
