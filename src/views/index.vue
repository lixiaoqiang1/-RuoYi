<template>
  <div class="app-container">
    <!-- <el-divider /> -->
    <el-row :gutter="20" class="el-row-page">
      <el-col :xs="24" :sm="24" :md="12" :lg="12">
        <el-card class="update-log update-log1">
          <div slot="header" class="clearfix">
            <span>知识总览</span>
          </div>
          <div class="body">
            <div class="logitem" v-for="item in zslist" :key="item.id">
              <count-to :start-val="0" :end-val="item.num" :duration="2000" class="card-panel-num" />
              <p>{{ item.label }}</p>
            </div>
          </div>
        </el-card>
      </el-col>
      <el-col :xs="24" :sm="24" :md="12" :lg="12">
        <el-card class="update-log update-log1">
          <div slot="header" class="clearfix">
            <span>用户总览</span>
          </div>
          <div class="body">
            <div class="logitem" v-for="item in userlist" :key="item.id">
              <count-to :start-val="0" :end-val="item.num" :duration="2000" class="card-panel-num" />
              <p>{{ item.label }}</p>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
    <el-col :gutter="20" class="el-row-page">
      <el-col :xs="24" :sm="24" :md="24" :lg="24">
        <el-card class="update-log">
          <div slot="header" class="clearfix">
            <span>待回复建议</span>
          </div>
          <div class="body">
            <el-table :data="menuList" >
            <el-table-column prop="aaa" label="编号" :show-overflow-tooltip="true"></el-table-column>
            <el-table-column prop="aaa" label="建议内容" :show-overflow-tooltip="true"></el-table-column>
            <el-table-column prop="aaa" label="创建时间" :show-overflow-tooltip="true"></el-table-column>
            <el-table-column prop="aaa" label="创建人" :show-overflow-tooltip="true"></el-table-column>
            <el-table-column prop="aaa" label="建议分类" :show-overflow-tooltip="true"></el-table-column>
            <el-table-column label="操作" :show-overflow-tooltip="true">
              <template>
                <a class="blue" @click="clickreply()">回复</a>
              </template>
            </el-table-column>
          </el-table>
          </div>
        </el-card>
      </el-col>
    </el-col>
    <!-- <el-divider /> -->
    <el-col :gutter="20" class="el-row-page">
      <el-col :xs="24" :sm="24" :md="24" :lg="24">
        <el-card class="update-log update-center">
          <div slot="header" class="clearfix">
            <span>菜单快捷入口</span>
          </div>
          <div class="body">
            <ul>
              <li v-for="item in caidan" :key="item.id">
                <div class="pic">
                  <img :src="item.img" />
                </div>
                <p>{{ item.title }}</p>
              </li>
            </ul>
          </div>
        </el-card>
      </el-col>
    </el-col>
    
    <el-col :gutter="20" class="el-row-page">
      <el-col :xs="24" :sm="24" :md="24" :lg="24">
        <el-card class="update-log">
          <div slot="header" class="clearfix">
            <span>活跃人数趋势</span>
          </div>
          <div class="body">
            <div>
              <el-radio-group v-model="labelPosition" size="small">
                <el-radio-button label="left">近一年</el-radio-button>
                <el-radio-button label="right">近半年</el-radio-button>
                <el-radio-button label="top">近七天</el-radio-button>
              </el-radio-group>
            </div>
            <line-chart :chart-data="lineChartData" />
          </div>
        </el-card>
      </el-col>
    </el-col>
  </div>
</template>

<script>
import CountTo from 'vue-count-to'
import img1 from '@/assets/images/profile.jpg'
import img2 from '@/assets/images/profile.jpg'
import img3 from '@/assets/images/profile.jpg'
import img4 from '@/assets/images/profile.jpg'
import LineChart from './dashboard/LineChart'
export default {
  name: "index",
  components: {
    LineChart,CountTo
  },
  data() {
    return {
      // 遮罩层
      loading: true,
      zslist:[
      {id:1,label:'今日新增',num:'100'},
      {id:2,label:'昨日新增',num:'96'},
      {id:3,label:'本月新增',num:'120'},
      {id:4,label:'全部知识',num:'100'},
      ],
      userlist:[
      {id:1,label:'今日新增',num:'50'},
      {id:2,label:'昨日新增',num:'500'},
      {id:3,label:'本月新增',num:'1863'},
      {id:4,label:'用户总数',num:'96'},
      ],
      caidan:[
      {id:1,title:'发布知识',img:img1},
      {id:2,title:'知识列表',img:img2},
      {id:3,title:'用户管理',img:img3},
      {id:4,title:'员工行为统计报表',img:img4},
      ],
      menuList:[
      {aaa:'111'},
      {aaa:'111'},
      // {aaa:'111'},
      ],
      lineChartData: {
        // expectedData: [100, 120, 161, 134, 105, 160, 165],
        data:[
          {
            value: [120, 82, 91, 154, 162, 140, 145],
            label: ['2022/01/24', '2022/02/24', '2022/03/24', '2022/04/24', '2022/05/24', '2022/06/24', '2022/07/24']
          }
        ]
        
      },
      labelPosition:'',
    }
  },
  created(){
    console.log('11111111')
  },
  methods: {
    clickreply(){
      console.log('123')
      this.$router.push({
        path:'replyMgts'
      })
    }
  },
};
</script>

<style scoped lang="scss">
  .app-container{
    display: inline-block;
    .el-row-page{
      margin-bottom: 15px;
      .update-log1{
        .body{
          display: flex;justify-content: space-between;
          .logitem{
            text-align: center;
            .card-panel-num{
              color: red;font-size: 24px;font-weight: bold;line-height: 30px;margin-bottom: 10px;display: inline-block;
            }
          }
        }
      }
      .update-center{
        ::v-deep .el-card__body{
          padding: 0;
        }
        .body ul{
           li{
            text-align: center;float: left; padding: 30px 20px 20px;border-left:1px #fff solid;border-right:1px #fff solid;
            .pic{
              width: 120px;
              img {
                width: 70px;
              }
            }
            p{
              line-height: 50px;
            }
          }
          li:hover{
            cursor: pointer;background:#f8f8f8;border-left:1px #ddd solid;border-right:1px #ddd solid;
            p{
              color:cornflowerblue
            }
          }
          li:first-child{
            border-left:1px #fff solid;
          }
        }
      }
    }    
  }
</style>

