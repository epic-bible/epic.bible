import {
  CStack,
  chakra,
  CBreadcrumb,
  CBreadcrumbItem,
  CHStack,
} from "@chakra-ui/vue-next";
import { PropType } from "vue";
import { NuxtLink } from "#components";
import { IVerses } from "@/types/models";

const Verses = defineComponent({
  name: "Verses",
  props: {
    verses: Object as PropType<IVerses[] | undefined>,
    book: String as PropType<string>,
    chapter: String as PropType<string>,
  },
  setup(props) {
    const verses = computed(() => props.verses || []);
    const bookAndChapter = computed(() => `${props?.book} ${props?.chapter}`);
    return () => (
      <CStack spacing={6}>
        {!!props.chapter && !!props.book && (
          <CBreadcrumb>
            <CBreadcrumbItem>
              <chakra.a
                _hover={{
                  textDecoration: "underline",
                  textDecorationStyle: "dashed",
                }}
                as={NuxtLink}
                textDecor={"none"}
              >
                KJV
              </chakra.a>
            </CBreadcrumbItem>
            <CBreadcrumbItem>
              <chakra.a
                as={NuxtLink}
                to={`/books/${encodeURIComponent(`${props.book}`)}`}
                textDecor={"none"}
                _hover={{
                  textDecoration: "underline",
                  textDecorationStyle: "dashed",
                }}
              >
                {props.book}
              </chakra.a>
            </CBreadcrumbItem>
            <CBreadcrumbItem>
              <chakra.a
                as={NuxtLink}
                // to={`/books/${encodeURIComponent(`${props.book}`)}/${
                //   props.chapter
                // }`}
                textDecor={"none"}
                fontWeight="bold"
              >
                {bookAndChapter.value}
              </chakra.a>
            </CBreadcrumbItem>
          </CBreadcrumb>
        )}
        {verses.value?.map((verse) => (
          <NuxtLink
            key={verse.ref}
            to={`/books/${verse.book}/${verse.chapter}/${verse.verse}`}
          >
            <CHStack>
              <chakra.sup mt={4}>{verse.verse}</chakra.sup>
              <chakra.p innerHTML={verse.text} />
            </CHStack>
          </NuxtLink>
        ))}
      </CStack>
    );
  },
});

export default Verses;
