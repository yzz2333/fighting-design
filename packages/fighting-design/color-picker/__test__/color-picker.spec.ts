import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import { FColorPicker } from '../index'

describe('ColorPicker', () => {
  test('class', () => {
    const wrapper = mount(FColorPicker)
    expect(wrapper.classes()).toContain('f-color-picker')
  })
})
