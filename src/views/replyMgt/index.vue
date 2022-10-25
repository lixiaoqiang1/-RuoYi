<template>
  <div class="app-container">
    <el-card class="card1">
      <div slot="header" class="clearfix">
        <div class="card-list">
          <span class="sizebold">回复建议</span>
          <span>所有人可见 <el-switch v-model="value2" active-text="" inactive-text="" /></span>
        </div>
        <ul class="card-list card-list2">
          <li>创建人  张三丰</li>
          <li>创建时间  2022-09-07</li>
          <li>分类 基础知识</li>
          <li>点赞 88</li>
        </ul>
      </div>
      <div class="body">
        忽然想起采莲的事情来了。采莲是江南的旧俗，似乎很早就有，而六朝时为盛；从诗歌里可以约略知道。采莲的是少年的女子，她们是荡着小船，唱着艳歌去的。采莲人不用说很多，还有看采莲的人。那是一个热闹的季节，也是一个风流的季节。梁元帝《采莲赋》里说得好：于是妖童媛女，荡舟心许；鷁首徐回，兼传羽杯；棹将移而藻挂，船欲动而萍开。尔其纤腰束素，迁延顾步；夏始春余，叶嫩花初，恐沾裳而浅笑，畏倾船而敛裾。可见当时嬉游的光景了。这真是有趣的事，可惜我们现在早已无福消受了。
      </div>
    </el-card>
    <el-card class="card2">
      <div slot="header" class="clearfix">
        <span class="sizebold">全部回复</span>2
      </div>
      <div class="body">
        <el-form>
          <el-input type="textarea" v-model="form.desc" placeholder="请输入..."></el-input>
          <div class="btn-group">
            <el-button type="primary" size="mini" @click="handleQuery">回复</el-button>
          </div>
        </el-form>
        <el-card class="box-card">
          <div class="text-item">
            <img class="head" src="~@/assets/images/shoucang.png" />
            <p>张爱玲<span>（广州分行业务二部）</span> </p>
            <p>这位同事提出的建议非常不错，我们也非常重视</p>
            <p>2022-08-09 12:22 <span class="zan">点赞 88</span></p>
          </div>
          <div class="text-item">
            <img class="head" src="~@/assets/images/shoucang.png" />
            <p>张爱玲<span>（广州分行业务二部）</span> </p>
            <p>这位同事提出的建议非常不错，我们也非常重视</p>
            <p>2022-08-09 12:22 <span class="zan">点赞 88</span></p>
          </div>
          <div class="text-item">
            <img class="head" src="~@/assets/images/shoucang.png" />
            <p>张爱玲<span>（广州分行业务二部）</span> </p>
            <p>这位同事提出的建议非常不错，我们也非常重视</p>
            <p>2022-08-09 12:22 <span class="zan">点赞 88</span></p>
          </div>
        </el-card>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "replyMgts",
  components: {},
  data() {
    return {
      value2:'',
      form: {
        desc:''
      }
    };
  },
  watch: {},
  created() {
    this.getList();
  },
  methods: {
    /** 查询用户列表 */
    getList() {},
    handleQuery() {},
  },
};
</script>
<style lang="scss" scoped>
.sizebold{
  font-weight: bold;
}
.app-container{
  font-size: 14px;
  .card1{
    margin-bottom: 20px;
    .card-list{
      display:flex;justify-content: space-between;line-height: 38px;
    }
    .card-list2 li{
      background: url('~@/assets/images/shoucang.png') no-repeat left center;background-size: 18px;padding-left: 20px;
    }
    
  }
  .card2{
    .btn-group{
      padding: 15px 0;
    }
    .box-card{
      box-shadow: none; font-size: 12px;
      .text-item{
        position: relative;padding-left:80px;margin:15px 0;
        .head{
          position: absolute;left: 0;top: 0;width: 50px;height: 50px;margin: 11px;
        }
        p{
          line-height: 24px;
          span{
            color: #999;
          }
          .zan{
            background: url('~@/assets/images/shoucang.png') no-repeat left center;background-size: 18px;padding-left: 20px;margin-left: 20px;
          }
        }
      }
    }
  }
}

</style>