import { chakra } from "@chakra-ui/vue-next";

export default defineComponent(() => {
  return () => (
    <chakra.main minH="100vh" bg="orange.50">
      Hello World
    </chakra.main>
  );
});
