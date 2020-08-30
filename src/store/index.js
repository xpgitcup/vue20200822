import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const currentUser = 'currentUser';
const serverStatus = 'serverStatus';

export default new Vuex.Store({
    state: {
        serverStatus: false,
        currentUser: null
    },
    mutations: {
        INIT_CURRENTHR(state, response) {
            state.currentUser = response;
            sessionStorage.setItem(currentUser, JSON.stringify(response));
        },
        LOGOUT_CURRENTHR(state) {
            sessionStorage.removeItem(currentUser);
            state.currentUser = null;
            console.log('退出了...')
        },
        //--------------------------------------------------------------------------------------------------------------
        set_current_status(state, status) {
            console.log('保存', status);
            sessionStorage.setItem(status.currentPath, JSON.stringify(status.pageInfo));
        },
        set_server_status(state, ok) {
            state.serverStatus = ok;
            sessionStorage.setItem(serverStatus, ok);
        }
    },
    getters: {
        // 括号中无法传递两个参数
        get_current_status: (state) => (cp) => {
            console.log('getter', cp);
            // console.log(state);
            let cs = sessionStorage.getItem(cp)
            console.log('session: ', cs);
            console.log(JSON.parse(cs));
            if (cs) {
                return JSON.parse(cs);
            } else {
                console.log('返回缺省值...')
                let k = {};
                k.pageSize = 10;
                k.currentPage = 1;
                return k
            }
        }
    },
    actions: {},
    modules: {}
})