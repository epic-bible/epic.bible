import { NuxtLoadingIndicator } from "#components"
import { epic } from '@/panda/jsx'
import { content } from '@/panda/recipes'

export default defineComponent({
  name: "DefaultLayout",
  setup(_, { slots }) {
    return () => (
      <epic.div>
        <NuxtLoadingIndicator color="#1aff75" />
        <epic.main class={content()}>
          {slots.default?.()}
        </epic.main>
      </epic.div>
    )
  }
})