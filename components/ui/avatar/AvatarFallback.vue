<script setup lang="ts">
import { computed, type HTMLAttributes } from "vue";
import { AvatarFallback, type AvatarFallbackProps } from "radix-vue";
import { cn } from "@/lib/utils";

const props = defineProps<
  AvatarFallbackProps & { class?: HTMLAttributes["class"] }
>();

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props;
  return delegated;
});
</script>

<template>
  <AvatarFallback
    v-bind="delegatedProps"
    :class="
      cn(
        'flex h-full w-full items-center justify-center rounded-full bg-muted',
        props.class
      )
    "
  >
    <slot />
  </AvatarFallback>
</template>
