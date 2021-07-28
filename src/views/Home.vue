<template>
  <div class="home">
    <div class="header">
      <div class="left">
        <span>{{ dayjs(nowTime).format("YYYY年MM月DD日") }} </span>
        <span
          >{{ "星期" + weekArr[dayjs(nowTime).format("d")] }} &emsp;
          {{ dayjs(nowTime).format("HH:mm") }}</span
        >
      </div>
      <div class="center">
        <span>能耗监测大数据看板</span>
      </div>
      <div class="right">
        <span>返回主页</span>
      </div>
    </div>
    <div class="nav">
      <div class="single">
        <p class="p1">
          <span class="s1">本周用电(kws)</span>
          <span class="s2">126,560</span>
        </p>
        <p class="p2">
          <span class="s1">用电趋势</span>
          <img src="../assets/add.png" />
          <span style="margin-right: 0.5rem" class="s2">8%</span>
          <span style="color: red">+2.56</span>
        </p>
        <p class="p3">
          <span>上周用电</span>
          <span>￥18.963</span>
        </p>
      </div>
      <div class="single">
        <p class="p1">
          <span class="s1">本月用电(kws)</span>
          <span class="s2">326,260</span>
        </p>
        <p class="p2">
          <span class="s1">用电趋势</span>
          <img src="../assets/add.png" />
          <span style="margin-right: 0.5rem" class="s2">2%</span>
          <span style="color: red">+42</span>
        </p>
        <p class="p3">
          <span>上月用电</span>
          <span>￥289.433</span>
        </p>
      </div>
      <div class="single">
        <p class="p1">
          <span class="s1">本年用电(kws)</span>
          <span class="s2">1526,560</span>
        </p>
        <p class="p2">
          <span class="s1">用电趋势</span>
          <img src="../assets/reduce.png" />
          <span style="margin-right: 0.5rem" class="s2">3%</span>
          <span style="color: #2aa515">-2352</span>
        </p>
        <p class="p3">
          <span>去年用电</span>
          <span>￥1452.8532</span>
        </p>
      </div>
      <div class="single">
        <p class="p1">
          <span class="s1">累计用电(kws)</span>
          <span class="s2">5686,524</span>
        </p>
        <p class="p2">
          <span style="color: #666">截止到当前时间</span>
        </p>
        <p class="p3">
          <span class="s1"></span>
          <span class="s2"></span>
        </p>
      </div>
    </div>
    <div class="section">
      <div class="tabs">
        <div class="option">
          <span class="t1">用电趋势分析</span>
        </div>
      </div>
      <userElectric></userElectric>
      <div class="foot">
        <span class="s1">去年</span>
        <span class="s2">今年</span>
      </div>
    </div>
    <div class="all">
      <div class="artic">
        <div class="title">
          <span>设备在线监测</span>
        </div>
        <!-- <div class="btn">
          <closeButton :list="leftList"></closeButton>
        </div> -->
        <onLine></onLine>
      </div>
      <div class="artic">
        <div class="title">
          <span>强弱电节点在线监测</span>
        </div>
        <!-- <div class="btn">
          <closeButton :list="rightList"></closeButton>
        </div> -->
        <electricOnline></electricOnline>
      </div>
    </div>
  </div>
</template>

<script>
import userElectric from "../components/userElectric/index.vue";
// import closeButton from "../components/closeButton/index.vue";
import onLine from "../components/onLine/index.vue";
import electricOnline from "../components/electricOnline/index.vue";
export default {
  components: {
    userElectric,
    // closeButton,
    onLine,
    electricOnline
  },

  data() {
    return {
      leftList: ["全部", "灯具", "WIFI", "广播", "监控", "显示屏", "一键呼叫"],
      rightList: ["全部", "强电", "WIFI"],
      nowTime: new Date(),
      weekArr: ["日", "一", "二", "三", "四", "五", "六"],
      timer: "",
    };
  },

  created() {
    this.timer = setInterval(() => {
      this.nowTime = new Date();
    }, 1000);
    this.fetchData();
  },

  methods: {
    fetchData() {},
  },

  beforeDestroy () {
    if (this.timer) {
      clearInterval(this.timer); // 在Vue实例销毁前清除定时器
    }
  },
};
</script>

<style lang="scss" scoped>
.home {
  width: 100%;
  background: #00284d;
  display: flex;
  flex-direction: column;
  padding: 1rem 20% 2rem;
  overflow-y: auto;
  .header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    color: #fff;
    .left {
      display: flex;
      flex-direction: column;
      line-height: 1.5rem;
      font-size: 1rem;
    }
    .center {
      font-size: 1.5rem;
    }
    .right {
      color: #0d63b1;
      font-size: 1rem;
    }
  }
  .nav {
    display: flex;
    justify-content: space-between;
    margin-top: 2rem;
    .single {
      padding: 1rem;
      width: 24%;
      height: 10rem;
      background: #fff;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      border-radius: 2px;
      .p1 {
        display: flex;
        flex-direction: column;
        line-height: 1.5rem;
        .s1 {
          font-size: 0.8rem;
          color: #666;
        }
        .s2 {
          font-size: 1.5rem;
        }
      }
      .p2 {
        display: flex;
        img {
          width: 1rem;
          height: 1rem;
          margin: 0 0.5rem;
        }
        .s1,
        .s2 {
          color: #666;
        }
      }
      .p2,
      .p3 {
        font-size: 0.8rem;
      }
      .p3 {
        border-top: 1px solid rgba(204, 204, 204, 0.5);
        padding-top: 0.5rem;
        span {
          margin-right: 0.5rem;
        }
      }
    }
  }
  .section {
    margin-top: 1rem;
    width: 100%;
    height: 38vh;
    background: #fff;
    position: relative;
    border-radius: 0.1rem;
    .tabs {
      padding: 0.5rem 1rem;
      height: 3rem;
      line-height: 2rem;
      border-bottom: 1px solid rgba(204, 204, 204, 0.5);
      font-size: 0.8rem;
      font-weight: bold;
      .option {
        width: 6rem;
        padding-bottom: 0.4rem;
        border-bottom: 0.2rem solid #1086e8;
        text-align: center;
      }
    }
    .foot {
      position: absolute;
      bottom: 1.5rem;
      font-size: 0.8rem;
      left: 6rem;
      span {
        margin-right: 4rem;
      }
      .s1::after {
        content: "";
        display: inline-block;
        width: 0.6rem;
        height: 0.6rem;
        background: #61a5e8;
        position: absolute;
        border-radius: 50%;
        left: -1rem;
        top: 0.3rem;
      }
      .s2::after {
        content: "";
        display: inline-block;
        width: 0.6rem;
        height: 0.6rem;
        background: #7ecf51;
        position: absolute;
        border-radius: 50%;
        left: 4.6rem;
        top: 0.3rem;
      }
    }
  }
  .all {
    width: 100%;
    height: 40vh;
    margin-top: 1rem;
    display: flex;
    justify-content: space-between;
    .artic {
      width: 48%;
      height: 100%;
      background: #fff;
      border-radius: 0.1rem;
      .title {
        padding: 0.5rem 1rem;
        height: 3rem;
        line-height: 2rem;
        border-bottom: 1px solid rgba(204, 204, 204, 0.5);
        font-size: 0.8rem;
        font-weight: bold;
        margin-bottom: 2rem;
      }
      .btn {
        display: flex;
        justify-content: left;
        padding-left: 1rem;
      }
    }
  }
}
</style>
