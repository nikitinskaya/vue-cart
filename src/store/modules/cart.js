const state = {
  funds: 0,
  goods: []
};

const mutations = {
  'BUY_GOOD'(state, {goodId, quantity, goodPrice}) {
    const record = state.goods.find(el => el.id == goodId);
    if (record) {
      record.quantity += quantity;
    } else {
      state.goods.push({
        id: goodId,
        quantity: quantity
      });
    }
    state.funds -= goodPrice * quantity;
  },
  'TOP_UP_FUNDS'(state, payload) {
    state.funds += payload.amount;
  }
};

const getters = {
  cartGoods (state, getters) {
    return state.goods.map(good => {
      const record = getters.goods.find(el => el.id == good.id);
      return {
        id: good.id,
        quantity: good.quantity,
        name: record.name,
        price: record.price
      }
    });
  },
  funds(state) {
    return state.funds;
  }
};

export default {
  state,
  mutations,
  getters
}
