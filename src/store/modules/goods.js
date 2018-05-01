import goods from '../../data/goods';

const state = {
  goods: []
};

const mutations = {
  'SET_GOODS' (state, goods) {
    state.goods = goods;
  }
};

const actions = {
  orderGood: ({ commit }, order) => {
    commit('BUY_GOOD', order);
  },
  initGoods: ({ commit }) => {
    commit('SET_GOODS', goods);
  }
};

const getters = {
  goods: state => {
    return state.goods;
  }
};

export default {
  state,
  mutations,
  actions,
  getters
}
