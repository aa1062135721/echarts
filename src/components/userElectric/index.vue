<template>
    <div id="userElectric">
        <div id="main"></div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            myChart: null
        };
    },

    mounted() {
        this.fetch()
        this.$root.$on('resize',(item) => {
            if (item) {
                setTimeout(() => {
                    this.myChart.resize()
                }, 500);
            }
        })
    },

    methods: {
        fetch () {
            var echarts = require('echarts');
            var chartDom = document.getElementById('main');
            this.myChart = echarts.init(chartDom);
            var option;
            var data = {
                data1: [120, 132, -26, 134, 90, 230, 210, 120, 132, 101, 134, 90, 230, 210],
                data2: [220, -240, 131, 234, 290, 330, 310, 120, 220, 50, 131, 234, 290, 330],
            }

            option = {
                tooltip: {
                    trigger: 'axis',
                    backgroundColor: "rgba(70,70,70,0.7)", // 修改提示框背景颜色
                    borderColor: "rgba(70,70,70,0.1)", // 修改提示框边框颜色
                    textStyle: { // 修改文字样式
                        color: "#fff", 
                        fontSize: 12
                    },
                    padding: [10, 80, 10, 10],
                    axisPointer: { // 修改提示框标题
                        type: 'line',
                        label: {
                            show: false, // x轴是否显示标题
                            formatter: function(params) {
                                return params.value + '累计用电';
                            },
                        },
                    }
                },
                grid: {
                    left: '5%',
                    right: '3%',
                    bottom: '8%',
                    top: '15%',
                    containLabel: true
                },
                color: ['#61a5e8', "#7ecf51", '#36cbcb', '#4dcb73', '#fad337', '#f2637b', '#975ee4'],
                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    data: ['7月', '8月', '9月', '10月', '11月', '12月', '1月', '2月', '3月', '4月', '5月', '6月'],
                    axisLine: {
                        show: true,
                        onZero: false
                    },
                    name: '日期',
                    nameLocation: "middle",
                    nameGap: 30,
                    nameTextStyle: {
                        padding: [0, 0, 0, 750]
                    }
                },
                yAxis: {
                    type: 'value',
                    scale:true,
                    oundaryGap: false,
                    nameGap: 40,
                    axisLine: {
                        show: true
                    },
                    name: '千瓦时(kws)',
                    nameLocation: 'center',
                    nameRotate: 90,
                    nameTextStyle: {
                        padding: [0, -150, 0, 0]
                    }
                },
                series: [
                    {
                        name: '去年',
                        showSymbol: false, // 隐藏圆点
                        type: 'line',
                        data: data.data1
                    },
                    {
                        name: '今年',
                        type: 'line',
                        showSymbol: false,
                        data: data.data2
                    }
                ]
            };
            option && this.myChart.setOption(option);
        }
    },
};
</script>

<style lang="scss" scoped>
#userElectric {
    width: 100%;
    height: 80%;
    #main {
        width: 100%;
        height: 100%;
    }
}
</style>