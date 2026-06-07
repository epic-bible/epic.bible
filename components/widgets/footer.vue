<script setup lang="ts">
import { computed } from "vue";

const year = computed(() => new Date().getFullYear());
</script>

<template>
  <footer class="container mx-auto max-w-3xl py-5">
    <div class="flex flex-col gap-2">
      <div class="flex items-center justify-center gap-4">
        <NuxtLink to="/" class="link-dashed">Home</NuxtLink>
        <a
          href="https://github.com/epic-bible/epic.bible"
          target="_blank"
          rel="noopener noreferrer"
          class="link-dashed"
          >GitHub</a
        >
        <a
          href="https://twitter.com/codebender828"
          target="_blank"
          rel="noopener noreferrer"
          class="link-dashed"
          >Twitter</a
        >
        <a href="mailto:excellence@jbakebwa.dev" class="link-dashed">Email</a>
      </div>

      <div
        class="flex flex-wrap items-center justify-center gap-1 text-sm opacity-80"
      >
        <span>© {{ year }} Epic Bible</span>
        <span>|</span>
        <span class="inline-flex items-center gap-1">
          Made with 💚 by
          <a
            href="https://jbakebwa.dev"
            target="_blank"
            rel="noopener noreferrer"
            class="link-dashed"
            >Jonathan Bakebwa</a
          >
        </span>
      </div>
    </div>
  </footer>
</template>
