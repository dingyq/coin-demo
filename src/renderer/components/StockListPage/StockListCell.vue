<template>
    <div class="cell-content">
        <div>
            {{ stockName }}
        </div>
        <div>
            {{ stockPrice }}
        </div>
        <div class="cell-line-h"></div>
    </div>
</template>

<script>
  export default {
    props: {
      stockName: {
        type: String,
        required: true,
        default: ''
      },
      stockPrice: {
        type: String,
        required: true,
        default: ''
      }
    },
    data () {
      return {
        num1: 1
      }
    },
    methods: {
      handleChange (value) {
        console.log(value)
      }
    }
  }
</script>

<style>
    .cell-content {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        height:80px;
    }

    .cell-line-h {
        height: 1px;
        background: #e0e0e0;
    }
</style>