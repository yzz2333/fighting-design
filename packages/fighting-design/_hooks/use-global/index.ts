import { computed, inject } from 'vue'
import { FIGHTING_GLOBAL_PROPS_KEY } from '../../fighting-global/src/props'
import type { ComputedRef } from 'vue'
import type { FightingType, FightingSize } from '../../_interface'
import type { UseGlobalProp, UseGlobalReturn } from './interface'
import type { FightingGlobalProps } from '../../fighting-global'

export * from './interface.d'

/**
 * 获取组件所需要的配置项，有组件内部的 prop、全局配置和默认值三个参数
 * 
 * @param prop 组件的 prop
 * @returns 根据优先级返回需要的参数
 */
export const useGlobal = <T extends UseGlobalProp>(prop: T): UseGlobalReturn => {

  /**
   * 获取全局配置组件注入的依赖项
   */
  const global = inject<FightingGlobalProps | null>(FIGHTING_GLOBAL_PROPS_KEY, null)

  /**
   * 获取组件的类型
   * 
   * @param def 默认参数
   * @returns 类型
   */
  const getType = (def: FightingType): ComputedRef<FightingType> => {
    return computed((): FightingType => {
      return prop.type || (global && global.type) || def
    })
  }

  /**
   * 获取组件的尺寸
   * 
   * @param def 默认参数
   * @param parentSize 父组件可能需要注入的依赖项
   * @returns 尺寸
   */
  const getSize = (def: FightingSize, parentSize?: FightingSize | null): ComputedRef<FightingSize> => {
    return computed((): FightingSize => {
      return prop.size || parentSize || (global && global.size) || def
    })
  }

  return {
    getType,
    getSize
  }
}
