import { defineStore } from 'pinia'
import { getApiList } from '../server'
import type { RootObject, Children, ChinaTotal, ChinaAdd } from './type'

export const useIndexStore = defineStore('index', {
  state: () => {
    return {
      list: <RootObject>{},
      items: <Children[]>[],
      chinaAdd: <ChinaAdd>{},
      chinaTotal: <ChinaTotal>{}
    }
  },
  // 也可以定义为
  // state: () => ({ count: 0 })
  actions: {
    async getList() {
      const res = await getApiList()
      this.list = res
      this.chinaAdd = this.list.diseaseh5Shelf.chinaAdd
      this.chinaTotal = this.list.diseaseh5Shelf.chinaTotal
    }
  },
})