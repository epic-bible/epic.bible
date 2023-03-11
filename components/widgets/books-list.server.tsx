import { CWrap, CWrapItem, CButton } from "@chakra-ui/vue-next";
import { useSupabase } from "@/hooks/use-supabase";

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
            <CButton
              size="sm"
              colorScheme={"epic"}
              variant="outline"
              rounded="full"
            >
              {book.name}
            </CButton>
          </CWrapItem>
        ))}
      </CWrap>
    );
  },
});

export default BooksListWidget;
