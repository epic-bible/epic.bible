import { CWrap, CWrapItem, CButton } from "@chakra-ui/vue-next";
import { NuxtLink } from "#components";
import { IBook } from "@/types/models";

const BooksListWidget = defineComponent({
  name: "BooksListWidget",
  props: {
    books: {
      type: Array as PropType<IBook[]>,
      default: () => [],
    },
  },
  setup(props) {
    const books = computed(() => props.books);
    return () => (
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
    );
  },
});

export default BooksListWidget;
