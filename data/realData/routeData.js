const routeList = [
  //  system
  {
    menuId: 1,
    menuName: "系统管理",
    parentId: 0,
    menuType: "1",
    path: "/system",
    name: "SystemPage",
    component: "",
    icon: "Tools",
    isHide: false,
    isLink: "",
    isCache: false,
    isAffix: false,
    redirect: "/system/userCenter",
  },
  //  system/userCenter
  {
    menuId: 11,
    menuName: "个人中心",
    parentId: 1,
    menuType: "2",
    path: "/system/userCenter",
    name: "UserCenter",
    component: "system/userCenter/index",
    icon: "User",
    isHide: false,
    isLink: "",
    isCache: true,
    isAffix: false,
    redirect: "",
  },
  // nest-menu
  {
    menuId: 6,
    menuName: "嵌套路由",
    parentId: 0,
    menuType: "1",
    path: "/nest-menu",
    name: "nestMenu",
    component: "",
    icon: "KnifeFork",
    isHide: false,
    isLink: "",
    isCache: false,
    isAffix: false,
    redirect: "/nest-menu/menu1",
  },
  // nest-menu/menu1
  {
    menuId: 61,
    menuName: "菜单一",
    parentId: 6,
    menuType: "2",
    path: "/nest-menu/menu1",
    name: "NestMenuPage1",
    component: "nest-menu/menu1",
    icon: "Coffee",
    isHide: false,
    isLink: "",
    isCache: true,
    isAffix: false,
    redirect: "",
  },
  // nest-menu/submenu
  {
    menuId: 68,
    menuName: "次级菜单",
    parentId: 6,
    menuType: "2",
    path: "/nest-menu/submenu",
    name: "NestMenuPage",
    component: "",
    icon: "Burger",
    isHide: false,
    isLink: "",
    isCache: true,
    isAffix: false,
    redirect: "/nest-menu/submenu/menu2",
  },
  // nest-menu/submenu/menu2
  {
    menuId: 69,
    menuName: "菜单二",
    parentId: 68,
    menuType: "2",
    path: "/nest-menu/submenu/menu2",
    name: "NestMenuPage2",
    component: "nestMenu/menu2",
    icon: "Chicken",
    isHide: false,
    isLink: "",
    isCache: true,
    isAffix: false,
    redirect: "",
  },
];

export { routeList };
