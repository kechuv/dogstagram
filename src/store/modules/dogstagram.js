import $axios from "@/API.js";

const state = {
  photos: [],
  fetchStatus: null,
  qParams: {
    limit: 9,
    page: 0,
    order: "desc",
  },
};

const getters = {
  allPhotos: (state) => state.photos,
  fetchStatus: (state) => state.fetchStatus,
};

const mutations = {
  SET_PHOTOS: (state, photos) => {
    state.photos = [...state.photos, ...photos];
  },
  SET_FETCH_STATUS: (state, status) => {
    state.fetchStatus = status;
  },
  SET_NEXT_PAGE: (state) => {
    state.qParams.page++;
  },
  SET_PAGE: (state, page) => {
    state.qParams.page = page;
  }
};

const actions = {
  fetchPhotos: async (context) => {
    context.commit("SET_FETCH_STATUS", {
      status: "loading",
      details: null,
    });
    try {
      const resp = await $axios.get("/search", {
        params: context.state.qParams
      });
      context.commit("SET_PHOTOS", resp.data);
      context.commit("SET_FETCH_STATUS", {
        status: "complete",
        details: null,
      });
      context.commit("SET_NEXT_PAGE");
    } catch (error) {
      context.commit("SET_PHOTOS", []);
      context.commit("SET_FETCH_STATUS", {
        status: "error",
        details: error,
      });
      throw error;
    }
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
