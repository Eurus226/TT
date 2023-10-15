<template>
    <div>
      <el-container>
        <el-main>
          <el-scrollbar>
            <el-table :data="tableData">
              <el-table-column prop="date" label="Date" width="140" />
              <el-table-column prop="name" label="Name" width="120" />
              <el-table-column prop="address" label="Address" />
            </el-table>
          </el-scrollbar>
        </el-main>
      </el-container>
    </div>
</template>

<script>
import { ref } from 'vue'

const item = {
  date: '2016-05-02',
  name: 'Tom',
  address: 'No. 189, Grove St, Los Angeles',
}

export default {
  data() {
    return {
      showControl: false,
      tableData: Array.from({ length: 20 }).fill(item),
      currentMenu: ''  // 添加一个值来记录当前选择的菜单
    }
  },
  methods: {
    trytoControl() {
      this.showControl = !this.showControl;
    },
    handleMenuSelect(index) {
      // 根据菜单的索引值切换当前显示的表格内容
      if (index === '1-1') {
        this.currentMenu = 'memberInfo';
      } else if (index === '1-2') {
        this.currentMenu = 'removeMember';
      } else if (index === '3-1') {
        this.currentMenu = 'changePassword';
      } else if (index === '3-2') {
        this.currentMenu = 'uploadAvatar';
      } else if (index === '3-3') {
        this.currentMenu = 'dismissTeam';
      }
    }
  }
};
</script>
  