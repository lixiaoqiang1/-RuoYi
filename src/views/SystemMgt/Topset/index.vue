<template>
    <div class="app-container">
      <h3>置顶条数设置</h3>
      <p class="text">更改所有知识分类的最大置顶条数，输入范围1-20</p>
      <div class="group-btn">
        <el-input-number v-model="value" controls-position="right" @change="handleChange" :min="1" :max="20" :disabled="disabled"></el-input-number>
        <el-button type="primary" v-if="disabled==false" @click="clickCom">完成</el-button>
        <el-button type="primary" v-else @click="clickEdit">编辑</el-button>
      </div>
    </div>
  </template>
  
  <script>
  
  export default {
    name: "",
    data() {
      return {
        value: 10,
        disabled:true
      }
    },
    mounted(){
    },
    methods: {
      handleChange(value) {
        console.log(value);
      },
      clickEdit() {
        this.disabled = false
      },
      clickCom() {
        console.log(this.value);
        this.disabled = true
      }
    },
  }
  </script>
  <style scoped lang="scss">
  .app-container{
    h3,.text{
      line-height: 38px;
    }
    .group-btn{
      display: flex;justify-content: space-between;
    }
    ::v-deep .el-input.is-disabled .el-input__inner{
      color: #666;
    }
  }
  </style>
  
  