import {
  CBreadcrumb,
  CBreadcrumbItem,
  chakra,
  CHeading,
  CHStack,
  CStack,
} from "@chakra-ui/vue-next";
import { PropType } from "vue";
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
    return () => (
      <>
        {props.verse && (
          <CStack spacing={10}>
            <CHStack>
              <CBreadcrumb>
                <CBreadcrumbItem>
                  <chakra.a as={NuxtLink} to="/" textDecor={"none"}>
                    KJV
                  </chakra.a>
                </CBreadcrumbItem>
                <CBreadcrumbItem>
                  <chakra.a
                    as={NuxtLink}
                    to={`/books/${encodeURIComponent(`${props.verse.book}`)}`}
                    textDecor={"none"}
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
                  >
                    {bookAndChapter.value}
                  </chakra.a>
                </CBreadcrumbItem>
              </CBreadcrumb>
            </CHStack>
            <CHeading>{pageTitle.value}</CHeading>
            <chakra.p fontSize={"xl"} innerHTML={props.verse.text} />
          </CStack>
        )}
      </>
    );
  },
});

export default Verse;
