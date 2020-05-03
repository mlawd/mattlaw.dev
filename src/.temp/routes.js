export default [
  {
    path: "/me/",
    component: () => import(/* webpackChunkName: "page--src--pages--me-vue" */ "/home/np-matt/projects/mattlaw.dev/src/pages/Me.vue")
  },
  {
    path: "/design-components/",
    component: () => import(/* webpackChunkName: "page--src--pages--design-components-vue" */ "/home/np-matt/projects/mattlaw.dev/src/pages/DesignComponents.vue")
  },
  {
    name: "404",
    path: "/404/",
    component: () => import(/* webpackChunkName: "page--node-modules--gridsome--app--pages--404-vue" */ "/home/np-matt/projects/mattlaw.dev/node_modules/gridsome/app/pages/404.vue")
  },
  {
    name: "home",
    path: "/",
    component: () => import(/* webpackChunkName: "page--src--pages--index-vue" */ "/home/np-matt/projects/mattlaw.dev/src/pages/Index.vue")
  },
  {
    name: "*",
    path: "*",
    component: () => import(/* webpackChunkName: "page--node-modules--gridsome--app--pages--404-vue" */ "/home/np-matt/projects/mattlaw.dev/node_modules/gridsome/app/pages/404.vue")
  }
]

