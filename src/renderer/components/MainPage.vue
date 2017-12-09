<template>
    <div id="wrapper">
        <main>
            <div class="left-side">
                <stock-list></stock-list>
            </div>
            <div class="edge-line-v"/>
            <div class="center-side">
                <stock-chart-page></stock-chart-page>
            </div>
            <div class="edge-line-v"/>
            <div class="right-side">
                <div class="content">

                </div>
            </div>
        </main>
    </div>
</template>

<script>
    import StockList from './StockListPage'
    import StockChartPage from './StockChartPage'

    export default {
      name: 'main-page',
      components: { StockList, StockChartPage },
      data () {
        return {
          stockList: [],
          stock: {
            stockId: 123,
            stockName: '腾讯控股',
            stockPrice: '300.00'
          }
        }
      }
    }
</script>

<style>
    main {
        display: flex;
        flex-direction: row;
        /*justify-content: space-between;*/
        flex:1;
        height: 100%;
        width: 100%;
    }

    #wrapper {
        background:
                radial-gradient(
                        ellipse at top left,
                        rgba(255, 255, 255, 1) 40%,
                        rgba(229, 229, 229, .9) 100%
                );
        height: 98vh;
        /*padding: 60px 80px;*/
        width: 100%;
    }

    .content {
        display: flex;
        flex-direction: column;
    }

    .edge-line-h {
        height: 1px;
        background: #6a6a6a;
    }

    .edge-line-v {
        width: 1px;
        background: #6a6a6a;
    }

    .left-side {
        width: 260px;
        display: flex;
        flex-direction: column;
        /*flex: 1;*/
    }

    .center-side {
        display: flex;
        flex-direction: column;
        /*background: #42b983;*/
        width: 300px;
        flex: 1;
    }

    .right-side {
        width: 200px;
        display: flex;
        flex-direction: row;
        /*background: #4fc08d;*/
    }

    .welcome {
        color: #555;
        font-size: 23px;
        margin-bottom: 10px;
    }

    .title {
        color: #2c3e50;
        font-size: 20px;
        font-weight: bold;
        margin-bottom: 6px;
    }


</style>