<template>
    <div>111
        <p>
          <el-button
            type="primary"
            size="mini"
            icon="el-icon-cloudy"
            plain
            @click="goTarget"
            >访问码云</el-button
          >
        </p>
    </div>
</template>
<script>
export default {
    data(){
        return{

        }
    },
    created(){},
    mounted(){},
    methods:{
        goTarget() {
            this.$router.push({ path: 'rolelist' })
        },
    }
}
</script>