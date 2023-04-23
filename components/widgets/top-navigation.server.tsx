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
  CTooltip,
} from "@chakra-ui/vue-next";
import MoonIcon from "../icons/moon";
import SunIcon from "../icons/sun";
import { NuxtLink } from "#components";
import { useAuth } from "@/hooks/use-auth";

const TopNavigation = defineComponent({
  name: "TopNavigation",
  setup() {
    const { toggleColorMode } = useColorMode();

    const { login, user, logout } = useAuth();

    return () => (
      <CContainer py={5} maxW={"3xl"}>
        <CFlex justifyContent={"space-between"}>
          <CHStack spacing={5}>
            <chakra.p
              as={NuxtLink}
              textStyle="anchor"
              // @ts-expect-error to attribute
              to="/"
              fontWeight={"bold"}
            >
              Home
            </chakra.p>
            <chakra.p
              as={NuxtLink}
              textStyle="anchor"
              // @ts-expect-error to attribute
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
            >
              {useColorModeValue(<MoonIcon />, <SunIcon />).value}
            </CIconButton>
            {user?.value ? (
              <>
                <CTooltip placement="bottom" hasArrow label="Logout">
                  <CButton
                    variant={"ghost"}
                    _hover={{ bg: "transparent" }}
                    _active={{ bg: "transparent" }}
                    onClick={logout}
                    type="button"
                  >
                    <CHStack as="span" alignItems={"center"}>
                      <CAvatar
                        size={"sm"}
                        name={user.value.name}
                        src={user.value.avatar_url}
                        // @ts-expect-error referrerpolicy is not included in IntrinsicAttributes
                        referrerpolicy="no-referrer"
                      />
                      <CText>{user.value.name}</CText>
                    </CHStack>
                  </CButton>
                </CTooltip>
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
