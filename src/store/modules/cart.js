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
  'DELETE_GOOD'(state, {id, getters}) {
    const record = state.cartGoods.find(el => el.id == id);
    const goodPrice = getters.goods.find(el => el.id == id).price;
    const goodIndex = state.cartGoods.findIndex(el => el.id == id);
    state.funds += goodPrice * record.quantity;
    state.cartGoods.splice(goodIndex, 1);
  },
  'TOP_UP_FUNDS'(state, payload) {
    state.funds += payload.amount;
  }
};

const actions = {
  orderGood: ({ commit, getters }, order) => {
    commit('BUY_GOOD', { order, getters });
  },
  deleteGood: ({commit, getters}, id) => {
    commit('DELETE_GOOD', {id, getters});
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
