import { NuxtLoadingIndicator } from "#components"
import { chakra } from "@chakra-ui/vue-next"

export default defineComponent({
  name: "DefaultLayout",
  setup(_, { slots }) {
    return () => (
      <chakra.div minH="100vh">
        <NuxtLoadingIndicator color="#1aff75" />
        <chakra.div pt="24" />
        <chakra.main>
          {slots.default?.()}
        </chakra.main>
        <chakra.div pt="24" />
      </chakra.div>
    )
  }
})