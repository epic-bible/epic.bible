import { chakra } from "@chakra-ui/vue-next";
import { NuxtLoadingIndicator } from "#components";

export default defineComponent({
  name: "DefaultLayout",
  setup(_, { slots }) {
    return () => (
      <chakra.div>
        <NuxtLoadingIndicator color="#1aff75" throttle={5000} />
        <chakra.main>{slots.default?.()}</chakra.main>
      </chakra.div>
    );
  },
});
