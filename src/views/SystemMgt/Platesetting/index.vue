<template>
  <div class="app-container">
    <h3>版块设置-我的建议</h3>
    <div class="text">
      <span>开启时，我的建议模块正常显示使用；关闭后，我的模块将不再显示且无法进入</span>
      <el-switch class="right" v-model="value" @change="getchange" />
    </div>
  </div>
</template>

<script>
import { listMenu } from "@/api/system/menu";
export default {
  name: "Platesetting",
  components: {},
  data() {
    return {
      value: true,
    };
  },
  created() {
    // this.getList();
  },
  methods: {
    getchange(){
      console.log(this.value)
    }
  }

};
</script>
<style scoped lang="scss">
.app-container{
  h3,.text{
    line-height: 38px;
  }
}
</style>