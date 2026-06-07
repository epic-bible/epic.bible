<script setup lang="ts">
import { Button } from "@/components/ui/button";
import { useCookieConsent } from "@/composables/useCookieConsent";

const { decided, accept, decline } = useCookieConsent();
</script>

<template>
  <ClientOnly>
    <div
      v-if="!decided"
      class="fixed inset-x-0 bottom-0 z-50 p-4 duration-300 animate-in fade-in sm:inset-x-auto sm:bottom-4 sm:left-1/2 sm:w-[26rem] sm:max-w-[calc(100vw-2rem)] sm:-translate-x-1/2"
      role="region"
      aria-label="Cookie consent"
    >
      <div
        class="rounded-lg border bg-card p-4 text-card-foreground shadow-lg"
      >
        <p class="text-sm leading-relaxed">
          We use cookies to understand how Epic Bible is used so we can make it
          better. Nothing is tracked until you accept.
        </p>
        <div class="mt-3 flex items-center justify-end gap-2">
          <Button variant="ghost" size="sm" type="button" @click="decline">
            Decline
          </Button>
          <Button size="sm" type="button" @click="accept"> Accept </Button>
        </div>
      </div>
    </div>
  </ClientOnly>
</template>
