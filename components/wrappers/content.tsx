import { chakra } from "@chakra-ui/vue-next";

const Markdown = defineComponent((_, { slots }) => {
  return () => (
    <chakra.main class="chakra-prose">{slots.default?.()}</chakra.main>
  );
});

export default Markdown;
