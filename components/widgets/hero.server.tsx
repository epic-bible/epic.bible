import { CHeading, CStack } from "@chakra-ui/vue-next";
import BooksListWidget from "./books-list.server";

const Hero = defineComponent({
  name: "Hero",
  setup() {
    return () => (
      <CStack spacing={6}>
        <CHeading fontSize={"3rem"}>Welcome to Epic Bible</CHeading>
        <BooksListWidget />
      </CStack>
    );
  },
});

export default Hero;
