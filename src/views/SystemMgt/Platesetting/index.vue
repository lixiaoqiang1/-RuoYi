<template>
  <div class="app-container">
    <el-form :model="queryParams" :rules="rules" ref="queryForm" :inline="true" v-show="showSearch">
      <el-form-item label="创建时间">
        <el-date-picker
          v-model="dateRange"
          size="small"
          style="width: 240px"
          value-format="yyyy-MM-dd"
          type="daterange"
          range-separator="-"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
        ></el-date-picker>
      </el-form-item>
      <el-form-item label="机构" prop="jigou">
        <el-select v-model="queryParams.jigou" placeholder="请选择机构" clearable size="small">
          <el-option
            v-for="item in jigoulist"
            :key="item.id"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </el-form-item>
      <el-form-item label="机构范围" prop="jigoufw">
        <el-select v-model="queryParams.jigoufw" placeholder="请选择机构范围" clearable size="small">
          <el-option
            v-for="item in jigoulist"
            :key="item.id"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" icon="el-icon-search" size="mini" @click="handleQuery">搜索</el-button>
        <el-button icon="el-icon-refresh" size="mini" @click="resetQuery">重置</el-button>
      </el-form-item>
    </el-form>

    <el-row :gutter="10" class="mb8">
      <el-col :span="1.5">
        <el-button
          type="primary"
          plain
          size="mini"
          @click="handledc"
        >导出CSV报表</el-button>
      </el-col>
      <right-toolbar :showSearch.sync="showSearch" @queryTable="getList"></right-toolbar>
    </el-row>

    <el-table v-loading="loading" :data="menuList" >
      <el-table-column prop="aaa" label="编号" :show-overflow-tooltip="true"></el-table-column>
      <el-table-column prop="aaa" label="姓名" :show-overflow-tooltip="true"></el-table-column>
      <el-table-column prop="aaa" label="员工号" :show-overflow-tooltip="true"></el-table-column>
      <el-table-column prop="aaa" label="机构号" :show-overflow-tooltip="true"></el-table-column>
      <el-table-column prop="aaa" label="机构名" :show-overflow-tooltip="true"></el-table-column>
      <el-table-column prop="aaa" label="发布知识数" :show-overflow-tooltip="true"></el-table-column>
      <el-table-column prop="aaa" label="获浏览数" :show-overflow-tooltip="true"></el-table-column>
      <el-table-column prop="aaa" label="获收藏数" :show-overflow-tooltip="true"></el-table-column>
      <el-table-column prop="aaa" label="获点赞数" :show-overflow-tooltip="true"></el-table-column>
      <el-table-column prop="aaa" label="获转发数" :show-overflow-tooltip="true"></el-table-column>
      <el-table-column prop="aaa" label="获无用数" :show-overflow-tooltip="true"></el-table-column>
      <el-table-column prop="aaa" label="本人收藏数" :show-overflow-tooltip="true"></el-table-column>
      <el-table-column prop="aaa" label="本人浏览数" :show-overflow-tooltip="true"></el-table-column>
      <el-table-column prop="aaa" label="本人转发数" :show-overflow-tooltip="true"></el-table-column>
      <el-table-column prop="aaa" label="本人建议数" :show-overflow-tooltip="true"></el-table-column>
      <el-table-column prop="aaa" label="建议答复数" :show-overflow-tooltip="true"></el-table-column>
    </el-table>
    <pagination
      :total="total"
      :page.sync="queryParams.pageNum"
      :limit.sync="queryParams.pageSize"
      @pagination="getList"
    />
  </div>
</template>

<script>
import { listMenu } from "@/api/system/menu";
export default {
  name: "Platesetting",
  components: {},
  data() {
    return {
      // 遮罩层
      loading: false,
      // 显示搜索条件
      showSearch: true,
      total: 0,
      // 菜单表格树数据
      menuList: [
      {aaa:'11'},
      {aaa:'11'},
      {aaa:'11'},
      ],
      // 查询参数
      queryParams: {
        pageNum: 1,
        pageSize: 10,
        jigou: undefined,
        jigoufw: undefined
      },
      jigoulist:[
      {id:0,label:'11',value:'11'},
      {id:1,label:'11',value:'11'},
      ],
      // 日期范围
      dateRange: [],
      // 表单参数
      form: {},
      // 表单校验
      rules: {
        jigou: [
          { required: true, message: "机构不能为空", trigger: "blur" }
        ],
        jigoufw: [
          { required: true, message: "机构范围不能为空", trigger: "blur" }
        ]
      }
    };
  },
  created() {
    // this.getList();
  },
  methods: {
    /** 查询菜单列表 */
    getList() {
      this.loading = true;
      // listMenu(this.queryParams).then(response => {
      //   this.menuList = this.handleTree(response.data, "menuId");
      //   this.loading = false;
      // });
    },
    // 表单重置
    reset() {
      this.form = {
        menuId: undefined,
        parentId: 0,
        menuName: undefined,
        icon: undefined,
        menuType: "M",
        orderNum: undefined,
        isFrame: "1",
        isCache: "0",
        visible: "0",
        status: "0"
      };
      this.resetForm("form");
    },
    /** 搜索按钮操作 */
    handleQuery() {
      this.getList();
    },
    /** 重置按钮操作 */
    resetQuery() {
      this.resetForm("queryForm");
      this.handleQuery();
    },
    /** 新增按钮操作 */
    handledc(row) {
      console.log('11')
    },
  }

};
</script>