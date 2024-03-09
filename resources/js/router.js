import {createRouter, createWebHistory} from 'vue-router'

import Login from "./components/panel/admin/Login";

import UserEdit from "./components/panel/user/UserEdit";
import SlideCreate from "./components/panel/slide/SlideCreate";
import SlideEdit from "./components/panel/slide/SlideEdit";

import Profile from "./components/panel/admin/Profile";
import Error404 from "./components/panel/error/Error404";

const routes = [
    //panel

    {
        path: "/panel",
        // name: "Home",
        component: () => import(/* webpackChunkName: "home" */ '../js/components/panel/Home'),

    },
    {
        path: "/panel/categories",
        //     component: () => import(/* webpackChunkName: "test" */ '../js/components/panel/product/Categories'),
        // name: "Categories",
        component: () => import(/* webpackChunkName: "Categories" */ '../js/components/panel/Categories'),
        props: true,
        params: true
    },
    {
        path: "/panel/priority/products",
        component: () => import(/* webpackChunkName: "productPriority" */  './components/panel/product/ProductsPriority'),
        name: "productPriority",
        params: true,
        props: true,
    },
    {
        path: "/panel/products",
        component: () => import(/* webpackChunkName: "productAllData" */  './components/panel/allData'),
        name: "productAllData",
        params: true,
        props: true,
    },
    {
        path: "/panel/new/product",
        name: "ProductCreate",
        component: () => import(/* webpackChunkName: "ProductCreate" */ '../js/components/panel/product/ProductCreate'),
        // component: ProductCreate,
        params: true
    },
    {
        path: "/panel/edit/product/:id",
        name: "ProductEdit",
        component: () => import(/* webpackChunkName: "ProductEdit" */ '../js/components/panel/product/ProductEdit'),
        params: true
    },
    {
        path: "/panel/product/:id",
        name: "Product",
        component: () => import(/* webpackChunkName: "Product" */ '../js/components/panel/product/Product'),
        params: true

    },

    {

        path: "/panel/orders",
        component: () => import(/* webpackChunkName: "orderAllData" */  './components/panel/allData'),
        name: 'orderAllData',
        params: true,
        props: true,

        // component: Orders,
    },
    {
        path: "/panel/new/order",
        name: "OrderCreate",
        component: () => import(/* webpackChunkName: "OrderCreate" */ '../js/components/panel/order/OrderCreate'),
        params: true
    },
    {
        path: "/panel/edit/order/:id",
        name: "OrderEdit",
        component: () => import(/* webpackChunkName: "OrderEdit" */ '../js/components/panel/order/OrderEdit'),
        params: true
    },
    {
        path: "/panel/order/:id",
        name: "Order",
        component: () => import(/* webpackChunkName: "Order" */ '../js/components/panel/order/Order'),
        params: true

    },

    {
        path: "/panel/articles",
        component: () => import(/* webpackChunkName: "articleAllData" */ './components/panel/allData'),
        name: 'articleAllData',
        params: true,
        props: true

    },
    {
        path: "/panel/new/article",
        name: "ArticleCreate",
        component: () => import(/* webpackChunkName: "ArticleCreate" */ './components/panel/article/ArticleCreate'),
        params: true
    },
    {
        path: "/panel/edit/article/:id",
        name: "ArticleEdit",
        component: () => import(/* webpackChunkName: "ArticleEdit" */ './components/panel/article/ArticleEdit'),
        params: true
    },
    {
        path: "/panel/article/:id",
        name: "Article",
        component: () => import(/* webpackChunkName: "Article" */ './components/panel/article/Article'),
    },


    {
        path: "/panel/slides",
        name: "Slides",
        component: () => import(/* webpackChunkName: "Slides" */ '../js/components/panel/slide/Slides'),

        // component: Slides,
    },
    {
        path: "/panel/new/slide",
        name: "SlideCreate",
        component: SlideCreate,
        params: true
    },
    {
        path: "/panel/edit/slide/:id",
        name: "SlideEdit",
        component: SlideEdit,
        params: true
    },




    {
        path: "/panel/blogs",
        component: () => import(/* webpackChunkName: "blogAllData" */ './components/panel/allData'),
        name: "blogAllData",
        params: true,
        props: true
    },
    {
        path: "/panel/new/blog",
        name: "BlogCreate",
        component: () => import(/* webpackChunkName: "BlogCreate" */ '../js/components/panel/blog/BlogCreate'),
        params: true
    },
    {
        path: "/panel/edit/blog/:id",
        name: "BlogEdit",
        component: () => import(/* webpackChunkName: "BlogEdit" */ '../js/components/panel/blog/BlogEdit'),

        params: true
    },
    {
        path: "/panel/blog/:id",
        name: "Blog",
        component: () => import(/* webpackChunkName: "Blog" */ '../js/components/panel/blog/Blog'),
        params: true
    },
    {
        path: "/panel/teasers",
        component: () => import(/* webpackChunkName: "teaserAllData" */ './components/panel/allData'),
        name: "teaserAllData",
        params: true,
        props: true
    },
    {
        path: "/panel/new/teaser",
        name: "TeaserCreate",
        component: () => import(/* webpackChunkName: "TeaserCreate" */ '../js/components/panel/teaser/TeaserCreate'),
        params: true
    },
    {
        path: "/panel/edit/teaser/:id",
        name: "TeaserEdit",
        component: () => import(/* webpackChunkName: "TeaserEdit" */ '../js/components/panel/teaser/TeaserEdit'),
        params: true
    },
    {
        path: "/panel/teaser/:id",
        name: "Teaser",
        component: () => import(/* webpackChunkName: "Teaser" */ '../js/components/panel/teaser/Teaser'),
        params: true
    },




    {
        path: "/panel/user/:id",
        name: "User",
        component: () => import(/* webpackChunkName: "User" */ '../js/components/panel/user/User'),

        // component: User,
    },
    {
        path: "/panel/users",
        component: () => import(/* webpackChunkName: "userAllData" */  './components/panel/allData'),
        name: 'userAllData',
        params: true,
        props: true,

    },
    {
        path: "/panel/edit/user/:id",
        name: "UserEdit",
        component: UserEdit,
        params: true
    },
    {
        path: "/",
        name: 'Login0',
        component: Login,
    },
    {
        path: "/panel/login",
        name: "Login",
        component: Login,
    },
    {
        path: "/panel/profile",
        name: "Profile",
        component: Profile,
    },


    {
        path: "/panel/admins",
        component: () => import(/* webpackChunkName: "adminAllData" */  './components/panel/allData'),
        name: "adminAllData",
        params: true,
        props: true

    },

    {
        path: "/panel/finance",
        component: () => import(/* webpackChunkName: "financeAllData" */  './components/panel/allData'),
        name: "financeAllData",
        params: true,
        props: true
    },

    // {
    //     path: "/sample",
    //     name: "sample",
    //     component: () => import(/* webpackChunkName: "sample" */ './components/panel/report/catSample'),
    // },
    // {
    //     path: "/chart",
    //     name: "chart",
    //     component: () => import(/* webpackChunkName: "chart" */ './components/panel/report/Chart'),
    // },
    {
        path: "/:catchAll(.*)",
        name: "Error404",
        component: Error404,
    } ,

];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
