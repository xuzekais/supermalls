<template>
  <div>
    
    <tabbar>
      <tabbar-item path="/home">
        <img src="../../../assets/img/tabbar/home.svg" alt="" slot="tabbar-item-img">
        <img src="../../../assets/img/tabbar/home_active.svg" alt="" slot="tabbar-item-active-img">
        <div slot="tabbar-item-text">首页</div>
      </tabbar-item>
      <tabbar-item path="/category">
        <img src="../../../assets/img/tabbar/category.svg" alt="" slot="tabbar-item-img">
        <img src="../../../assets/img/tabbar/category_active.svg" alt="" slot="tabbar-item-active-img">
        <div slot="tabbar-item-text">分类</div>
      </tabbar-item >
      <tabbar-item path="/shopcart">
        <img src="../../../assets/img/tabbar/shopcart.svg" alt="" slot="tabbar-item-img">
        <img src="../../../assets/img/tabbar/shopcart_active.svg" alt="" slot="tabbar-item-active-img">
        <div slot="tabbar-item-text">购物车</div>
      </tabbar-item>
      <tabbar-item path="/profile">
        <img src="../../../assets/img/tabbar/profile.svg" alt="" slot="tabbar-item-img">
        <img src="../../../assets/img/tabbar/profile_active.svg" alt="" slot="tabbar-item-active-img">
        <div slot="tabbar-item-text">我的</div>
      </tabbar-item>
    </tabbar>
  </div>
</template>

<script>
  import Tabbar from '../../common/tabbar/Tabbar.vue';
  import TabbarItem from '../../common/tabbar/TabbarItem'

  export default {
    name: 'MainTabbar',
    components:{
      Tabbar,
      TabbarItem
    }
  }
</script>

<style>
  
</style>