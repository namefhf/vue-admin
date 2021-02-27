<template>
  <div>
    <el-upload
      action="https://jsonplaceholder.typicode.com/posts/"
      :on-success="handleSuccess"
      list-type="picture"
    >
      <el-button type="primary">点击上传</el-button>
      <div slot="tip" class="el-upload__tip">
        只能上传jpg/png文件，且不超过500kb
      </div>
    </el-upload>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {
    handleSuccess(response, file, fileList) {
      console.log(file)
      this.$message({
        message: '上传成功',
        type: 'success'
      })
    }
  }
}
</script>

<style lang="scss" scoped></style>
