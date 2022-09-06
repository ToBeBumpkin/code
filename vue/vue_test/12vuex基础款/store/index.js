import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

//用于存储数据
const state = {
    sum: 0,
    personList: [
        { id: '001', name: '小明' }
    ]
}

//根据state计算的值
const getters = {
    bigSum(state, b) {
        // console.log("getters", state, b);
        return state.sum * 10
    }
}

//用于接收方法
const actions = {
    jia(context, value) {
        // console.log('action 中的方法 被调用', context, value);
        context.commit('JIA', value)
    },
    jian(context, value) {
        // console.log('action 中的方法 被调用', context, value);
        context.commit('JIAN', value)
    },
    jiaOdd(context, value) {
        // console.log('action 中的方法 被调用', context, value);
        if (context.state.sum % 2) {
            context.commit('JIA', value)
        }
    },
    jiaWait(context, value) {
        // console.log('action 中的方法 被调用', context, value);
        setTimeout(() => {
            context.commit('JIA', value)
        }, 1000)
    },
}

//用于操作数据
const mutations = {
    JIA(state, value) {
        // console.log('mutations 中的方法 被调用', state, value);
        state.sum += value
    },
    JIAN(state, value) {
        // console.log('mutations 中的方法 被调用', state, value);
        state.sum -= value
    },
    ADD_PERSON(state, value) {
        state.personList.unshift(value)
    }
}

export default new Vuex.Store({
    state,
    getters,
    actions,
    mutations
})