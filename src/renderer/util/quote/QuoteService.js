import extend from '../extend'
import axios from 'axios'
// import store from './store/store'
// axios 配置
// axios.defaults.timeout = 5000
// axios.defaults.baseURL = 'http://api.zb.com/data/v1'

const kCoinMarketConfig = '/markets'
const kCoinDetailInfo = '/ticker?market='

const ALLOW_CONSOLE_LOG = true

let instance = axios.create({
  baseURL: 'http://api.zb.com/data/v1'
})

let Coin = function (key, obj) {
  var rel = {}
  let result = key.split('_')
  rel.targetCoin = result[0].toUpperCase()
  rel.originCoin = result[1].toUpperCase()
  rel.tarOriPair = key
  rel.amountScale = obj['amountScale']
  rel.priceScale = obj['priceScale']
  return rel
}

let CoinDetail = function (obj) {
  var rel = {}
  let ticker = obj['ticker']
  rel.volume = ticker['vol']
  rel.last = ticker['last']
  rel.sell = ticker['sell']
  rel.buy = ticker['buy']
  rel.high = ticker['high']
  rel.low = ticker['low']
  rel.timpStamp = obj['date']
  return rel
}

let quoteService = {}

quoteService.fetchCoinList = function () {
  var that = this
  return that.getCoinMarketConfig().then((res) => {
    for (let key in res) {
      let obj = res[key]
      that.getCoinDetailInfo(obj.tarOriPair).then((res1) => {
        res[key] = extend(obj, res1)
        if (ALLOW_CONSOLE_LOG) {
          console.log(key + JSON.stringify(res[key]))
        }
      })
    }
    return res
  })
}

quoteService.getCoinMarketConfig = function () {
  return instance.get(kCoinMarketConfig).then((res) => {
    if (ALLOW_CONSOLE_LOG) {
      console.log(JSON.stringify(res))
    }
    let data = res['data']
    let dic = {}
    for (var key in data) {
      let obj = Coin(key, data[key])
      dic[key] = obj
    }
    return dic
  })
}

quoteService.getCoinDetailInfo = function (coinKey) {
  return instance.get(kCoinDetailInfo + coinKey).then((res) => {
    if (ALLOW_CONSOLE_LOG) {
      // console.log(JSON.stringify(res))
    }
    let coin = CoinDetail(res['data'])
    return coin
  })
}

export default quoteService
