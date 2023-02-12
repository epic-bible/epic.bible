import { epic, HTMLEpicProps } from '@/panda/jsx';
import { button, ButtonVariants } from '@/panda/recipes';
import { defineComponent, type VNode, type PropType, cloneVNode } from "vue"
import { getValidChildren } from '@/utils/vue/vnode';

type ButtonContentProps = {
  leftIcon?: VNode
  rightIcon?: VNode
}

export type ButtonProps = HTMLEpicProps<'button'> & ButtonVariants & ButtonContentProps

const EButton = defineComponent({
  name: 'EButton',
  props: {
    leftIcon: Object as PropType<VNode>,
    rightIcon: Object as PropType<VNode>,
    variant: String as PropType<ButtonVariants['variant']>,
    size: String as PropType<ButtonVariants['size']>,
  },
  setup(props, { slots, attrs }) {

    return () => {
      const { variant, size, leftIcon, rightIcon, ...rest } = props
      return (
        <epic.button
          class={button({ variant, size })}
          {...rest}
          data-scope="button"
          data-part="root"
        >
          <ButtonContent leftIcon={leftIcon} rightIcon={rightIcon}>
            {slots?.default?.()}
          </ButtonContent>
        </epic.button>
      )
    }
  }
})


const ButtonContent = defineComponent({
  name: "ButtonContent",
  inheritAttrs: false,
  props: {
    leftIcon: Object as PropType<VNode>,
    rightIcon: Object as PropType<VNode>,
  },
  setup(props, { slots }) {
    return () => {
      const { leftIcon, rightIcon } = props
      return (
        <>
          {leftIcon && <ButtonIcon mr="var(--icon-spacing)">{leftIcon}</ButtonIcon>}
          {slots?.default?.()}
          {rightIcon && <ButtonIcon ml="var(--icon-spacing)">{rightIcon}</ButtonIcon>}
        </>
      )
    }
  }
})

const ButtonIcon = defineComponent((props: HTMLEpicProps<'span'>, { attrs, slots }) => {

  const children = computed(() => getValidChildren(slots).map(vnode => cloneVNode(vnode, {
    'aria-hidden': true,
      focusable: false,
  })))

  return (
    <epic.span data-scope="button" data-part="icon" {...attrs}>
      {children.value}
    </epic.span>
  )
})

export default EButton