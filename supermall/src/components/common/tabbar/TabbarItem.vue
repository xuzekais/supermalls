<template>
  <div class="tabbar-item" @click="itemClick">
    <div v-if="!isActive"><slot name="tabbar-item-img"></slot></div>
    <div v-else><slot name="tabbar-item-active-img"></slot></div>
    <div :style="activeStyle"><slot name="tabbar-item-text"></slot></div>
    <!-- <img src="../../assets/img/tabbar/home.svg" alt="">
    <div >首页</div> -->
  </div>
</template>

<script>
  export default {
    name: 'TabberItem',
    props: {
      path: String,
      activeColor:{
        type: String,
        default: 'red'
      }
    },
    data() {
      return {
        // isActive: false,
      }
    },
    computed:{
      isActive(){
        return this.$route.path == this.path
      },
      activeStyle(){
        return this.isActive ? {color: this.activeColor} : {}
      }
    },
    methods: {
      itemClick(){
        console.log(this.$route)
        this.$router.replace(this.path)
      }
    }
  }
  
</script>

<style>
  .tabbar-item{
    flex: 1;
    text-align: center;
    height: 49px;
    font-size: 14px;
  }
  .tabbar-item img{
    width: 24px;
    height: 24px;
    margin-top: 3px;
  }
  .active{
    color: red;
  }
</style>
