import { InjectionKey } from 'vue'

import { createStore, Store, useStore as baseUseStore } from 'vuex'

interface IState {
  userName: string
}
// 自定义注入的key
export const key: InjectionKey<Store<IState>> = Symbol()

export const store = createStore<IState>({
  state: {
    userName: 'default'
  },
  getters: {
    GET_NAME: (state) => {
      return state.userName.toUpperCase()
    }
  },
  mutations: {
    SET_NAME(state, payload: string) {
      state.userName = payload
    }
  },
  actions: {}
})

export function useStore() {
  return baseUseStore(key)
}
