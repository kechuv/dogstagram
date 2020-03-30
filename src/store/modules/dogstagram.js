import $axios from "@/API.js";

const state = {
  photos: [],
  fetchStatus: null
};

const getters = {
  allPhotos: state => state.photos,
  fetchStatus: state => state.fetchStatus
};

const mutations = {
  SET_PHOTOS: (state, photos) => {
    state.photos = [...state.photos, ...photos];
  },
  SET_FETCH_STATUS: (state, status) => {
    state.fetchStatus = status;
  }
};

const actions = {
  fetchPhotos: async (context, qparams) => {
    context.commit("SET_FETCH_STATUS", {
      status: "loading",
      details: null
    });
    try {
      const resp = await $axios.get("/search", {
        params: qparams
      });
      context.commit("SET_PHOTOS", resp.data);
      context.commit("SET_FETCH_STATUS", {
        status: "complete",
        details: null
      });
    } catch (error) {
      context.commit("SET_PHOTOS", []);
      context.commit("SET_FETCH_STATUS", {
        status: "error",
        details: error
      });
      throw error;
    }
  }
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};
