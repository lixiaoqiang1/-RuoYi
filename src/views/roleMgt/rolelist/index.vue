<template>
  <div class="app-container">
    <el-row :gutter="20">
      <!--用户数据-->
      <el-col :span="24" :xs="24">
        <el-form :model="queryParams" ref="queryForm" :inline="true" v-show="showSearch" label-width="68px">
          <el-form-item label="用户名称" prop="userName">
            <el-input
              v-model="queryParams.userName"
              placeholder="请输入用户名称"
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
          <el-col :span="1.5">
            <el-button
              type="primary"
              plain
              icon="el-icon-plus"
              size="mini"
              @click="handleAdd"
              v-hasPermi="['system:user:add']"
            >新增</el-button>
          </el-col>
          <el-col :span="1.5">
            <el-button
              type="warning"
              plain
              icon="el-icon-download"
              size="mini"
              @click="handleExport"
              v-hasPermi="['system:user:export']"
            >导出</el-button>
          </el-col>
          <right-toolbar :showSearch.sync="showSearch" @queryTable="getList" :columns="columns"></right-toolbar>
        </el-row>
        <el-table v-loading="loading" :data="userList">
          <el-table-column label="编号" align="center" key="userId" prop="userId" v-if="columns[0].visible" />
          <el-table-column label="员工姓名" align="center" key="userName" prop="userName" v-if="columns[1].visible" :show-overflow-tooltip="true" />
          <el-table-column label="员工号" align="center" key="nickName" prop="nickName" v-if="columns[2].visible" :show-overflow-tooltip="true" />
          <el-table-column label="角色身份" align="center" key="deptName" prop="dept.deptName" v-if="columns[3].visible" :show-overflow-tooltip="true" />
          <el-table-column label="二级分行" align="center" key="phonenumber" prop="phonenumber" v-if="columns[4].visible" />
          <el-table-column label="一级支行" align="center" key="phonenumber5" prop="phonenumber5" v-if="columns[5].visible" />
          <el-table-column label="网点名称" align="center" key="phonenumber6" prop="phonenumber6" v-if="columns[6].visible" />
          <el-table-column label="网点号" align="center" key="phonenumber7" prop="phonenumber7" v-if="columns[7].visible" />
          <el-table-column
            label="操作"
            align="center"
            width="260"
            class-name="small-padding fixed-width"
          >
            <template slot-scope="scope">
              <el-button type="info" size="small">启用</el-button>
              <el-button type="danger" size="small">停用</el-button>
              <el-button type="primary" size="small">修改</el-button>
              <!-- <el-button
                size="mini"
                type="text"
                icon="el-icon-edit"
                @click="handleUpdate(scope.row)"
                v-hasPermi="['system:user:edit']"
              >修改</el-button> -->
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
    </el-row>
  </div>
</template>

