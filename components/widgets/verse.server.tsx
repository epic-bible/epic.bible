import {
  canUseDOM,
  CBreadcrumb,
  CBreadcrumbItem,
  CButtonGroup,
  chakra,
  CHeading,
  CHStack,
  CIconButton,
  CStack,
} from "@chakra-ui/vue-next";
import { PropType } from "vue";
import CopyIcon from "../icons/copy";
import CopyCheckIcon from "../icons/copy-check";
import LinkIcon from "../icons/link";
import { IVerses } from "@/types/models";
import { NuxtLink } from "#components";

const Verse = defineComponent({
  name: "Verse",
  props: {
    verse: Object as PropType<IVerses | null>,
  },
  setup(props) {
    const pageTitle = computed(() => `${props.verse?.ref} ${props.verse?._v}`);
    const bookAndChapter = computed(
      () => `${props.verse?.book} ${props.verse?.chapter}`
    );
    const Copy = ref(CopyIcon);
    const Share = ref(LinkIcon);

    async function copyVerse(text: string) {
      await navigator.clipboard.writeText(text);
      Copy.value = CopyCheckIcon;
      setTimeout(() => {
        Copy.value = CopyIcon;
      }, 1000);
    }
    async function copyLink(text: string) {
      await navigator.clipboard.writeText(text);
      Share.value = CopyCheckIcon;
      setTimeout(() => {
        Share.value = LinkIcon;
      }, 1000);
    }

    return () => (
      <>
        {props.verse && (
          <CStack spacing={10}>
            <CHStack>
              <CBreadcrumb>
                <CBreadcrumbItem>
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
                    KJV
                  </chakra.a>
                </CBreadcrumbItem>
                <CBreadcrumbItem>
                  <chakra.a
                    as={NuxtLink}
                    to={`/books/${encodeURIComponent(`${props.verse.book}`)}`}
                    textDecor={"none"}
                    _hover={{
                      textDecoration: "underline",
                      textDecorationStyle: "dashed",
                      textDecorationThickness: "1px",
                      textUnderlineOffset: "3px",
                    }}
                  >
                    {props.verse.book}
                  </chakra.a>
                </CBreadcrumbItem>
                <CBreadcrumbItem>
                  <chakra.a
                    as={NuxtLink}
                    to={`/books/${encodeURIComponent(
                      `${props.verse.book}`
                    )}/${encodeURIComponent(`${props.verse.chapter}`)}`}
                    textDecor={"none"}
                    fontWeight="bold"
                  >
                    {bookAndChapter.value}
                  </chakra.a>
                </CBreadcrumbItem>
              </CBreadcrumb>
            </CHStack>
            <CHeading>{pageTitle.value}</CHeading>
            <chakra.p fontSize={"xl"} innerHTML={props.verse.text} />
            <CButtonGroup spacing={5} variant="outline">
              <CIconButton
                rounded="lg"
                _hover={{ bg: "transparent" }}
                _active={{ bg: "transparent" }}
                icon={<Copy.value />}
                ariaLabel="Copy"
                color="currentcolor"
                onClick={() =>
                  copyVerse(
                    `${props.verse!.ref} ${props.verse!._v} - ${
                      props.verse!.text
                    }`
                  )
                }
              />
              <CIconButton
                rounded="lg"
                _hover={{ bg: "transparent" }}
                _active={{ bg: "transparent" }}
                icon={<Share.value />}
                ariaLabel="Share"
                color="currentcolor"
                onClick={() =>
                  copyLink(canUseDOM() ? window.location.href : "")
                }
              />
            </CButtonGroup>
          </CStack>
        )}
      </>
    );
  },
});

export default Verse;
