<template>
  <div>
    <el-table border :data="tableData" stripe style="width: 100%">
      <el-table-column type="selection" width="55"></el-table-column>
      <el-table-column type="index" width="55"></el-table-column>
      <el-table-column
        prop="date"
        label="日期"
        width="180"
        sortable
      ></el-table-column>
      <el-table-column prop="name" label="姓名" width="180"></el-table-column>
      <el-table-column prop="address" label="地址"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button type="warning" size="small">编辑</el-button>
          <el-popconfirm
            style="margin-left:10px"
            title="确定删除吗？"
            @confirm="deleteItem(scope.$index)"
          >
            <el-button type="danger" size="small" slot="reference">
              删除
            </el-button>
          </el-popconfirm>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      :total="tableData.length"
      :current-page="1"
      :page-size="3"
      :page-sizes="[3, 5, 10]"
      layout="total, sizes, prev, pager, next, jumper"
    ></el-pagination>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          date: '2016-05-02',
          name: '王小虎1',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-04',
          name: '王小虎2',
          address: '上海市普陀区金沙江路 1517 弄'
        },
        {
          date: '2016-05-01',
          name: '王小虎3',
          address: '上海市普陀区金沙江路 1519 弄'
        },
        {
          date: '2016-05-03',
          name: '王小虎4',
          address: '上海市普陀区金沙江路 1516 弄'
        },
        {
          date: '2016-05-03',
          name: '王小虎5',
          address: '上海市普陀区金沙江路 1516 弄'
        },
        {
          date: '2016-05-03',
          name: '王小虎6',
          address: '上海市普陀区金沙江路 1516 弄'
        },
        {
          date: '2016-05-03',
          name: '王小虎7',
          address: '上海市普陀区金沙江路 1516 弄'
        }
      ]
    }
  },
  methods: {
    deleteItem(index) {
      console.log(index)
      this.tableData.splice(index, 1)
      this.$message({
        message: '删除成功',
        type: 'success'
      })
    }
  }
}
</script>

<style lang="scss" scoped></style>
