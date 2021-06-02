<template>
  <div>
    <el-container>
      <el-aside>
        <side-bar-menu></side-bar-menu>
      </el-aside>
      <el-container style="margin-left:300px;min-height: 100vh;">
        <el-header>
          <el-dropdown trigger="click">
            <div class="user-wrap">
              <el-avatar
                src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
              ></el-avatar>
              <span class="user-name">
                {{ $store.getters.name }}
                <i class="el-icon-arrow-down el-icon--right"></i>
              </span>
            </div>

            <el-dropdown-menu>
              <el-dropdown-item>仓库地址</el-dropdown-item>
              <el-dropdown-item @click.native="handleLogout">
                退出登录
              </el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </el-header>
        <tags-view />
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
import TagsView from './components/TagsView'
export default {
  components: {
    SideBarMenu,
    TagsView
  },
  methods: {
    async handleLogout() {
      await this.$store.dispatch('user/logout')
      this.$router.push('/login')
    }
  }
}
</script>

<style lang="scss" scoped>
.el-header {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  box-shadow: 0px 0px 1px #000000;
  // background-color: #494e53;
  .user-wrap {
    display: flex;
    align-items: center;
  }
  .user-name {
    line-height: 40px;
    cursor: pointer;
    user-select: none;
  }
}
.el-aside {
  height: 100vh;
  position: fixed;
  background-color: rgb(84, 92, 100);
}

.el-main {
  background-color: #f0f2f5;
}
</style>
