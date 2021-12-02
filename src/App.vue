<template>
  <header></header>
  <section class="content-container">
    <div class="content-container-menu">
      <Menu :routes='routes'></Menu>
    </div>
    <router-view class="content-container-page"></router-view>
  </section>
  <footer>
  </footer>
  
</template>

<script lang="ts">
// import HomeIndex from './views/index.vue'
import { defineComponent } from 'vue';
// import HelloWorld from './components/HelloWorld.vue';
import Menu from './components/menu/menu.vue'
import {routes} from './router'
export default defineComponent({
  name: 'App',
  components: {
    Menu,
    // HomeIndex
  },
  setup(){
    return {
      routes
    }
  }
});
</script>

<style lang="less" scoped>
  header,footer{
    height: 50px;
    background: rgb(44, 42, 42);
  }
  .content-container{
    display: flex;
    height: calc(100vh - 100px);
    &-menu{
      width: 200px;
    }
    &-page{
      flex:1
    }
  }

  footer{
    background: url('~@/assets/logo.png');
  }
</style>

<style>
#app{
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
}
</style>



