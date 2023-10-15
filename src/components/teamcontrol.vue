<template>
    <el-button type="primary" round @click="trytoControl()">管理我的团队</el-button>
    <div v-show="showControl"  class="controlMenu">
        <el-container class="layout-container-demo" style="height: 500px">
            <el-aside width="200px">
                <el-scrollbar>
                    <el-menu :default-openeds="['1', '2']" @select="handleMenuSelset">
                        <el-sub-menu index="1">
                            <template #title>
                                <el-icon><User /></el-icon>队员管理
                            </template>
                            <el-menu-item index="1-1">队员信息</el-menu-item>
                            <el-menu-item index="1-2">队员移除</el-menu-item>
                        </el-sub-menu>
                        <el-sub-menu index="2">
                            <template #title>
                                <el-icon><setting /></el-icon>团队设置
                            </template>
                            <el-menu-item index="3-1">密码变更</el-menu-item>
                            <el-menu-item index="3-2">上传头像</el-menu-item>
                            <el-menu-item index="3-3">团队解散</el-menu-item>
                        </el-sub-menu>
                    </el-menu>
                </el-scrollbar>
            </el-aside>

            <!-- <el-container>
                <el-main>
                    <el-scrollbar>
                        <el-table :data="tableData">
                            <el-table-column prop="date" label="Date" width="140" />
                            <el-table-column prop="name" label="Name" width="120" />
                            <el-table-column prop="address" label="Address" />
                        </el-table>
                    </el-scrollbar>
                </el-main>
            </el-container> -->
        </el-container>
    </div>

</template>

<script>
import { Menu as IconMenu, Message, Setting } from '@element-plus/icons-vue'
import { ref } from 'vue'

const item = {
  date: '2016-05-02',
  name: 'Tom',
  address: 'No. 189, Grove St, Los Angeles',
}
const tableData = ref(Array.from({ length: 20 }).fill(item))

export default {
    data(){
        return {
            showControl: false,
        }
    },
    methods: {
        trytoControl() {
            this.showControl = !this.showControl;
        }
    },
};

</script>

<style>

.layout-container-demo .el-header {
  position: relative;
  background-color: var(--el-color-primary-light-7);
  color: var(--el-text-color-primary);
}
.layout-container-demo .el-aside {
  color: var(--el-text-color-primary);
  background: var(--el-color-primary-light-8);
}
.layout-container-demo .el-menu {
  border-right: none;
}
.layout-container-demo .el-main {
  padding: 0;
}
.layout-container-demo .toolbar {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  right: 20px;
}
</style>