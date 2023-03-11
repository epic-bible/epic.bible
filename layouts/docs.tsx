import { chakra, CContainer } from "@chakra-ui/vue-next";
import { NuxtLoadingIndicator } from "#components";
import TopNavigation from "@/components/widgets/top-navigation.server";

export default defineComponent({
  name: "DocsLayout",
  setup(_, { slots }) {
    return () => (
      <chakra.div>
        <TopNavigation />
        <CContainer minH="100vh" py={5} mx="auto">
          <NuxtLoadingIndicator color="#1aff75" throttle={5000} />
          <chakra.main class="chakra-prose">{slots.default?.()}</chakra.main>
        </CContainer>
      </chakra.div>
    );
  },
});
