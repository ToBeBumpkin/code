export default {
    namespaced: true,
    state: {
        sum: 0,
    },
    actions: {
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
    },
    mutations: {
        JIA(state, value) {
            // console.log('mutations 中的方法 被调用', state, value);
            state.sum += value
        },
        JIAN(state, value) {
            // console.log('mutations 中的方法 被调用', state, value);
            state.sum -= value
        },
    },
    getters: {
        bigSum(state) {
            // console.log("getters", state, b);
            return state.sum * 10
        }
    }
}