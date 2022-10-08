<template>
  <div class="app-container home">
    <!-- <el-divider /> -->
    <el-row :gutter="20" class="el-row-page">
      <el-col :xs="24" :sm="24" :md="12" :lg="12">
        <el-card class="update-log update-log1">
          <div slot="header" class="clearfix">
            <span>知识总览</span>
          </div>
          <div class="body">
            <div class="logitem">
              <h4>100</h4>
              <p>今日新增</p>
            </div>
            <div class="logitem">
              <h4>100</h4>
              <p>今日新增</p>
            </div>
            <div class="logitem">
              <h4>100</h4>
              <p>今日新增</p>
            </div>
            <div class="logitem">
              <h4>100</h4>
              <p>今日新增</p>
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
            <div class="logitem">
              <h4>100</h4>
              <p>今日新增</p>
            </div>
            <div class="logitem">
              <h4>100</h4>
              <p>今日新增</p>
            </div>
            <div class="logitem">
              <h4>100</h4>
              <p>今日新增</p>
            </div>
            <div class="logitem">
              <h4>100</h4>
              <p>今日新增</p>
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
            <el-table v-loading="loading" :data="menuList" >
            <el-table-column prop="aaa" label="编号" :show-overflow-tooltip="true"></el-table-column>
            <el-table-column prop="aaa" label="建议内容" :show-overflow-tooltip="true"></el-table-column>
            <el-table-column prop="aaa" label="创建时间" :show-overflow-tooltip="true"></el-table-column>
            <el-table-column prop="aaa" label="创建人" :show-overflow-tooltip="true"></el-table-column>
            <el-table-column prop="aaa" label="建议分类" :show-overflow-tooltip="true"></el-table-column>
            <el-table-column prop="aaa" label="操作" :show-overflow-tooltip="true"></el-table-column>
          </el-table>
          </div>
        </el-card>
      </el-col>
    </el-col>
    <!-- <el-divider /> -->
    <el-col :gutter="20" class="el-row-page">
      <el-col :xs="24" :sm="24" :md="24" :lg="24">
        <el-card class="update-log">
          <div slot="header" class="clearfix">
            <span>菜单快捷入口</span>
          </div>
          <div class="body">
            111
          </div>
        </el-card>
      </el-col>
    </el-col>
    <!-- <el-divider /> -->
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
import LineChart from './dashboard/LineChart'
export default {
  name: "index",
  components: {
    LineChart,
  },
  data() {
    return {
      menuList:[
      {aaa:'111'},
      {aaa:'111'},
      {aaa:'111'},
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
    
  },
};
</script>

<style scoped lang="scss">
  .home{
    .el-row-page{
      margin-bottom: 20px;
      .update-log1{
          .body{
            display: flex;justify-content: space-between;
            .logitem{
              text-align: center;
            }
          }
        }
    }    
  }
</style>

