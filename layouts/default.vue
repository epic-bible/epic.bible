<script setup lang="ts">
import TopNavigation from "@/components/widgets/top-navigation.vue";
import Footer from "@/components/widgets/footer.vue";
</script>

<template>
  <div class="flex min-h-screen flex-col">
    <TopNavigation />
    <div class="mx-auto w-full max-w-3xl px-4 py-5">
      <NuxtLoadingIndicator :height="5" color="#1aff75" />
      <main>
        <slot />
      </main>
    </div>
    <Footer class="mt-auto" />
  </div>
</template>
