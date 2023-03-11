import { chakra, CContainer } from "@chakra-ui/vue-next";
import { NuxtLoadingIndicator } from "#components";
import TopNavigation from "@/components/widgets/top-navigation.server";
import BottomFooter from "@/components/widgets/footer.server";

export default defineComponent({
  name: "DocsLayout",
  setup(_, { slots }) {
    return () => (
      <chakra.div display="flex" flexDir={"column"}>
        <TopNavigation />
        <CContainer minH="100vh" py={5} mx="auto" maxW={"3xl"}>
          <NuxtLoadingIndicator color="#1aff75" throttle={5000} />
          <chakra.main class="chakra-prose">{slots.default?.()}</chakra.main>
        </CContainer>
        <BottomFooter mt="auto" />
      </chakra.div>
    );
  },
});
