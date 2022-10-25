<template>
  <div class="app-container">
    <el-row :gutter="20">
      <!--用户数据-->
      <el-col :span="24" :xs="24">
        <el-form :model="queryParams" ref="queryForm" :inline="true" v-show="showSearch" label-width="68px">
          <el-form-item label="查询时间">
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
          <el-form-item label="标题" prop="userName">
            <el-input
              v-model="queryParams.userName"
              placeholder="请输入标题"
              clearable
              size="small"
              style="width: 240px"
              @keyup.enter.native="handleQuery"
            />
          </el-form-item>
          <el-form-item>
            <el-button type="primary" icon="el-icon-search" size="mini" @click="handleQuery">搜索</el-button>
            <el-button icon="el-icon-refresh" size="mini" @click="resetQuery">重置</el-button>
          </el-form-item>
        </el-form>

        <el-row :gutter="10" class="mb8">
          <right-toolbar :showSearch.sync="showSearch" @queryTable="getList" :columns="columns"></right-toolbar>
        </el-row>
        <el-table v-loading="loading" :data="userList">
          <el-table-column label="知识标题" align="center" key="userId1" prop="userId" v-if="columns[0].visible">
            <template>
              <a @click="clickdetail()">aaa</a>
            </template>
          </el-table-column>
          <el-table-column label="创建时间" align="center" key="userName2" prop="userName" v-if="columns[1].visible" :show-overflow-tooltip="true" />
          <el-table-column label="浏览量" align="center" key="nickName3" prop="nickName" v-if="columns[2].visible" :show-overflow-tooltip="true" />
          <el-table-column label="点赞数" align="center" key="deptName4" prop="dept.deptName" v-if="columns[3].visible" :show-overflow-tooltip="true" />
          <el-table-column label="收藏数" align="center" key="deptName5" prop="dept.deptName" v-if="columns[3].visible" :show-overflow-tooltip="true" />
        </el-table>

        <pagination
          v-show="total>0"
          :total="total"
          :page.sync="queryParams.pageNum"
          :limit.sync="queryParams.pageSize"
          @pagination="getList"
        />
      </el-col>
    </el-row><!-- 添加或修改参数配置对话框 -->
  </div>
</template>

<script>
import { listUser, getUser, delUser, addUser, updateUser, resetUserPwd, changeUserStatus, importTemplate } from "@/api/system/user";
import { getToken } from "@/utils/auth";
import { treeselect } from "@/api/system/dept";
import Treeselect from "@riophae/vue-treeselect";
import "@riophae/vue-treeselect/dist/vue-treeselect.css";

export default {
  name: "User",
  components: { Treeselect },
  data() {
    return {
      // 遮罩层
      loading: true,
      // 显示搜索条件
      showSearch: true,
      // 总条数
      total: 0,
      // 用户表格数据
      userList: [
        {userId:'我的知识'}
      ],
      // 表单参数
      form: {},
      // 查询参数
      dateRange: undefined,
      queryParams: {
        pageNum: 1,
        pageSize: 10,
        userName: undefined,
      },
      // 表单校验
      rules: {
        // userName: [
        //   { required: true, message: "用户名称不能为空", trigger: "blur" }
        // ]
      },
      columns: [
        { key: 0, label: `分类编号`, visible: true },
        { key: 1, label: `分类名称`, visible: true },
        { key: 2, label: `分类级别`, visible: true },
        { key: 3, label: `排序`, visible: true },
        { key: 4, label: `操作`, visible: true },
      ],
      usform:{
        postName:""
      }
    };
  },
  watch: {
  },
  created() {
    this.getList();
  },
  methods: {
    /** 查询用户列表 */
    getList() {
      this.loading = true;
      listUser(this.addDateRange(this.queryParams, this.dateRange)).then(response => {
          this.userList = response.rows;
          this.total = response.total;
          this.loading = false;
        }
      );
    },
    // 表单重置
    reset() {
      this.form = {
        userName: undefined,
      };
      this.resetForm("form");
    },
    /** 搜索按钮操作 */
    handleQuery() {
      this.queryParams.page = 1;
      this.getList();
    },
    /** 重置按钮操作 */
    resetQuery() {
      this.dateRange = [];
      this.resetForm("queryForm");
      this.handleQuery();
    },
    clickdetail(){
      this.$router.push({
        "path": "zsdetails"
      })
    }
  }
};
</script>