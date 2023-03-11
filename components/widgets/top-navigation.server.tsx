import { CHStack, chakra, CContainer } from "@chakra-ui/vue-next";
import { NuxtLink } from "#components";

const TopNavigation = defineComponent({
  name: "TopNavigation",
  setup() {
    return () => (
      <CContainer py={5}>
        <CHStack spacing={5}>
          <NuxtLink class="anchor" to="/">
            <chakra.p fontWeight={"bold"}>Home</chakra.p>
          </NuxtLink>
          <NuxtLink class="anchor" to="/about">
            <chakra.p fontWeight={"bold"}>About</chakra.p>
          </NuxtLink>
        </CHStack>
      </CContainer>
    );
  },
});

export default TopNavigation;
