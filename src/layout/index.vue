<template>
  <div>
    <el-container>
      <el-aside>
        <side-bar-menu></side-bar-menu>
      </el-aside>
      <el-container>
        <el-header>
          <el-dropdown trigger="click">
            <div class="user-wrap">
              <el-avatar
                src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
              ></el-avatar>
              <span class="user-name">
                admin
                <i class="el-icon-arrow-down el-icon--right"></i>
              </span>
            </div>

            <el-dropdown-menu>
              <el-dropdown-item>仓库地址</el-dropdown-item>
              <el-dropdown-item>退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </el-header>
        <el-main>
          <el-card>
            <router-view />
          </el-card>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import SideBarMenu from './components/SideBarMenu'
export default {
  components: {
    SideBarMenu
  }
}
</script>

<style lang="scss" scoped>
.el-header {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  box-shadow: 0px 0px 2px #000000;
  .user-wrap {
    display: flex;
    align-items: center;
  }
  .user-name {
    line-height: 40px;
  }
}
.el-aside {
  height: 100vh;
  // width: auto !important;
}
</style>
