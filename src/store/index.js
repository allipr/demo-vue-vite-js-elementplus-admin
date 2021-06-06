import { createStore } from 'vuex'
// 状态（数据）
import state from './state'
import mutations from './mutations'
const store = createStore({
    state,
    mutations,
})
export default store