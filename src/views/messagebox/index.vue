<template>
  <div class="app-container">
    <h4>知识收藏<span>8</span></h4>
    <div class="cont-list" v-for="(item,index) in datalist" :key="index">
        <div class="cont-item">
          <div>{{ item.cont1 }}<a class="blue" @click="clickdtl()">{{ item.title }}</a> {{ item.cont2 }}</div>
          <div>{{ item.time }}</div>
        </div>
        <!-- <el-divider></el-divider> -->
    </div>
  </div>
</template>

<script>
import { listUser } from "@/api/system/user";


export default {
  name: "messagebox",
  data() {
    return {
      datalist:[
      {cont1:'您发布的知识',title:'《知识的标题知识的标题知识的标题》',cont2:'有人点赞啦',time:'2022-09-07'},
      {cont1:'您发布的知识',title:'《知识的标题知识的标题知识的标题》',cont2:'有人点赞啦',time:'2022-09-07'},
      {cont1:'您发布的知识',title:'《知识的标题知识的标题知识的标题》',cont2:'有人点赞啦',time:'2022-09-07'},
      {cont1:'您发布的知识',title:'《知识的标题知识的标题知识的标题》',cont2:'有人点赞啦',time:'2022-09-07'},
      {cont1:'您发布的知识',title:'《知识的标题知识的标题知识的标题》',cont2:'有人点赞啦',time:'2022-09-07'},
      ]
    }
      
  },
  created() {
    const id = this.$route.query
    console.log(id)
    this.getList();
  },
  methods: {
    /** 查询用户列表 */
    getList() {
      this.loading = true;
      // listUser(this.addDateRange(this.queryParams, this.dateRange)).then(response => {
      //     this.userList = response.rows;
      //     this.total = response.total;
      //     this.loading = false;
      //   }
      // );
    },
    clickdtl(){
      this.$router.push({
        "path": "zdetails"
      })
    }
    
  }
};
</script>

<style lang="scss" scoped>
.app-container{
  font-size: 14px;
  .cont-list{
    .cont-item{
      line-height: 38px;display: flex;justify-content: space-between;color: #666;border-bottom: 1px #ddd solid;
    }
  }
}
</style>