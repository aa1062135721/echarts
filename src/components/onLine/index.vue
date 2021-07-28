<template>
    <div id="online">
        <div id="leftMain"></div>
        <div class="rightText">
           <table>
               <thead>
                   <tr>
                       <td style="text-align: left">设备名称</td>
                       <td style="text-align: left">在线率</td>
                       <td>设备数量</td>
                   </tr>
               </thead>
               <tbody>
                   <tr v-for="(item ,index) in data" :key="index">
                       <td><span class="dot" :style="{background: colors[index]}"></span> {{item.name}} &nbsp; <span style="color: #ccc">|</span></td>
                       <td style="color: #b1b1b1">{{item.onlineRate}}%</td>
                       <td style="text-align: center">{{item.value}}</td>
                   </tr>
               </tbody>
           </table>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            data: [
                {value: 1048, name: '灯具', onlineRate: '95'},
                {value: 735, name: 'WIFI', onlineRate: '85'},
                {value: 580, name: '广播', onlineRate: '76'},
                {value: 484, name: '监控', onlineRate: '31'},
                {value: 300, name: '显示屏', onlineRate: '92'},
                {value: 200, name: '一键呼叫', onlineRate: '46'}
            ],
            colors: ['#3ba0ff', '#36cbcb', '#4dcb73', '#fad337', '#f2637b', '#975ee4', '#fc8452', '#9a60b4', '#ea7ccc'],
            myChart: null
        };
    },

    mounted() {
        this.fetch()
        if (this.data.length > this.colors.length) {
           this.colors.map(res => {
               this.colors.push(res)
           })
        }
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
            var chartDom = document.getElementById('leftMain');
            this.myChart = echarts.init(chartDom);
            var option;

            option = {
                title: {
                    text: '设备在线率',
                    left: 12,
                    textStyle: {
                        fontSize: 14
                    }
                },
                tooltip: {
                    trigger: 'item'
                },
                graphic:[{       //图形中间文字
                    type:"text",
                    left:"center",
                    top:"45%",
                    style:{
                        text:"设备总数",
                        textAlign:"center",
                        fill:"#b1b1b1",
                        fontSize: 14
                    }
                },
                {       //图形中间文字
                    type:"text",
                    left:"center",
                    top:"58%",
                    style:{
                        text:"1234,56",
                        textAlign:"center",
                        fill:"#010101",
                        fontSize: 18
                    }
                }],
                color: this.colors,
                series: [
                    {
                        type: 'pie',
                        radius: ['58%', '75%'],
                        center: ['50%', '53%'],
                        avoidLabelOverlap: false,
                        itemStyle: {
                            borderRadius: 0,
                            borderColor: '#fff',
                            borderWidth: 2
                        },
                        label: {
                            show: false,
                            position: 'center'
                        },
                        labelLine: {
                            show: false
                        },
                        data: this.data
                    }
                ]
            };

            option && this.myChart.setOption(option);
        }
    },
};
</script>

<style lang="scss" scoped>
#online {
    width: 100%;
    height: 80%;
    display: flex;
    #leftMain {
        width: 50%;
        height: 100%;
    }
    .rightText {
        flex: 1;
        overflow-y: auto;
        margin-top: 1.5rem;
        table {
            width: 100%;
            thead {
                font-size: .8rem;
                color: #b1b1b1;
                tr {
                    td {text-align: center;}
                }
            }
            tbody {
                font-size: .8rem;
                tr {
                    td {
                        padding: .5rem 0;
                        .dot {
                            width: .4rem;
                            height: .4rem;
                            display: inline-block;
                            border-radius: 50%;
                        } 
                    }
                }
            }
        }
    }
}
</style>