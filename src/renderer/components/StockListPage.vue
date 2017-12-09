<template>
    <el-table :data="stockList" style="width: 100%" @row-click="handleRowClick" :show-header="false" :highlight-current-row="true">
        <el-table-column label="">
            <template slot-scope="scope">
                <div class="cell-content">
                    <span>{{ scope.row.stockName }}</span>
                    <span>{{ scope.row.stockPrice }}</span>
                </div>
            </template>
        </el-table-column>
    </el-table>
</template>

<script>
  import ElButton from '../../../node_modules/element-ui/packages/button/src/button'
  import bus from '../util/EventBus'
  import QuoteService from '../util/quote/QuoteService'

  export default {
    components: {ElButton},
    beforeCreate () {
      QuoteService.fetchCoinList().then((res) => {
        console.log('getCoinMarketConfig')
      })
    },
    data () {
      return {
        fsnumShow: false,
        stockList: [{
          stockId: 123,
          stockName: '腾讯控股',
          stockPrice: '300.00'
        }, {
          stockId: 124,
          stockName: '美图公司',
          stockPrice: '10.98'
        }, {
          stockId: 125,
          stockName: '香港交易所',
          stockPrice: '220.98'
        }]
      }
    },
    methods: {
      handleRowClick (row, event, column) {
        bus.$emit('ft-event-stock-selected', row)
      },
      handleEdit (index, row) {
        console.log(index, row)
      },
      handleDelete (index, row) {
        console.log(index, row)
      }
    }
  }
</script>

<style>
    .cell-content {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        height:50px;
    }

    .cell-line-h {
        height: 1px;
        background: #e0e0e0;
    }
</style>


<!--<template>-->
<!--<div class="list-content">-->
<!--&lt;!&ndash;<stock-cell v-for="stock in stockList" :key="stock.stockId" v-bind="stock"></stock-cell>&ndash;&gt;-->
<!--&lt;!&ndash;<el-table :data="stockList" style="width: 100%">&ndash;&gt;-->
<!--&lt;!&ndash;<el-table-column label="日期" width="180">&ndash;&gt;-->
<!--&lt;!&ndash;<template slot-scope="scope">&ndash;&gt;-->
<!--&lt;!&ndash;<i class="el-icon-time"></i>&ndash;&gt;-->
<!--&lt;!&ndash;<span style="margin-left: 10px">{{ scope.row.date }}</span>&ndash;&gt;-->
<!--&lt;!&ndash;</template>&ndash;&gt;-->
<!--&lt;!&ndash;</el-table-column>&ndash;&gt;-->
<!--&lt;!&ndash;</el-table>&ndash;&gt;-->
<!--</div>-->
<!--</template>-->

<!--<script>-->
<!--import StockCell from './StockListPage/StockListCell'-->
<!--import ElTable from '../../../node_modules/element-ui/packages/table/src/table'-->

<!--export default {-->
<!--components: {ElTable, StockCell},-->
<!--data () {-->
<!--return {-->
<!--stockList: [-->
<!--{-->
<!--stockId: 123,-->
<!--stockName: '腾讯控股',-->
<!--stockPrice: '300.00'-->
<!--},-->
<!--{-->
<!--stockId: 124,-->
<!--stockName: '美图公司',-->
<!--stockPrice: '10.98'-->
<!--},-->
<!--{-->
<!--stockId: 125,-->
<!--stockName: '香港交易所',-->
<!--stockPrice: '220.98'-->
<!--}-->
<!--]-->
<!--}-->
<!--}-->
<!--}-->
<!--</script>-->

<!--<style>-->
<!--.list-content {-->
<!--display: flex;-->
<!--flex-direction: column;-->
<!--/*background: #4fc08d;*/-->
<!--flex:1;-->
<!--/*height: 200px;*/-->
<!--}-->
<!--</style>-->