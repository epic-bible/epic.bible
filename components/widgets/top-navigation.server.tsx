import {
  CHStack,
  chakra,
  CContainer,
  CFlex,
  CIconButton,
  useColorMode,
  useColorModeValue,
  CButton,
  CAvatar,
  CText,
} from "@chakra-ui/vue-next";
import MoonIcon from "../icons/moon";
import SunIcon from "../icons/sun";
import { NuxtLink } from "#components";
import { useAuth } from "@/hooks/use-auth";

const TopNavigation = defineComponent({
  name: "TopNavigation",
  setup() {
    const { toggleColorMode } = useColorMode();

    const { login, user } = useAuth();

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
          <CHStack spacing={5}>
            <CIconButton
              onClick={toggleColorMode}
              ariaLabel="Switch color mode"
              type="button"
              size="sm"
              variant="outline"
              _hover={{ bg: "transparent" }}
              _active={{ bg: "transparent" }}
            >
              {useColorModeValue(<MoonIcon />, <SunIcon />).value}
            </CIconButton>
            {user?.value ? (
              <>
                <CHStack alignItems={"center"}>
                  <CAvatar
                    size={"sm"}
                    name={user.value.name}
                    src={user.value.avatar_url}
                    referrerpolicy="no-referrer"
                  />
                  <CText>{user.value.name}</CText>
                </CHStack>
              </>
            ) : (
              <CButton size="sm" type="button" onClick={login}>
                Login
              </CButton>
            )}
          </CHStack>
        </CFlex>
      </CContainer>
    );
  },
});

export default TopNavigation;
