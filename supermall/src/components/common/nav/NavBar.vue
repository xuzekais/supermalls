<template>
  <div class="nav">
    <div class="nav-left"><slot name="nav-left"></slot></div>
    <div class="nav-center"><slot name="nav-center"></slot></div>
    <div class="nav-rigth"><slot name="nav-rigth"></slot></div>
  </div>
</template>

<script>
   

  export default {
    name: 'NavBar',
    props:{
      centerClass:{
        type: String
      }
    }
  }
</script>

<style>
  .nav{
    display: flex;
    height: 44px;
    line-height: 44px;
    text-align: center;
    box-shadow: 0px 1px 1px rgab(100,100,100,.1);
  }
  .nav-left,
  .nav-rigth{
    width: 60px;
    
  }
  .nav-center{
    flex: 1;
  }
</style>