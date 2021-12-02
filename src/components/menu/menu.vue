<template>
  <div class="menu-container">
    <a-menu :mode="mode" :theme='theme'>
      <ItemWrap :menuList='routes'/>
    </a-menu>
  </div>
 
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ItemWrap from './item-wrap.vue'

export default defineComponent({
  components:{
    ItemWrap
  },
  props:{
    routes:{
      default:()=>[],
      type:Array
    },
    mode:{
      default:'inline',
      type:String
    },
    theme:{
      default:'dark',
      type:String
    }
  },
  setup() {
    
  },
  created(){
    console.log('menu=====>',this.routes)
  }
})
</script>
<style lang="less" scoped>
  .menu-container{
    height: 100%;
    // :deep(.ant-menu){
    //   height: 100%;
    // }
    /deep/ .ant-menu{
      height: 100%;
    }

    // ::v-deep .ant-menu{
    //   height: 100%;
    // }
    
  }
  
</style>
