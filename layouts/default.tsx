import { chakra, CContainer } from "@chakra-ui/vue-next";
import { NuxtLoadingIndicator } from "#components";
import TopNavigation from "@/components/widgets/top-navigation.server";
import BottomFooter from "@/components/widgets/footer.server";

export default defineComponent({
  name: "DefaultLayout",
  setup(_, { slots }) {
    return () => (
      <chakra.div minH="100vh" display="flex" flexDir={"column"}>
        <TopNavigation />
        <CContainer py={5} mx="auto">
          <NuxtLoadingIndicator color="#1aff75" />
          <chakra.main>{slots.default?.()}</chakra.main>
        </CContainer>
        <BottomFooter mt="auto" />
      </chakra.div>
    );
  },
});
