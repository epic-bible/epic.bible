import {
  CHStack,
  chakra,
  CContainer,
  CFlex,
  CIconButton,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/vue-next";
import MoonIcon from "../icons/moon";
import SunIcon from "../icons/sun";
import { NuxtLink } from "#components";

const TopNavigation = defineComponent({
  name: "TopNavigation",
  setup() {
    const { toggleColorMode } = useColorMode();
    return () => (
      <CContainer py={5} maxW={"3xl"}>
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
              ariaLabel="Switch color mode"
              variant="outline"
              size="sm"
              _hover={{ bg: "transparent" }}
              _active={{ bg: "transparent" }}
            >
              {useColorModeValue(<MoonIcon />, <SunIcon />).value}
            </CIconButton>
          </CHStack>
        </CFlex>
      </CContainer>
    );
  },
});

export default TopNavigation;
