import { chakra, CContainer } from "@chakra-ui/vue-next";
import { NuxtLoadingIndicator } from "#components";

export default defineComponent({
  name: "DefaultLayout",
  setup(_, { slots }) {
    return () => (
      <chakra.div>
        <CContainer minH="100vh" py={{ base: 5, sm: 24 }} mx="auto">
          <NuxtLoadingIndicator color="#1aff75" />
          <chakra.main>{slots.default?.()}</chakra.main>
        </CContainer>
      </chakra.div>
    );
  },
});
