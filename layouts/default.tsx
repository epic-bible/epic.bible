import { NuxtLoadingIndicator } from "#components";
import TopNavigation from "@/components/widgets/top-navigation.server";
import BottomFooter from "@/components/widgets/footer.server";

export default defineComponent({
  name: "DefaultLayout",
  setup(_, { slots }) {
    return () => (
      <div class="flex flex-col min-h-screen">
        <TopNavigation />
        <div class="mx-auto max-w-3xl py-5">
          <NuxtLoadingIndicator height={5} color="#1aff75" />
          <main>{slots.default?.()}</main>
        </div>
        <BottomFooter class="mt-auto" />
      </div>
    );
  },
});
