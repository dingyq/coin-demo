const state = {
  coins_all: [],
  coins_qc: [],
  coins_usdt: [],
  coins_btc: []
}

const mutations = {
  coinsUpdate (state, coinsL) {
    state.coins_all = coinsL
  }
}

export default {
  state,
  mutations
}
