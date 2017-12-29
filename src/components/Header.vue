<template>
  <div class="tag-view-container">
    <el-tag
    v-for="(tag,index) in tags"
    :key="index"
    :type="tag.type"
    closable :class="['tag-view']" 
    @close="closeTag(index)" 
    @click.native="choseTag(index)">
    <router-link class="tag-link" :to="tag.path" ><span>{{tag.name}}</span></router-link>
    </el-tag>
</div>
</template>

<style>
  .tag-view-container {
    float: left;
  }
  .tag-view {
    margin-left: 10px;
  }
  .tag-link {
    color: inherit;
    text-decoration:none
  }
</style>

<script>
  export default {
    data () {
      return {
      }
    },
    computed: {
      tags () {
        return this.$store.getters.getTags
      }
    },
    methods: {
      closeTag (index) {
        let choseTagType = this.tags[index].type
        this.$store.commit('closeTag', index)
        if (this.tags.length === 0) {
          this.$router.push('/')
          return true
        }
        if (choseTagType === '') {
          if (index === this.tags.length) {
            this.choseTag(index - 1)
          } else {
            this.choseTag(index)
          }
        }
      },
      choseTag (index) {
        this.$store.commit('choseTag', index)
        this.$router.push(this.tags[index].path)
      }
    }
  }
</script>
