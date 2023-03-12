import {
  chakra,
  CStack,
  CLink,
  CContainer,
  CCenter,
  CHStack,
  CText,
  CVisuallyHidden,
} from "@chakra-ui/vue-next";
import NuxtLogo from "../icons/nuxt-logo";
import { NuxtLink, NuxtTime } from "#components";

const BottomFooter = defineComponent({
  name: "BottomFooter",
  setup() {
    return () => {
      return (
        <CContainer py={5} maxW={"3xl"}>
          <CStack>
            <CCenter>
              <CHStack>
                <chakra.a
                  as={NuxtLink}
                  to="/"
                  _hover={{
                    textDecoration: "underline",
                    textDecorationStyle: "dashed",
                    textDecorationThickness: "1px",
                    textUnderlineOffset: "3px",
                  }}
                  textDecor={"none"}
                >
                  Home
                </chakra.a>
                <CLink
                  _hover={{
                    textDecoration: "underline",
                    textDecorationStyle: "dashed",
                    textDecorationThickness: "1px",
                    textUnderlineOffset: "3px",
                  }}
                  textDecor={"none"}
                  href={"https://github.com/epic-bible/epic.bible"}
                  isExternal
                >
                  GitHub
                </CLink>
                <CLink
                  _hover={{
                    textDecoration: "underline",
                    textDecorationStyle: "dashed",
                    textDecorationThickness: "1px",
                    textUnderlineOffset: "3px",
                  }}
                  textDecor={"none"}
                  href={"https://twitter.com/codebender828"}
                  isExternal
                >
                  Twitter
                </CLink>
                <CLink
                  _hover={{
                    textDecoration: "underline",
                    textDecorationStyle: "dashed",
                    textDecorationThickness: "1px",
                    textUnderlineOffset: "3px",
                  }}
                  textDecor={"none"}
                  href={"mailto://excellence@jbakebwa.dev"}
                  isExternal
                >
                  Email
                </CLink>
              </CHStack>
            </CCenter>
            <CCenter fontSize="sm" opacity={0.8}>
              <CHStack>
                <CText>
                  © <NuxtTime datetime={Date.now()} year={"numeric"} /> Epic
                  Bible &nbsp; | &nbsp;
                </CText>
                <CHStack spacing={1} alignItems="center">
                  <CText>Powered by</CText>&nbsp;
                  <CLink
                    _hover={{
                      textDecoration: "underline",
                      textDecorationStyle: "dashed",
                      textDecorationThickness: "1px",
                      textUnderlineOffset: "3px",
                    }}
                    textDecor={"none"}
                  >
                    <CVisuallyHidden>Nuxt.js</CVisuallyHidden>
                    <NuxtLogo width="auto" height="12px" />
                  </CLink>
                </CHStack>
                <CText>|</CText>
                <CText>
                  Made with 💚 by &nbsp;
                  <CLink
                    _hover={{
                      textDecoration: "underline",
                      textDecorationStyle: "dashed",
                      textDecorationThickness: "1px",
                      textUnderlineOffset: "3px",
                    }}
                    textDecor={"none"}
                    href="https://jbakebwa.dev"
                    isExternal
                  >
                    Jonathan Bakebwa
                  </CLink>
                </CText>
              </CHStack>
            </CCenter>
          </CStack>
        </CContainer>
      );
    };
  },
});

export default BottomFooter;
