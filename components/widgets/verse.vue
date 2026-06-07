<script setup lang="ts">
import { computed, shallowRef } from "vue";
import { Copy, CopyCheck, Link2 } from "lucide-vue-next";
import { Button } from "@/components/ui/button";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { useKeyboardShortcuts } from "@/composables/use-keyboard-shortcuts";
import { useAnalytics } from "@/composables/useAnalytics";
import { useSupabase } from "@/hooks/use-supabase";
import type { IVerses } from "@/types/models";

const props = defineProps<{
  verse: IVerses | null;
}>();

const supabase = useSupabase();
const { trackEvent } = useAnalytics();

const pageTitle = computed(() => `${props.verse?.ref} ${props.verse?._v}`);
const bookAndChapter = computed(
  () => `${props.verse?.book} ${props.verse?.chapter}`
);

const CopyIconRef = shallowRef(Copy);
const ShareIconRef = shallowRef(Link2);

async function copyVerse(text: string) {
  await navigator.clipboard.writeText(text);
  trackEvent("copy_verse", { ref: props.verse?.ref });
  CopyIconRef.value = CopyCheck;
  setTimeout(() => {
    CopyIconRef.value = Copy;
  }, 1000);
}

async function copyLink(text: string) {
  await navigator.clipboard.writeText(text);
  trackEvent("share_verse", { ref: props.verse?.ref });
  ShareIconRef.value = CopyCheck;
  setTimeout(() => {
    ShareIconRef.value = Link2;
  }, 1000);
}

const currentLocation = () =>
  import.meta.client ? window.location.href : "";

const res = await useAsyncData(
  `${props.verse?.book}:${props.verse?.chapter}`,
  async () => {
    const { data, error } = await supabase
      .from("Verses")
      .select("id", { count: "exact" })
      .eq("book", props.verse?.book ?? "")
      .eq("chapter", props.verse?.chapter ?? 0);
    if (error) throw error;
    return data ?? [];
  }
);

const chapterLength = computed(() => res.data.value?.length || 0);

const router = useRouter();
useKeyboardShortcuts({
  ArrowRight: () =>
    router.replace({
      params: {
        book: props.verse?.book,
        chapter: props.verse?.chapter,
        verse:
          props.verse!.verse + 1 <= chapterLength.value
            ? props.verse!.verse + 1
            : props.verse!.verse,
      },
    }),
  ArrowLeft: () =>
    router.replace({
      params: {
        book: props.verse?.book,
        chapter: props.verse?.chapter,
        verse:
          props.verse!.verse - 1 >= 1
            ? props.verse!.verse - 1
            : props.verse!.verse,
      },
    }),
  ArrowUp: () =>
    router.replace({
      params: {
        book: props.verse?.book,
        chapter: props.verse?.chapter,
        verse:
          props.verse!.verse - 1 >= 1
            ? props.verse!.verse - 1
            : props.verse!.verse,
      },
    }),
  ArrowDown: () =>
    router.replace({
      params: {
        book: props.verse?.book,
        chapter: props.verse?.chapter,
        verse:
          props.verse!.verse + 1 <= chapterLength.value
            ? props.verse!.verse + 1
            : props.verse!.verse,
      },
    }),
});
</script>

<template>
  <div class="flex flex-col gap-10">
    <div class="flex items-center">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink as-child class="link-dashed">
              <NuxtLink to="/">KJV</NuxtLink>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink as-child class="link-dashed">
              <NuxtLink :to="`/books/${encodeURIComponent(`${verse?.book}`)}`">
                {{ verse?.book }}
              </NuxtLink>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink as-child class="link-dashed">
              <NuxtLink
                :to="`/books/${encodeURIComponent(
                  `${verse?.book}`
                )}/${encodeURIComponent(`${verse?.chapter}`)}`"
              >
                {{ bookAndChapter }}
              </NuxtLink>
            </BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    </div>

    <h1 class="text-4xl font-bold">{{ pageTitle }}</h1>

    <p class="text-xl" v-html="verse?.text" />

    <div class="flex items-center gap-5">
      <Button
        variant="outline"
        size="icon"
        class="rounded-lg hover:bg-transparent active:bg-transparent"
        aria-label="Copy"
        @click="
          copyVerse(
            `${props.verse!.ref} ${props.verse!._v} - ${props.verse!.text}`
          )
        "
      >
        <component :is="CopyIconRef" class="h-5 w-5" />
      </Button>
      <Button
        variant="outline"
        size="icon"
        class="rounded-lg hover:bg-transparent active:bg-transparent"
        aria-label="Share"
        @click="copyLink(currentLocation())"
      >
        <component :is="ShareIconRef" class="h-5 w-5" />
      </Button>
    </div>
  </div>
</template>
