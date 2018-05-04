const state = {
  funds: 1000,
  cartGoods: []
};

const mutations = {
  'BUY_GOOD'(state, { order, getters}) {
    const record = state.cartGoods.find(el => el.id == order.goodId);
    if (record) {
      record.quantity += 1;
    } else {
      state.cartGoods.push({
        id: order.goodId,
        quantity: 1
      });
    }
    const goodPrice = getters.goods.find(el => el.id == order.goodId).price;
    state.funds -= goodPrice;
  },
  'TOP_UP_FUNDS'(state, payload) {
    state.funds += payload.amount;
  }
};

const actions = {
  orderGood: ({ commit, getters }, order) => {
    commit('BUY_GOOD', { order, getters });
  }
};

const getters = {
  cartGoods (state, getters) {
    return state.cartGoods.map(good => {
      const record = getters.goods.find(el => el.id == good.id);
      return {
        id: good.id,
        quantity: good.quantity,
        name: record.name,
        price: record.price
      };
    });
  },
  funds(state) {
    return state.funds;
  }
};

export default {
  state,
  mutations,
  actions,
  getters
};
