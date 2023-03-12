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
            <chakra.p
              as={NuxtLink}
              textStyle="anchor"
              to="/"
              fontWeight={"bold"}
            >
              Home
            </chakra.p>
            <chakra.p
              as={NuxtLink}
              textStyle="anchor"
              to="/about"
              fontWeight={"bold"}
            >
              About
            </chakra.p>
          </CHStack>
          <CHStack>
            <CIconButton
              onClick={toggleColorMode}
              ariaLabel="Switch color mode"
              variant="outline"
              size="sm"
              _hover={{ bg: "transparent" }}
              _active={{ bg: "transparent" }}
              type="button"
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
