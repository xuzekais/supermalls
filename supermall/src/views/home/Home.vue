<template>
  <div>
    <!-- 导航栏 -->
    <nav-bar class="home-nav">
      <div slot="nav-center" >购物街</div>
    </nav-bar>
  </div>

</template>

<script>
  import NavBar from '../../components/common/nav/NavBar'

  export default {
    name: 'Home',
    components:{
      NavBar
    }
  }
</script>

<style >
  .home-nav{
    background-color: var(--color-tint);
    color: #fff;
  }
</style>