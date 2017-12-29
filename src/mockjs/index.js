import Mock from 'mockjs'

Mock.mock('getMenuList', [
  {
    name: '系统设置',
    order: 3,
    isShow: 1,
    children: [
      {
        name: '菜单管理',
        routeName: 'menuManage',
        order: 4,
        isShow: 1
      },
      {
        name: '角色管理',
        routeName: 'AdminUserManage',
        order: 3,
        isShow: 1
      },
      {
        name: '部门管理',
        routeName: 'DepartmentManage',
        order: 2,
        isShow: 1
      },
      {
        name: '权限管理',
        routeName: 'PermissionManage',
        order: 1,
        isShow: 1
      }
    ]
  },
  {
    name: '系统设置2',
    order: 2,
    isShow: 1,
    children: [
      {
        name: '菜单管理2',
        routeName: 'menuManage',
        order: 4,
        isShow: 1
      },
      {
        name: '角色管理2',
        routeName: 'AdminUserManage',
        order: 3,
        isShow: 1
      },
      {
        name: '部门管理2',
        routeName: 'DepartmentManage',
        order: 2,
        isShow: 1
      },
      {
        name: '权限管理2',
        routeName: 'PermissionManage',
        order: 1,
        isShow: 1
      }
    ]
  },
  {
    name: '系统设置3',
    order: 1,
    isShow: 1,
    children: [
      {
        name: '菜单管理3',
        routeName: 'menuManage',
        order: 4,
        isShow: 1
      },
      {
        name: '角色管理3',
        routeName: 'AdminUserManage',
        order: 3,
        isShow: 1
      },
      {
        name: '部门管理3',
        routeName: 'DepartmentManage',
        order: 2,
        isShow: 1
      },
      {
        name: '权限管理3',
        routeName: 'PermissionManage',
        order: 1,
        isShow: 1
      }
    ]
  },
  {
    name: '网站后台管理',
    order: -1,
    isShow: 1,
    children: [
      {
        name: 'Logo管理',
        routeName: 'LogoManage',
        order: 4
      }
    ]
  }
])
