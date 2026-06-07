<script setup lang="ts">
import { computed } from "vue";
import { Moon, Sun } from "lucide-vue-next";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useAuth } from "@/hooks/use-auth";

const colorMode = useColorMode();
const { login, user, logout } = useAuth();

function toggleColorMode() {
  colorMode.preference = colorMode.value === "dark" ? "light" : "dark";
}

const initials = computed(() => {
  const name = user.value?.name ?? "";
  return name
    .split(" ")
    .map((part: string) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
});
</script>

<template>
  <header class="container mx-auto max-w-3xl py-5">
    <div class="flex items-center justify-between">
      <nav class="flex items-center gap-5">
        <NuxtLink to="/" class="font-bold link-dashed">Home</NuxtLink>
        <NuxtLink to="/about" class="font-bold link-dashed">About</NuxtLink>
      </nav>
      <div class="flex items-center gap-5">
        <Button
          variant="ghost"
          size="icon"
          type="button"
          aria-label="Switch color mode"
          @click="toggleColorMode"
        >
          <ClientOnly>
            <Sun v-if="colorMode.value === 'dark'" class="h-5 w-5" />
            <Moon v-else class="h-5 w-5" />
            <template #fallback>
              <Moon class="h-5 w-5" />
            </template>
          </ClientOnly>
        </Button>

        <template v-if="user">
          <Tooltip>
            <TooltipTrigger as-child>
              <Button
                variant="ghost"
                type="button"
                class="hover:bg-transparent active:bg-transparent"
                @click="logout"
              >
                <span class="flex items-center gap-2">
                  <Avatar class="h-8 w-8">
                    <AvatarImage
                      :src="user.avatar_url"
                      :alt="user.name"
                      referrerpolicy="no-referrer"
                    />
                    <AvatarFallback>{{ initials }}</AvatarFallback>
                  </Avatar>
                  <span>{{ user.name }}</span>
                </span>
              </Button>
            </TooltipTrigger>
            <TooltipContent side="bottom">Logout</TooltipContent>
          </Tooltip>
        </template>
        <template v-else>
          <Button size="sm" type="button" @click="login">Login</Button>
        </template>
      </div>
    </div>
  </header>
</template>
