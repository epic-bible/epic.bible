import {
  chakra,
  CBreadcrumb,
  CBreadcrumbItem,
  CHeading,
  CIconButton,
  CStack,
  CWrap,
  CWrapItem,
} from "@chakra-ui/vue-next";
import { PropType } from "vue";
import { NuxtLink } from "#components";

import { IBook } from "@/types/models";

const Book = defineComponent({
  name: "Book",
  props: {
    book: Object as PropType<IBook | null>,
  },
  setup(props) {
    const chapters = computed(() =>
      Array.from({ length: props.book?.chapters || 0 }).map((_, i) => i + 1)
    );
    const encodedName = computed(() =>
      encodeURIComponent(`${props.book?.name}`)
    );
    return () => (
      <CStack spacing={10}>
        {props.book?.name && (
          <>
            <CBreadcrumb>
              <CBreadcrumbItem>
                <chakra.a
                  as={NuxtLink}
                  to="/"
                  textDecor={"none"}
                  _hover={{
                    textDecoration: "underline",
                    textDecorationStyle: "dashed",
                    textDecorationThickness: "1px",
                    textUnderlineOffset: "3px",
                  }}
                >
                  KJV
                </chakra.a>
              </CBreadcrumbItem>
              <CBreadcrumbItem>
                <chakra.a
                  as={NuxtLink}
                  to={`/books/${encodedName.value}`}
                  textDecor={"none"}
                  fontWeight="bold"
                  _hover={{
                    textDecoration: "underline",
                    textDecorationStyle: "dashed",
                    textDecorationThickness: "1px",
                    textUnderlineOffset: "3px",
                  }}
                >
                  {props.book.name}
                </chakra.a>
              </CBreadcrumbItem>
            </CBreadcrumb>
          </>
        )}
        {props.book && (
          <>
            <CHeading as="h1">{props.book?.name}</CHeading>
            <CWrap spacing={6}>
              {chapters.value?.map((chapter) => (
                <CWrapItem key={chapter}>
                  <CIconButton
                    as={NuxtLink}
                    to={`/books/${props.book?.name}/${chapter}`}
                    variant="outline"
                    rounded="none"
                    size="lg"
                    ariaLabel={`Chapter ${chapter}`}
                    _hover={{ bg: "transparent" }}
                    _active={{ bg: "transparent" }}
                  >
                    {chapter}
                  </CIconButton>
                </CWrapItem>
              ))}
            </CWrap>
          </>
        )}
      </CStack>
    );
  },
});

export default Book;
