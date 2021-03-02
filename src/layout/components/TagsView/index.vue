<template>
  <div class="container">
    <div class="tags-view-container">
      <el-tag
        v-for="tag in visitedViews"
        :key="tag.path"
        :closable="!isAffixTag(tag)"
        type="primary"
        size="small"
        :effect="isActive(tag) ? 'dark' : 'plain'"
        @close="handleClose(tag)"
      >
        <router-link
          :to="{ path: tag.path }"
          :style="{ color: isActive(tag) ? '#fff' : '#495060' }"
        >
          {{ tag.meta.title }}
        </router-link>
      </el-tag>
    </div>
    <el-button
      @click="handleCloseAll"
      type="info"
      round
      size="mini"
      class="close-all"
      v-show="showCloseAllBtn"
    >
      全部关闭
    </el-button>
  </div>
</template>

<script>
import path from 'path'
import { mapGetters } from 'vuex'

export default {
  name: 'TagsView',
  data() {
    return {
      // 固定显示的tags
      affixTags: []
    }
  },
  computed: {
    ...mapGetters({
      visitedViews: 'visitedViews',
      routes: 'permission_routes'
    }),
    showCloseAllBtn() {
      return this.affixTags.length !== this.visitedViews.length
    }
  },
  watch: {
    $route() {
      this.addTag()
    }
  },
  created() {
    this.initTags()
    this.addTag()
  },
  methods: {
    isActive(tag) {
      return tag.path === this.$route.path
    },
    // 初始化affix的tag
    initTags() {
      // 过滤出需要初始显示的tags
      this.affixTags = this.filterAffixTags(this.routes)
      // 添加对应的tag
      for (const tag of this.affixTags) {
        this.$store.dispatch('tagsView/addView', tag)
      }
    },
    isAffixTag(tag) {
      return tag.meta && tag.meta.affix
    },
    // 过滤需要初始显示的tag
    filterAffixTags(routes, basePath = '/') {
      let tags = []
      routes.forEach(route => {
        if (route.meta && route.meta.affix) {
          tags.push({
            path: path.resolve(basePath, route.path),
            name: route.name,
            meta: { ...route.meta }
          })
        }
        if (route.children) {
          const tempTags = this.filterAffixTags(route.children, route.path)
          if (tempTags.length >= 1) {
            tags = [...tags, ...tempTags]
          }
        }
      })
      return tags
    },
    // 添加一个tag
    addTag() {
      this.$store.dispatch('tagsView/addView', this.$route)
    },
    // 删除一个tag
    handleClose(tag) {
      this.$store.dispatch('tagsView/delView', tag)
      // console.log(tag)
      if (this.isActive(tag)) {
        this.moveToLastTag()
      }
    },
    moveToLastTag() {
      const lastTag = this.visitedViews.slice(-1)[0]
      this.$router.push(lastTag.path)
    },
    // 关闭全部tag
    handleCloseAll() {
      this.$router.push('/')
      this.$store.dispatch('tagsView/delAllViews')
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  padding: 5px 0;
  justify-content: space-between;
  align-items: center;

  .tags-view-container {
    display: flex;
    align-items: center;

    .el-tag {
      margin-left: 10px;
      a {
        text-decoration: none;
      }
      // span {
      //   color: #495060;
      //   cursor: pointer;
      // }
    }
  }

  .close-all {
    margin-right: 20px;
    font-size: 10px;
  }
}
</style>
