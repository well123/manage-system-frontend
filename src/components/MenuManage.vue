<template>
  <el-card>
    <el-table ref="menuTable" id="menu-table"  row-key="order" :data="menuList" fit style="width: 100%" 
    @expand-change="expandChange">
      <el-table-column type="expand">
        <template slot-scope="props">
          <el-table :data="props.row.children" row-key="order" :show-header="false">
            <el-table-column>
              <template slot-scope="child">
                <el-input v-model="child.row.name"></el-input>
              </template>
            </el-table-column>
            <el-table-column>
              <template slot-scope="child">
                <el-input v-model="child.row.routeName"></el-input>
              </template>
            </el-table-column>
            <el-table-column>
              <template slot-scope="child">
                <el-input v-model="child.row.icon"></el-input>
              </template>
            </el-table-column>
            <el-table-column>
              <template slot-scope="child">
                <i :class="child.row.isShow?'el-icon-check':'el-icon-close'" 
                @click="changeSubShow(props.$index, child.$index)"></i>
              </template>
            </el-table-column>
            <el-table-column>
              <template slot-scope="child">
                <el-button v-show="props.row.children.length > 1" 
                @click="deleteSubMenu(props.$index, child.$index)">删除</el-button>
                <el-button v-show="props.row.children.length === (child.$index + 1)" 
                @click="addSubMenu(props.$index)">新增</el-button>
              </template>
            </el-table-column>
          </el-table>
        </template>
      </el-table-column>
      <el-table-column label="名称">
        <template slot-scope="props">
          <el-input v-model="props.row.name"></el-input>
        </template>
      </el-table-column>
      <el-table-column label="链接到">
        <template slot-scope="props">
          <el-input v-model="props.row.routeName"></el-input>
        </template>
      </el-table-column>
      <el-table-column label="图标">
        <template slot-scope="props">
          <el-icon></el-icon>
        </template>
      </el-table-column>
      <el-table-column label="是否展示">
        <template slot-scope="props">
          <i :class="props.row.isShow ?'el-icon-check':'el-icon-close'" @click="changeShow(props.$index)"></i>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="props">
          <el-button v-show="menuList.length > 1" @click="deleteMenu(props.$index)">删除</el-button>
          <el-button v-show="menuList.length === (props.$index + 1)" @click="addMenu">新增</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div style="margin-top:20px">
      <el-button type="primary" @click="saveMenu">保存</el-button>
    </div>
  </el-card>
</template>
<script>
  import sortablejs from 'sortablejs'
  export default {
    data () {
      return {
        menuList: [],
        sortable: null,
        childrenSortableList: []
      }
    },
    mounted () {
      this.$axios.get('getMenuList').then(response => {
        this.menuList = response.data
        this.$nextTick(() => {
          this.setSort()
        })
      })
    },
    methods: {
      setSort () {
        const el = document.querySelectorAll('#menu-table > .el-table__body-wrapper > table > tbody')[0]
        this.sortable = sortablejs.create(el, {
          ghostClass: 'sortable-ghost',
          onEnd: evt => {
            const targetRow = this.menuList.splice(evt.oldIndex, 1)[0]
            this.menuList.splice(evt.newIndex, 0, targetRow)
          },
          onStart: evt => {
            this.$refs.menuTable.toggleRowExpansion(this.menuList[evt.oldIndex], false)
          }
        })
      },
      expandChange (row, expandRow) {
        let index = this.menuList.indexOf(row)
        this.$nextTick(() => {
          let el = document.querySelectorAll('#menu-table > .el-table__body-wrapper > table > tbody > .el-table__row')[index].nextElementSibling
          if (el) {
            el = el.querySelectorAll('.el-table__body-wrapper > table > tbody')[0]
          }
          if (el) {
            this.sortable = sortablejs.create(el, {
              ghostClass: 'sortable-ghost',
              onEnd: evt => {
                const targetRow = this.menuList[index].children.splice(evt.oldIndex, 1)[0]
                this.menuList[index].children.splice(evt.newIndex, 0, targetRow)
              }
            })
          }
        })
      },
      addMenu () {
        this.menuList.push({
          name: '',
          routeName: '',
          icon: '',
          isShow: 1,
          children: [{}]
        })
      },
      addSubMenu (index) {
        this.menuList[index].children.push({})
      },
      deleteMenu (index) {
        this.menuList.splice(index, 1)
      },
      deleteSubMenu (menuIndex, subMenuIndex) {
        this.menuList[menuIndex].children.splice(subMenuIndex, 1)
      },
      saveMenu () {
        this.$axios.post('saveMenu', {
          menuList: this.menuList
        }).then(response => {
          console.log(response.data)
        })
      },
      changeShow (index) {
        console.log('dd')
        this.menuList[index].isShow = this.menuList[index].isShow ? 0 : 1
      },
      changeSubShow (index, subIndex) {
        this.menuList[index].children[subIndex].isShow = this.menuList[index].children[subIndex].isShow ? 0 : 1
      }
    }
  }
</script>
<style>
.sortable-ghost{
  opacity: .8;
  color: #fff!important;
  background: #42b983!important;
}
</style>
