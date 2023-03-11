import { chakra, CContainer } from "@chakra-ui/vue-next";
import { NuxtLoadingIndicator } from "#components";

export default defineComponent({
  name: "DocsLayout",
  setup(_, { slots }) {
    return () => (
      <chakra.div>
        <CContainer minH="100vh" py={{ base: 5, sm: 9 }} mx="auto">
          <NuxtLoadingIndicator color="#1aff75" throttle={5000} />
          <chakra.main>{slots.default?.()}</chakra.main>
        </CContainer>
      </chakra.div>
    );
  },
});
