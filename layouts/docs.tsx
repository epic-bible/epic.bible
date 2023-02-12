import { NuxtLoadingIndicator } from "#components"
import { epic } from '@/panda/jsx'
import { content } from '@/panda/recipes'

export default defineComponent({
  name: "DefaultLayout",
  setup(_, { slots }) {
    return () => (
      <epic.div minH="100vh">
        <NuxtLoadingIndicator color="#1aff75" />
        <epic.div pt="24" />
        <epic.main class={content()}>
          {slots.default?.()}
        </epic.main>
      </epic.div>
    )
  }
})