import { CWrap, CWrapItem, CButton } from "@chakra-ui/vue-next";
import { useSupabase } from "@/hooks/use-supabase";
import { NuxtLink } from "#components";

const BooksListWidget = defineComponent({
  setup() {
    const supabase = useSupabase();
    const { data: books } = useAsyncData("books", async () => {
      const { data } = await supabase.from("Books").select("*");
      return data;
    });
    return () => (
      <CWrap spacing={4}>
        {books.value?.map((book, i) => (
          <CWrapItem key={i}>
            <NuxtLink to={`/books/${book.name}`}>
              <CButton
                size="sm"
                variant="outline"
                rounded="full"
                colroScheme={"green"}
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
