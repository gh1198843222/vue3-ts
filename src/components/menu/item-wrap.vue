<template >
  <template v-for="item in menuList" :key='item.path'>

    <a-sub-menu v-if='item.children && item.meta?.name'>
      <template #title>{{item.meta.name}}</template>
      <ItemWrap :menuList='item.children'/>
    </a-sub-menu>
     <a-menu-item v-else-if='!item.redirect && !item.children'>
      <span>{{item.meta?.name}}</span>
    </a-menu-item>
    <ItemWrap v-else :menuList='item.children'/>
  </template>
  
</template>
<script lang='ts'>
import { defineComponent } from 'vue'
export default defineComponent({
  name:'ItemWrap',
  components:{
  },
  props:{
    menuList:{
      type:Array,
      default:()=>[]
    }
  },
  setup() {
    
  },
})
</script>
