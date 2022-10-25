<template>
    <div class="app-container">
      <p class="toptxt"> 清退机制设置 <br />
        设置清退机制的条件，以下条件可单独关闭或开启；关闭后对应条件不生效，点击编辑修改条件内容
      </p>
      <div class="list">
        <ul>
          <li>
            <p>清退时间</p>
            <div class="list-item">
              <span>知识发布时间超过</span>
              <el-input class="isinput" v-model="value1" placeholder="请输入"></el-input>
              <span>年（固定时间内）且满足以下条件（点赞、浏览、转发、无用、收藏条件）之一的，系统自动清除知识   </span>
              <div class="right">
                <el-switch v-model="value2" active-text="" inactive-text="" />
                <a class="isbtn">编辑</a>
              </div>
            </div>
            <el-divider></el-divider>
          </li>
          <li>
            <p>清退时间</p>
            <div class="list-item">
              <span>知识发布时间超过</span>
              <el-input class="isinput" v-model="value1" placeholder="请输入"></el-input>
              <span>年（固定时间内）且满足以下条件（点赞、浏览、转发、无用、收藏条件）之一的，系统自动清除知识   </span>
              <div class="right">
                <el-switch v-model="value2" active-text="" inactive-text="" />
                <a class="isbtn">编辑</a>
              </div>
            </div>
            <el-divider></el-divider>
          </li>
        </ul>
      </div>
    </div>
  </template>
  
  <script>
  
  export default {
    name: "",
    data() {
      return {
        value1: '',
        value2: true,
      }
    },
    mounted(){
    },
    methods: {
      
    },
  }
  </script>
  
  <style lang="scss" scoped>
  .app-container{
    .toptxt{
      line-height: 30px;margin-bottom: 20px;border:1px #ddd solid;padding: 20px;
    }
    .list{
      li{
        padding: 0 20px;
        p{
          line-height: 30px;margin-bottom: 10px;
        }
        .list-item{
          font-size: 14px;line-height: 40px;
          .isinput{
            width: 100px;margin: 0 15px;
          }
          .right{
            float: right;
          }
          .isbtn{
            margin-left: 40px;
          }
        }
      }
      
    }
  }
  
  </style>
  
  