import {
  CHeading,
  CStack,
  CWrap,
  CWrapItem,
  CButton,
} from "@chakra-ui/vue-next";
import { NuxtLink } from "#components";
import { IBook } from "@/types/models";

const Hero = defineComponent({
  name: "Hero",
  props: {
    books: {
      type: Array as PropType<IBook[] | null>,
      default: () => [],
    },
  },
  setup(props) {
    const books = computed(() => props.books || []);
    return () => (
      <CStack spacing={6}>
        <CHeading fontSize={"3rem"}>Welcome to Epic Bible</CHeading>
        <CWrap spacing={4}>
          {books.value?.map((book, i) => (
            <CWrapItem key={i}>
              <NuxtLink to={`/books/${book.name}`}>
                <CButton
                  size="md"
                  variant="outline"
                  rounded="full"
                  _hover={{ bg: "transparent" }}
                  _active={{ bg: "transparent" }}
                >
                  {book.name}
                </CButton>
              </NuxtLink>
            </CWrapItem>
          ))}
        </CWrap>
      </CStack>
    );
  },
});

export default Hero;
