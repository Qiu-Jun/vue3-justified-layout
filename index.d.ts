/*
 * @Author: June
 * @Description:
 * @Date: 2024-09-28 01:23:11
 * @LastEditors: June
 * @LastEditTime: 2024-11-28 10:25:54
 */
declare module 'vue3-justified-layout' {
  export interface IBoxItem {
    aspectRatio: number
    height: number
    left: number
    top: number
    width: number
  }

  export interface IJLItem {
    width: number
    height: number
    url: string
    id?: string
  }
}