<script>
import { listUser, getUser, delUser, addUser, updateUser, exportUser, resetUserPwd, changeUserStatus, importTemplate } from "@/api/system/user";
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
      loading: false,
      // 选中数组
      // ids: [],
      // 非单个禁用
      // single: true,
      // 非多个禁用
      // multiple: true,
      // 显示搜索条件
      showSearch: true,
      // 总条数
      total: 0,
      // 用户表格数据
      // <el-table-column label="编号" align="center" key="userId" prop="userId" v-if="columns[0].visible" />
      //     <el-table-column label="员工姓名" align="center" key="userName" prop="userName" v-if="columns[1].visible" :show-overflow-tooltip="true" />
      //     <el-table-column label="员工号" align="center" key="nickName" prop="nickName" v-if="columns[2].visible" :show-overflow-tooltip="true" />
      //     <el-table-column label="角色身份" align="center" key="deptName" prop="dept.deptName" v-if="columns[3].visible" :show-overflow-tooltip="true" />
      //     <el-table-column label="二级分行" align="center" key="phonenumber" prop="phonenumber" v-if="columns[4].visible" />
      //     <el-table-column label="一级支行" align="center" key="phonenumber5" prop="phonenumber5" v-if="columns[5].visible" />
      //     <el-table-column label="网点名称" align="center" key="phonenumber6" prop="phonenumber6" v-if="columns[6].visible" />
      //     <el-table-column label="网点号" align="center" key="phonenumber7" prop="phonenumber7" v-if="columns[7].visible" />
      userList: [
        {userId:'1',userName:'1',nickName:'1',deptName:'1',phonenumber:'1',phonenumber5:'1',phonenumber6:'1',phonenumber7:'1',}
      ],
      // 弹出层标题
      // title: "",
      // 部门树选项
      // deptOptions: undefined,
      // 是否显示弹出层
      // open: false,
      // 部门名称
      // deptName: undefined,
      // 默认密码
      // initPassword: undefined,
      // 日期范围
      // dateRange: [],
      // 状态数据字典
      // statusOptions: [],
      // 性别状态字典
      // sexOptions: [],
      // 岗位选项
      // postOptions: [],
      // 角色选项
      // roleOptions: [],
      // 表单参数
      form: {},
      // defaultProps: {
      //   children: "children",
      //   label: "label"
      // },
      // 用户导入参数
      // upload: {
      //   // 是否显示弹出层（用户导入）
      //   open: false,
      //   // 弹出层标题（用户导入）
      //   title: "",
      //   // 是否禁用上传
      //   isUploading: false,
      //   // 是否更新已经存在的用户数据
      //   updateSupport: 0,
      //   // 设置上传的请求头部
      //   headers: { Authorization: "Bearer " + getToken() },
      //   // 上传的地址
      //   url: process.env.VUE_APP_BASE_API + "/system/user/importData"
      // },
      // 查询参数
      queryParams: {
        pageNum: 1,
        pageSize: 10,
        userName: undefined,
        // phonenumber: undefined,
        // status: undefined,
        // deptId: undefined
      },
      columns: [
        { key: 0, label: `编号`, visible: true },
        { key: 1, label: `员工姓名`, visible: true },
        { key: 2, label: `员工号`, visible: true },
        { key: 3, label: `角色身份`, visible: true },
        { key: 4, label: `二级分行`, visible: true },
        { key: 5, label: `一级支行`, visible: true },
        { key: 6, label: `网点名称`, visible: true },
        { key: 7, label: `网点号`, visible: true },
        { key: 8, label: `操作`, visible: true },
      ],
      // 表单校验
      rules: {
        userName: [
          { required: true, message: "用户名称不能为空", trigger: "blur" }
        ],
        nickName: [
          { required: true, message: "用户昵称不能为空", trigger: "blur" }
        ],
        password: [
          { required: true, message: "用户密码不能为空", trigger: "blur" }
        ],
        email: [
          {
            type: "email",
            message: "'请输入正确的邮箱地址",
            trigger: ["blur", "change"]
          }
        ],
        // phonenumber: [
        //   {
        //     pattern: /^1[3|4|5|6|7|8|9][0-9]\d{8}$/,
        //     message: "请输入正确的手机号码",
        //     trigger: "blur"
        //   }
        // ]
      }
    };
  },
  watch: {
    // 根据名称筛选部门树
    // deptName(val) {
    //   this.$refs.tree.filter(val);
    // }
  },
  created() {
    // this.getList();
    // this.getTreeselect();
    // this.getDicts("sys_normal_disable").then(response => {
    //   this.statusOptions = response.data;
    // });
    // this.getDicts("sys_user_sex").then(response => {
    //   this.sexOptions = response.data;
    // });
    // this.getConfigKey("sys.user.initPassword").then(response => {
    //   this.initPassword = response.msg;
    // });
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
    /** 查询部门下拉树结构 */
    // getTreeselect() {
    //   treeselect().then(response => {
    //     this.deptOptions = response.data;
    //   });
    // },
    // 筛选节点
    filterNode(value, data) {
      if (!value) return true;
      return data.label.indexOf(value) !== -1;
    },
    // 节点单击事件
    handleNodeClick(data) {
      this.queryParams.deptId = data.id;
      this.getList();
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
    // 取消按钮
    cancel() {
      this.open = false;
      this.reset();
    },
    // 表单重置
    reset() {
      this.form = {
        userId: undefined,
        deptId: undefined,
        userName: undefined,
        nickName: undefined,
        password: undefined,
        // phonenumber: undefined,
        // email: undefined,
        // sex: undefined,
        // status: "0",
        // remark: undefined,
        // postIds: [],
        // roleIds: []
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
    /** 新增按钮操作 */
    handleAdd() {
      // this.open = true;
      // this.title = "添加用户";
      // this.reset();
      // // this.getTreeselect();
      // getUser().then(response => {
      //   this.postOptions = response.posts;
      //   this.roleOptions = response.roles;
      //   this.open = true;
      //   this.title = "添加用户";
      //   this.form.password = this.initPassword;
      // });
    },
    /** 修改按钮操作 */
    handleUpdate(row) {
      // this.reset();
      // this.getTreeselect();
      // const userId = row.userId || this.ids;
      // getUser(userId).then(response => {
      //   this.form = response.data;
      //   this.postOptions = response.posts;
      //   this.roleOptions = response.roles;
      //   this.form.postIds = response.postIds;
      //   this.form.roleIds = response.roleIds;
      //   this.open = true;
      //   this.title = "修改用户";
      //   this.form.password = "";
      // });
    },
    
    
    // /** 删除按钮操作 */
    // handleDelete(row) {
    //   const userIds = row.userId || this.ids;
    //   this.$confirm('是否确认删除用户编号为"' + userIds + '"的数据项?', "警告", {
    //       confirmButtonText: "确定",
    //       cancelButtonText: "取消",
    //       type: "warning"
    //     }).then(function() {
    //       return delUser(userIds);
    //     }).then(() => {
    //       this.getList();
    //       this.msgSuccess("删除成功");
    //     })
    // },
    /** 导出按钮操作 */
    handleExport() {
      const queryParams = this.queryParams;
      this.$confirm('是否确认导出所有用户数据项?', "警告", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        }).then(function() {
          return exportUser(queryParams);
        }).then(response => {
          this.download(response.msg);
        })
    },
    /** 导入按钮操作 */
    // handleImport() {
    //   this.upload.title = "用户导入";
    //   this.upload.open = true;
    // },
    /** 下载模板操作 */
    importTemplate() {
      importTemplate().then(response => {
        this.download(response.msg);
      });
    },
    // 文件上传中处理
    // handleFileUploadProgress(event, file, fileList) {
    //   this.upload.isUploading = true;
    // },
    // 文件上传成功处理
    // handleFileSuccess(response, file, fileList) {
    //   this.upload.open = false;
    //   this.upload.isUploading = false;
    //   this.$refs.upload.clearFiles();
    //   this.$alert(response.msg, "导入结果", { dangerouslyUseHTMLString: true });
    //   this.getList();
    // },
    // // 提交上传文件
    // submitFileForm() {
    //   this.$refs.upload.submit();
    // }
  }
};
</script>