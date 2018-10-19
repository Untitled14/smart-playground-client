import PopUp from '@src/components/popup/PopUp'

export const popUpTypes = Object.freeze({
  unhandled: 0
})

export const popUpData = {
  type: null,
  params: null
}

export default {
  install: (Vue) => {
    Vue.component('pop-up', PopUp)
    Vue.prototype.$popUp = (type, params) => {
      if (data) {
        popUpData.type = type
        popUpData.params = params
      }
    }
  }
}
