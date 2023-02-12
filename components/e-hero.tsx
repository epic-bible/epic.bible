import { stack } from '@/panda/patterns'
import { epic } from '@/panda/jsx'
import EButton from './ui/e-button'

const EHero = defineComponent(() => {
  return () => (
    <epic.div class={stack({ direction: "row"})}>
      <EButton>
        Go to App
      </EButton>
      <EButton>
        Go to App
      </EButton>
    </epic.div>
  )
})

EHero.name = "EHero"

export default EHero
