import { ComponentCustomProperties } from 'vue'
import { Store } from 'vuex'

declare module '@vue/runtime-core' {
  interface IState {
    userName: string
  }
  interface ComponentCustomProperties {
    $store: Store<IState>
  }
}
