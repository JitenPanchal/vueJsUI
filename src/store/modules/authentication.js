import { loginService } from './../../services/security'
import router from './../../router/index'
import { clearAuthenticatedUser, saveAuthenticatedUser } from './../../services/localStorage'

const state = {
    token: null,
    userId: null,
    expirationDateTime: null
}

const getters = {
    isUserAuthenticated: function(state) {
        return state.token !== null;
    }
}

const mutations = {
    saveAuthenticatedUser: function(state, data) {
        state.token = data.token;
        state.userId = data.userId;
        state.expirationDateTime = data.expirationDateTime;
    },
    clearAuthenticatedUser: function(state) {
        state.token = null;
        state.userId = null;
        state.expirationDateTime = null;
    }
}

const actions = {
    setLogoutTimer: function ({ commit,dispatch }, expiresInSeconds) {
        setTimeout(() => {
            dispatch("logout");
        }, expiresInSeconds * 1000);
    },
    login: function ({ state, dispatch, commit }, authData){
        authData.expirationDateTime = new Date(new Date().getTime() + authData.expiresIn * 1000);
        saveAuthenticatedUser(authData);
        commit('saveAuthenticatedUser', authData);
        dispatch("setLogoutTimer", authData.expiresIn);
        router.replace("/home");
    },
    logout: function ({ state, dispatch, commit }) {
        commit('clearAuthenticatedUser');
        clearAuthenticatedUser();
        router.replace("/");
    },
}

export default {
    state,
    getters,
    mutations,
    actions
}
