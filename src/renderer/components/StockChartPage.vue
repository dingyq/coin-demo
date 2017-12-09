<template>
    <div>
        <button @click="plusBtnClick"> button ++ </button>
        <button @click="minusBtnClick"> button - </button>
    </div>
</template>

<script>
    import bus from '../util/EventBus'

    export default {
      name: 'stock-chart-page',
      beforeCreate () {
        bus.$on('ft-event-stock-selected', function (stock) {
          console.log('ft-event-stock-selected', stock.stockId, stock.stockName)
        })
      },
      methods: {
        plusBtnClick () {
          console.log('plusBtnClick')
        },
        minusBtnClick () {
          console.log('minusBtnClick')
        }
      }
    }
</script>

<style>

</style>