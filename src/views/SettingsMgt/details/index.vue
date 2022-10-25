<template>
  <div class="app-container">
    111
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
  }
};
</script>