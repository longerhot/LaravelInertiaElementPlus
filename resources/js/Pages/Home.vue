<template>
    <el-row>
        <el-col :span="24"><div class="grid-content bg-purple-dark">哈哈</div></el-col>
    </el-row>
</template>

<script>
export default {
    name: 'Home'
}
</script>

<style scoped lang="scss">
.el-row {
    margin-top: 120px;
    &:last-child {
         margin-bottom: 0;
     }
}
.el-col {
    border-radius: 4px;
}
.bg-purple-dark {
    background: #99a9bf;
}
.bg-purple {
    background: #d3dce6;
}
.bg-purple-light {
    background: #e5e9f2;
}
.grid-content {
    border-radius: 4px;
    min-height: 36px;
}
.row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
}
</style>
