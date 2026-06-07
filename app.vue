<script setup lang="ts">
import { TooltipProvider } from "@/components/ui/tooltip";
import CookieConsent from "@/components/widgets/cookie-consent.vue";
</script>

<template>
  <TooltipProvider :delay-duration="200">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
    <CookieConsent />
  </TooltipProvider>
</template>
