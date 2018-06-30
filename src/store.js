import Vue from 'vue'
import Vuex from 'vuex'
import * as storeApi from './api/store'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        picResult: 'haha'
    },
    mutations: {
        'savePicResult'(state, picResult) {
            state.picResult = picResult
            // eslint-disable-next-line
            console.log(picResult)
        }
    },
    actions: {
        fetchPicResult({commit}, {imageUrl}) {
            storeApi.fetchPicResult(data => {
                commit('savePicResult', data)
            }, imageUrl)
        }
    }
})
