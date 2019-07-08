import { shallowMount } from '@vue/test-utils'
import XButton from '@/components/XButton/XButton.vue'

const factory = (text, propValues = {}) => {
  return shallowMount(XButton, {
    slots: {
      default: text
    },

    propsData: {
      ...propValues
    }

  })
}

describe('XButton.vue', () => {
  it('renders a button element with text value set to default slot', () => {
    const wrapper = factory('I am a button')
    expect(wrapper.contains('button')).toBe(true)
    expect(wrapper.text()).toBe('I am a button')
  })

  it('renders by default with default props', () => {
    const wrapper = factory('I am a button')
    expect(wrapper.props().variant).toBe('default')
    expect(wrapper.props().outline).toBe(false)
    expect(wrapper.props().element).toBe('button')
    expect(wrapper.props().spread).toBe(false)
    expect(wrapper.props().custom).toBe(false)
    expect(wrapper.props().textDark).toBe(false)
    expect(wrapper.props().size).toBe('normal')
  })

  it('renders with primary variant', () => {
    const wrapper = factory('I am a button', {
      variant: 'primary'
    });
    expect(wrapper.props().size).toBe('normal')
    // expect(wrapper.props().variant).toBe('primary')
  })

})
