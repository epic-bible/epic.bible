import { epic } from '@/panda/jsx'
import { content } from "@/panda/recipes"

const Markdown = defineComponent((_, { slots }) => {
  return () => (
    <epic.main class={content()}>
      {slots.default?.()}
    </epic.main>
  )
})

export default Markdown