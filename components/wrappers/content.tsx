import { epic } from '@/panda/jsx'
import { content } from '@/theme/content'

const Markdown = defineComponent((_, { slots }) => {
  return () => (
    <epic.main minH="100vh" bg="orange.50">
      {slots.default?.()}
    </epic.main>
  )
})

export default Markdown