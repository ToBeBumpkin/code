import axios from 'axios'
import { nanoid } from 'nanoid'

export default {
    namespaced: true,
    state: {
        personList: [
            { id: '001', name: '小明' }
        ]
    },
    actions: {
        addPersonWang(context, value) {
            if (value.name.indexOf('王') === 0) {
                context.commit('ADD_PERSON', value)
            }
        },
        addPersonServer(context, value) {
            axios.get('https://api.oddfar.com/yl/q.php').then((res) => {
                context.commit('ADD_PERSON', { id: nanoid(), name: res.data })
            }, (err) => {
                console.log(err);
            })
        }
    },
    mutations: {
        ADD_PERSON(state, value) {
            state.personList.unshift(value)
        }
    },
    getters: {
        firstPersonName(state) {
            return state.personList[0].name
        }
    }
}
