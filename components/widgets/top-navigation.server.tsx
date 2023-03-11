import {
  CHStack,
  chakra,
  CContainer,
  CFlex,
  CIconButton,
  useColorMode,
} from "@chakra-ui/vue-next";
import { NuxtLink } from "#components";

const TopNavigation = defineComponent({
  name: "TopNavigation",
  setup() {
    const { toggleColorMode } = useColorMode();
    return () => (
      <CContainer py={5}>
        <CFlex justifyContent={"space-between"}>
          <CHStack spacing={5}>
            <NuxtLink class="anchor" to="/">
              <chakra.p fontWeight={"bold"}>Home</chakra.p>
            </NuxtLink>
            <NuxtLink class="anchor" to="/about">
              <chakra.p fontWeight={"bold"}>About</chakra.p>
            </NuxtLink>
          </CHStack>
          <CHStack>
            <CIconButton
              onClick={toggleColorMode}
              icon={"sun"}
              ariaLabel="Switch color mode"
              variant="outline"
              size="sm"
            />
          </CHStack>
        </CFlex>
      </CContainer>
    );
  },
});

export default TopNavigation;
