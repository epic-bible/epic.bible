import { NuxtLoadingIndicator } from "#components"
import { chakra } from "@chakra-ui/vue-next"

export default defineComponent({
  name: "DefaultLayout",
  setup(_, { slots }) {
    return () => (
      <chakra.div>
        <NuxtLoadingIndicator color="#1aff75" />
        <chakra.main>
          {slots.default?.()}
        </chakra.main>
      </chakra.div>
    )
  }
})