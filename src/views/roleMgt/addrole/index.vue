<template>
  <div class="app-container">
    <!-- 添加或修改参数配置对话框 -->
    <el-form ref="form" :model="form" :rules="rules" label-width="80px">
      <el-row>
        <h5 class="title">银行信息</h5>
        <el-col :span="24">
          <el-form-item label="所属分行">
            <el-select v-model="form.fenhang" placeholder="请选择所属分行">
              <el-option v-for="item in fenhanglist" :key="item.id" :label="item.label" :value="item.value"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="24">
          <el-form-item label="所属支行">
            <el-select v-model="form.fenhang" placeholder="请选择所属支行">
              <el-option v-for="item in fenhanglist" :key="item.id" :label="item.label" :value="item.value"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="24">
          <el-form-item label="所属网点">
            <el-select v-model="form.fenhang" placeholder="请选择所属网点">
              <el-option v-for="item in fenhanglist" :key="item.id" :label="item.label" :value="item.value"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <h5 class="title">角色信息</h5>
        <el-col :span="24">
          <el-form-item label="姓名" prop="nickName">
            <el-input v-model="form.nickName" placeholder="请输入用户姓名" />
          </el-form-item>
        </el-col>
        <el-col :span="24">
          <el-form-item label="员工号" prop="nickName">
            <el-input v-model="form.nickName" placeholder="请输入员工号" />
          </el-form-item>
        </el-col>
        <el-col :span="24">
          <el-form-item label="角色权限">
            <el-select v-model="form.fenhang" placeholder="请选择角色权限">
              <el-option v-for="item in fenhanglist" :key="item.id" :label="item.label" :value="item.value"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button type="primary" @click="submitForm">确 定</el-button>
      <el-button @click="cancel">重 置</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      fenhanglist: [
      {id:'11',label:'11',value:'11',},
      {id:'22',label:'22',value:'22',},
      {id:'33',label:'33',value:'33',},
      ],
      // 表单参数
      form: {
        fenhang: "",
        nickName: "",
      },
      // 表单校验
      rules: {
        userName: [
          { required: true, message: "用户名称不能为空", trigger: "blur" },
        ],
        nickName: [
          { required: true, message: "用户昵称不能为空", trigger: "blur" },
        ],
        password: [
          { required: true, message: "用户密码不能为空", trigger: "blur" },
        ],
        email: [
          {
            type: "email",
            message: "'请输入正确的邮箱地址",
            trigger: ["blur", "change"],
          },
        ],
        // phonenumber: [
        //   {
        //     pattern: /^1[3|4|5|6|7|8|9][0-9]\d{8}$/,
        //     message: "请输入正确的手机号码",
        //     trigger: "blur"
        //   }
        // ]
      },
    };
  },
  created() {
    this.reset();
  },
  mounted() {},
  methods: {
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
    /** 提交按钮 */
    submitForm: function () {
      console.log("111");
      //   this.$refs["form"].validate(valid => {
      //     if (valid) {
      //       if (this.form.userId != undefined) {
      //         updateUser(this.form).then(response => {
      //           this.msgSuccess("修改成功");
      //           this.open = false;
      //           this.getList();
      //         });
      //       } else {
      //         addUser(this.form).then(response => {
      //           this.msgSuccess("新增成功");
      //           this.open = false;
      //           this.getList();
      //         });
      //       }
      //     }
      //   });
    },
    // 取消按钮
    cancel() {
      console.log("222");
      this.reset();
    },
  },
};
</script>

<style lang="scss" scoped>
.app-container{
  .title{
      width: 100%;display: inline-block;padding: 0;margin: 0; display: inline-block;  background: #eee; padding: 0 14px; line-height: 34px;  margin-bottom: 20px;
  }
  .el-col-24 {
      text-align: center;
      .el-form-item{
          width: 500px;display: inline-block;
      }
  }
  .el-select{
      width: 100%;
  }
}

</style>

