<template>
  <div class="content">
    <el-form ref="form" :model="form" :rules="rules" label-width="80px">
      <el-row>
        <el-col :span="12">
          <el-form-item label="标题" prop="nickTitle">
            <el-input v-model="form.nickTitle" placeholder="请输入标题" />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="分类" prop="fenlei">
            <el-select v-model="form.fenlei" placeholder="请选择分类">
              <el-option v-for="item in fenleilist" :key="item.id" :label="item.label" :value="item.value"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="关键字" prop="guanjianzi">
            <el-input v-model="form.guanjianzi" placeholder="请输入关键字，最多添加5个关键字且字数不能超过10个" />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="置顶方式" prop="zhiding">
            <el-radio-group v-model="form.zhiding" size="small">
              <el-radio label="0">普通置顶</el-radio>
              <el-radio label="1">优先置顶</el-radio>
            </el-radio-group>
          </el-form-item>
        </el-col>
        <el-col :span="24">
          <el-form-item label="内容" prop="reason">
            <!-- 富文本编辑器, 容器 -->
            <div id="J_quillEditor" class="J_quillEditor" style="height:240px"></div>
          </el-form-item>
        </el-col>
        <el-col :span="24">
          <el-form-item label="上传附件" prop="reason">
            <el-upload
            class="upload-demo"
            ref="upload"
            action="https://jsonplaceholder.typicode.com/posts/"
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            :file-list="fileList"
            :auto-upload="false">
            <el-button slot="trigger" icon="el-icon-plus">上传附件</el-button>
            <!-- <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传到服务器</el-button> -->
            <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
          </el-upload>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button type="primary" @click="submitForm">发 布</el-button>
      <el-button @click="cancel">取 消</el-button>
    </div>
  </div>
</template>

<script>
import Quill from "quill"; //引入模块
import "quill/dist/quill.snow.css"; //引入样式
import "quill/dist/quill.core.css";
import "quill/dist/quill.bubble.css";

export default {
  name: "Quill",
  data() {
    return {
      // reason: "",
      quillEditor: null,
      quillEditorToolbarOptions: [
        ["bold", "italic", "underline", "strike"],
        ["blockquote", "code-block", "image"],
        [
          {
            header: 1,
          },
          {
            header: 2,
          },
        ],
        [
          {
            list: "ordered",
          },
          {
            list: "bullet",
          },
        ],
        [
          {
            script: "sub",
          },
          {
            script: "super",
          },
        ],
        [
          {
            indent: "-1",
          },
          {
            indent: "+1",
          },
        ],
        [
          {
            direction: "rtl",
          },
        ],
        [
          {
            size: ["small", false, "large", "huge"],
          },
        ],
        [
          {
            header: [1, 2, 3, 4, 5, 6, false],
          },
        ],
        [
          {
            color: [],
          },
          {
            background: [],
          },
        ],
        [
          {
            font: [],
          },
        ],
        [
          {
            align: [],
          },
        ],
        ["clean"],
      ],
      fenleilist:[
      {id:'11',label:'11',value:'11',},
      {id:'22',label:'22',value:'22',},
      {id:'33',label:'33',value:'33',},
      ],
      // 表单参数
      form: {
        fenlei: "",
        nickTitle: "",
        guanjianzi:"",
        zhiding:"0",
        reason:"",
      },
      fileList: [
      // {name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}, 
      // {name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}
      ],
      rules: {
        nickTitle: [
          { required: true, message: "标题不能为空", trigger: "blur" },
        ],
        fenlei: [
          { required: true, message: "分类不能为空", trigger: "blur" },
        ],
        guanjianzi: [
          { required: true, message: "关键字不能为空", trigger: "blur" },
        ],
        reason: [
          { required: true, message: "内容不能为空", trigger: "blur" },
        ],
      },
    };
  },
  mounted() {
    this.quillEditorHandle();
  },
  methods: {
    // 富文本编辑器
    quillEditorHandle() {
      this.quillEditor = new Quill("#J_quillEditor", {
        modules: {
          toolbar: this.quillEditorToolbarOptions,
        },
        theme: "snow",
      });
      // 自定义上传图片功能 (使用element upload组件)
      this.quillEditor.getModule("toolbar").addHandler("image", () => {
        // 自定义上传图片事件
        console.log("点击上传图片触发");
      });

      // 监听内容变化，动态赋值
      this.quillEditor.on("text-change", () => {
        this.form.reason = this.quillEditor.root.innerHTML;
      });
    },
    submitUpload() {
      this.$refs.upload.submit();
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    },

    //获取的内容值
    submitForm() {
      console.log(this.$refs.upload.uploadFiles)
      // console.log("this.reason");
      // console.log(this.form.reason);
    },
    // 取消按钮
    cancel() {
      console.log("222");
    },
  },
};
</script>

<style lang="scss" scoped>
.el-select{
    width: 100%;
}
</style>

