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
          <el-form-item label="创建人" prop="userName">
            <el-input
              v-model="queryParams.userName"
              placeholder="请输入创建人"
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
          <el-table-column label="建议分类" align="center" key="userId1" prop="userId" v-if="columns[0].visible" />
          <el-table-column label="建议内容" align="center" key="userName2" prop="userName" v-if="columns[1].visible" :show-overflow-tooltip="true" />
          <el-table-column label="创建时间" align="center" key="nickName3" prop="nickName" v-if="columns[2].visible" :show-overflow-tooltip="true" />
          <el-table-column label="回复状态" align="center" key="deptName4" prop="dept.deptName" v-if="columns[3].visible" :show-overflow-tooltip="true" />
          <el-table-column label="操作" align="center" key="deptName5" v-if="columns[3].visible" :show-overflow-tooltip="true">
            <template slot-scope="scope">
              <a class="blue" href="javascript:;"  @click="clickbtnh(scope.row)">回复</a>
              <!-- <a class="blue" href="javascript:;" @click="clickbtnl(scope.row)">查看</a> -->
            </template>
          </el-table-column>
          <el-table-column label="所有人可见" align="center" key="status" v-if="columns[4].visible">
            <template slot-scope="scope">
              <el-switch
                v-model="scope.row.status"
                active-value="0"
                inactive-value="1"
                @change="handleStatusChange(scope.row)"
              ></el-switch>
            </template>
          </el-table-column>
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
import { listUser } from "@/api/system/user";
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
      userList: null,
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
    clickbtnh(row){
      console.log('111')
      this.$router.push({
        path:'replyMgts2'
      })
    },
    clickbtnl(row){
      console.log('222')
    },
    /** 查询用户列表 */
    getList() {
      this.loading = true;
      console.log(this.queryParams, this.dateRange)
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
    // 用户状态修改
    handleStatusChange(row) {
      let text = row.status === "0" ? "启用" : "停用";
      this.$confirm('确认要"' + text + '""' + row.userName + '"用户吗?', "警告", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        }).then(function() {
          return changeUserStatus(row.userId, row.status);
        }).then(() => {
          this.msgSuccess(text + "成功");
        }).catch(function() {
          row.status = row.status === "0" ? "1" : "0";
        });
    },
  }
};
</script>